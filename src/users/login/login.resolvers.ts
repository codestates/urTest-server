import client from "../../client";
import * as bycrpt from "bcrypt";
import * as jwt from "jsonwebtoken";
import { Resolvers } from "../../types";

const resolvers: Resolvers = {
  Mutation: {
    login: async (_, { email, password }) => {
      // todo: find user with args.username
      // todo: check password with args.password
      // todo: issue a token and send it to the user
      const user = await client.user.findFirst({ where: { email } });
      if (!user) {
        return {
          ok: false,
          error: "User not found.",
        };
      }
      const passwordOk = await bycrpt.compare(password, user.password);
      if (!passwordOk) {
        return {
          ok: false,
          error: "Incorrect password",
        };
      }
      const token = await jwt.sign({ id: user.id }, process.env.SECRET_KEY);
      return {
        ok: true,
        token,
      };
    },
  },
};

export default resolvers;
