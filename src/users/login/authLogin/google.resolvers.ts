import * as bycrpt from "bcrypt";
import * as jwt from "jsonwebtoken";
import { OAuth2Client } from "google-auth-library";
import client from "../../../client";
import { Resolvers } from "../../../types";

const resolvers: Resolvers = {
  Mutation: {
    authLogin: async (_, { token }) => {
      const oauthClient = new OAuth2Client("");
      const ticket = await oauthClient.verifyIdToken({
        idToken: token,
        audience: "",
      });
      const payload = ticket.getPayload();
      const user_email = payload["email"];
      const user = await client.user.findFirst({
        where: {
          email: user_email,
        },
      });
      if (user) {
        // ! email 있으면 todo 없으면 새로만듬
      }
      return client.user.create({
        data: {
          userName: "null",
          email: user_email,
          password: "password",
        },
      });
    },
  },
};

export default resolvers;
