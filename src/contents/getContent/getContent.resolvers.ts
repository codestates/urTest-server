import { Resolvers } from "../../types";
import { protectedResolver } from "../../users/users.utils";

const resolvers: Resolvers = {
  Query: {
    getContent: async (_, { id }, { client }) => {
      return await client.content.findUnique({
        where: {
          id,
        },
      });
    },
    getContentAll: async (_, { userId, type }, { client }) => {
      if (userId && !type) {
        return await client.content.findMany({
          where: {
            userId,
          },
        });
      }
      if (!userId && type) {
        return await client.content.findMany({
          where: {
            type,
          },
        });
      }
      return await client.content.findMany();
    },
  },
};

export default resolvers;
