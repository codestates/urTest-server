import { Resolvers } from "../../types";

const resolvers: Resolvers = {
  Query: {
    getProfile: async (_, { id }, { client }) => {
      try {
        if (!id) {
          throw new Error("error");
        }
        // if (!id) {
        //   return await client.content.findMany();
        // }
        return await client.user.findUnique({
          where: {
            id,
          },
        });
      } catch (error) {
        return error;
      }
    },
  },
};

export default resolvers;
