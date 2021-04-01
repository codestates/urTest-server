import { Resolvers } from "../../types";
import { protectedResolver } from "../users.utils";

const resolvers: Resolvers = {
  Query: {
    seeProfile: protectedResolver((_, { userName }, { client }) =>
      client.user.findUnique({
        where: {
          userName,
        },
      })
    ),
  },
};

export default resolvers;
