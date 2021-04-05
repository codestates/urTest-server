import { Resolvers } from "../../types";
import { protectedResolver } from "../users.utils";

const resolvers: Resolvers = {
  Query: {
    getProfile: protectedResolver((_, { userName }, { client }) =>
      client.user.findUnique({
        where: {
          userName,
        },
      })
    ),
  },
};

export default resolvers;
