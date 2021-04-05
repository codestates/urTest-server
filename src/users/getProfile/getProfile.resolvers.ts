import { Resolvers } from "../../types";
import { protectedResolver } from "../users.utils";

const resolvers: Resolvers = {
  Query: {
    getProfile: protectedResolver((_, { id }, { client }) =>
      client.user.findUnique({
        where: {
          id,
        },
      })
    ),
  },
};

export default resolvers;
