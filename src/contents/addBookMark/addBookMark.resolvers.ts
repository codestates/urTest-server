import { Resolvers } from "../../types";
import { protectedResolver } from "../../users/users.utils";

const resolvers: Resolvers = {
  Mutation: {
    addBookMark: protectedResolver(
      async (_, { id }, { loggedInUser, client }) => {
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
        await client.bookMark.create({
          data: {
            userId: loggedInUser.id,
            contentId: content.id,
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
