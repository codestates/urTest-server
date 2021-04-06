import * as jwt from "jsonwebtoken";
import { OAuth2Client } from "google-auth-library";
import { Resolvers } from "../../../types";

const resolvers: Resolvers = {
  Mutation: {
    authLogin: async (_, { googleToken }, { client }) => {
      const oauthClient = new OAuth2Client();
      const ticket = await oauthClient.verifyIdToken({
        idToken: googleToken,
        audience:
          "724060049648-nnacpoao7gftdukk1gurp600rfgme79k.apps.googleusercontent.com",
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
        const token = await jwt.sign({ id: user.id }, process.env.SECRET_KEY);
        return {
          ok: true,
          token,
        };
      }
      const data = await client.user.create({
        data: {
          userName: "null",
          email: user_email,
          password: "password",
        },
      });
      console.log(data);

      // await client.user.findUnique({
      //   where:{
      //     email:user_email
      //   }
      // })
      const token = await jwt.sign({ id: data.id }, process.env.SECRET_KEY);
      return {
        ok: true,
        token,
      };
    },
  },
};

export default resolvers;
