import { createWriteStream } from "fs";
import * as bycrpt from "bcrypt";
import { protectedResolver } from "../users.utils";
import { Resolvers } from "../../types";

const resolvers: Resolvers = {
  Mutation: {
    editProfile: protectedResolver(
      async (
        _,
        { userName, email, password: newPassword },
        { loggedInUser, client }
      ) => {
        let uglyPassword = null;
        if (newPassword) {
          uglyPassword = await bycrpt.hash(newPassword, 10);
        }
        const updateUser = await client.user.update({
          where: {
            id: loggedInUser.id,
          },
          data: {
            userName,
            email,
            ...(uglyPassword && { password: uglyPassword }),
          },
        });
        if (updateUser.id) {
          return {
            ok: true,
          };
        } else {
          return {
            ok: false,
            error: "Could not update profile",
          };
        }
      }
    ),
  },
};

export default resolvers;
