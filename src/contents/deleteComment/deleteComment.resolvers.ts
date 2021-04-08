import { Resolvers } from "../../types";
import { protectedResolver } from "../../users/users.utils";

const resolvers: Resolvers = {
  Mutation: {
    deleteComment: async (_, { id }, { loggedInUser, client }) => {
      if (!id) {
        return {
          ok: false,
          error: "Id not found",
        };
      }
      await client.comment.delete({
        where: {
          id,
        },
      });
      return {
        ok: true,
      };
    },
  },
};

export default resolvers;
