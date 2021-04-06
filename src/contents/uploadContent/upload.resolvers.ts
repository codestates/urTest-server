import { Resolvers } from "../../types";
import { protectedResolver } from "../../users/users.utils";
import { createWriteStream } from "fs";
import client from "../../client";

const resolvers: Resolvers = {
  Mutation: {
    uploadContent: protectedResolver(
      async (_, { title, desc, files }, { loggedInUser }) => {
        let fileUrl = null;
        let newFile = [];
        console.log(files[1], "*********", files[0]);
        if (!files) {
          return {
            ok: false,
            error: "can't find photos",
          };
        }
        if (files) {
          newFile = await Promise.all(
            files.map(async (file: any) => {
              const { filename, createReadStream } = await file;
              const newFilename = `${
                loggedInUser.id
              }=${Date.now()}-${filename}`;
              const readStream = createReadStream();
              const writeStream = createWriteStream(
                process.cwd() + "/uploads/" + newFilename
              );
              readStream.pipe(writeStream);
              console.log(fileUrl);
              return (fileUrl = `http://localhost:4000/static/${newFilename}`);
            })
          );
        }
        const newFileObj = newFile.map((file) => ({ photos: file }));
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
