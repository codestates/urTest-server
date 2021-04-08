import { Resolvers } from "../../types";

const resolvers: Resolvers = {
  Mutation: {
    addComment: async (_, { id, password, desc }, { client }) => {
      if (!desc || !password) {
        return {
          ok: false,
          error: "Password or desc not found",
        };
      }
      const content = await client.content.findUnique({
        where: {
          id,
        },
      });
      await client.comment.create({
        data: {
          contentId: content.id,
          password,
          desc,
        },
      });
      return {
        ok: true,
      };
    },
  },
};

export default resolvers;
