import { Resolvers } from "../../types";
import { protectedResolver } from "../../users/users.utils";

const resolvers: Resolvers = {
  Query: {
    searchContent: async (_, { keyword }, { client }) => {
      return await client.content.findMany({
        where: {
          title: {
            contains: keyword.toLowerCase(),
          },
        },
      });
    },
  },
};

export default resolvers;
