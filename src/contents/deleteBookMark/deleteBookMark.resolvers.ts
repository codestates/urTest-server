import { Resolvers } from "../../types";
import { protectedResolver } from "../../users/users.utils";

const resolvers: Resolvers = {
  Mutation: {
    deleteBookMark: protectedResolver(
      async (_, { id }, { loggedInUser, client }) => {
        if (!id) {
          return {
            ok: false,
            error: "Id not found",
          };
        }
        const bookMark = await client.bookMark.findUnique({
          where: {
            id,
          },
        });
        if (bookMark.userId !== loggedInUser.id) {
          return {
            ok: false,
            error: "Not authorized",
          };
        }
        await client.bookMark.delete({
          where: {
            id,
          },
        });
        return {
          ok: true,
        };
      }
    ),
  },
};

export default resolvers;
