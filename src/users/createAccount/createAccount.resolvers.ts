import * as bycrpt from "bcrypt";
import { Resolvers } from "../../types";

const resolvers: Resolvers = {
  Mutation: {
    createAccount: async (_, { userName, email, password }, { client }) => {
      // todo: check if username or email are already on DB.
      // todo: hass password
      // todo: save and return the user
      try {
        const existingUser = await client.user.findFirst({
          where: { email },
        });
        if (existingUser) {
          return {
            ok: false,
            error: "Email is already taken.",
          };
          // throw new Error("Email is already taken.");
        }
        const uglyPassword = await bycrpt.hash(password, 10);
        await client.user.create({
          data: {
            userName,
            email,
            password: uglyPassword,
          },
        });
        return {
          ok: true,
        };
      } catch (error) {
        return error;
      }
    },
  },
};

export default resolvers;
