import { Resolvers } from "../../types";

const resolvers: Resolvers = {
  Mutation: {
    addViews: async (_, { id }, { client }) => {
      if (!id) {
        return {
          ok: false,
          error: "Id not found",
        };
      }

      const content = await client.content.findUnique({
        where: {
          id,
        },
      });
      await client.content.update({
        where: {
          id,
        },
        data: {
          views: content.views + 1,
        },
      });
      return {
        ok: true,
      };
    },
  },
};

export default resolvers;
