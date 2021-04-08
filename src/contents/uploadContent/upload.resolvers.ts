import { Resolvers } from "../../types";
import { protectedResolver } from "../../users/users.utils";
import { createWriteStream } from "fs";
import { uploadToS3 } from "../../../shared/shared.utils";

const resolvers: Resolvers = {
  Mutation: {
    uploadContent: protectedResolver(
      async (_, { title, desc }, { loggedInUser, client }) => {
        // let fileUrl = null;
        // let newFile = [];
        // if (!files) {
        //   throw new Error("Can not upload files");
        // }
        // if (files) {
        //   newFile = await Promise.all(
        //     files.map(async (file: any) => {
        //       fileUrl = await uploadToS3(file, loggedInUser.id, "uploads");
        //       return fileUrl;
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
        //     })
        //   );
        // }

        // const newFileObj = newFile.map((file) => ({
        //   photoUrl: file,
        //   photoName: file.split("-")[file.split("-").length - 1],
        // }));
        return await client.content.create({
          data: {
            type: "imgGame",
            title,
            desc,
            userId: loggedInUser.id,
            // photos: {
            //   create: newFileObj,
            // },
          },
        });
      }
    ),
    uploadPhoto: protectedResolver(
      async (_, { file, id }, { loggedInUser, client }) => {
        const content = await client.content.findFirst({
          where: {
            id,
          },
        });
        let fileUrl = null;
        if (!file) {
          throw new Error("Can not upload file");
        }
        if (file) {
          fileUrl = await uploadToS3(file, loggedInUser.id, "uploads");
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
          return await client.photo.create({
            data: {
              contentId: content.id,
              photoUrl: fileUrl,
              photoName: fileUrl.split("-")[fileUrl.split("-").length - 1],
            },
          });
        }

        // const newFileObj = {
        //   photoUrl: fileUrl,
        //   photoName: fileUrl.split("-")[file.split("-").length - 1],
        // };
      }
    ),
  },
};

export default resolvers;
