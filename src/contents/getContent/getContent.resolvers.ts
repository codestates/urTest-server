import { Resolvers } from "../../types";
import { protectedResolver } from "../../users/users.utils";

const resolvers: Resolvers = {
  Query: {
    getContent: async (_, { userId }, { client }) => {
      if (!userId) {
        return await client.content.findMany();
      }
      return await client.content.findFirst({
        where: {
          userId,
        },
      });
    },
  },
};

export default resolvers;
