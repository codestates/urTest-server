import { Resolvers } from "../../types";
import { protectedResolver } from "../../users/users.utils";

const resolvers: Resolvers = {
  Query: {
    getContent: async (_, { userId }, { client }) => {
      if (!userId) {
        console.log(userId, "sex");
        return await client.content.findMany();
      }
      console.log(userId, "good");
      await client.content.findFirst({
        where: {
          userId,
        },
      });
    },
  },
};

export default resolvers;
