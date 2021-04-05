import { Resolvers } from "../../types";
import { protectedResolver } from "../../users/users.utils";
import { createWriteStream } from "fs";
import client from "../../client";
import { uploadToS3 } from "../../../shared/shared.utils";

const resolvers: Resolvers = {
  Mutation: {
    uploadContent: protectedResolver(
      async (_, { title, desc, files }, { loggedInUser }) => {
        if (!files) {
          return {
            ok: false,
            error: "can't find text",
          };
        }
        if (files) {
        }
      }
    ),
  },
};

export default resolvers;
