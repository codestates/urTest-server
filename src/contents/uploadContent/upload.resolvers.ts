import { Resolvers } from "../../types";
import { protectedResolver } from "../../users/users.utils";
import { createWriteStream } from "fs";
import client from "../../client";
import { uploadToS3 } from "../../../shared/shared.utils";

const resolvers: Resolvers = {
  Mutation: {
    uploadContent: protectedResolver(
      async (_, { title, desc, files }, { loggedInUser }) => {
        let fileUrl = null;
        let newFile = [];
        if (!files) {
          return {
            ok: false,
            error: "can't find photos",
          };
        }
        if (files) {
          newFile = await Promise.all(
            files.map(async (file: any) => {
              fileUrl = await uploadToS3(file, loggedInUser.id, "uploads");
              return fileUrl;
              // const { filename, createReadStream } = await file;
              // const newFilename = `${
              //   loggedInUser.id
              // }=${Date.now()}-${filename}`;
              // const readStream = createReadStream();
              // const writeStream = createWriteStream(
              //   process.cwd() + "/uploads/" + newFilename
              // );

              // readStream.pipe(writeStream);
              // fileUrl = `http://localhost:4000/uploads/${newFilename}`;
            })
          );
        }

        const newFileObj = newFile.map((file) => ({
          photos: file,
          photoName: file.split("-")[file.split("-").length - 1],
        }));
        await client.content.create({
          data: {
            title,
            desc,
            userId: loggedInUser.id,
            photos: {
              create: newFileObj,
            },
          },
        });
        return {
          ok: true,
        };
      }
    ),
  },
};

export default resolvers;
