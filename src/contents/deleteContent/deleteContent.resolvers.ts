import { Resolvers } from "../../types";
import { protectedResolver } from "../../users/users.utils";

const resolvers: Resolvers = {
  Mutation: {
    deleteContent: protectedResolver(
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
        if (content.userId !== loggedInUser.id) {
          return {
            ok: false,
            error: "Not authorized",
          };
        }
        const question = await client.question.findMany({
          where: {
            contentId: content.id,
          },
        });

        await client.bookMark.deleteMany({
          where: {
            contentId: id,
          },
        });
        await client.photo.deleteMany({
          where: {
            contentId: content.id,
          },
        });
        await client.comment.deleteMany({
          where: {
            contentId: content.id,
          },
        });
        question.map(async (item) => {
          await client.answer.deleteMany({
            where: {
              questionId: item.id,
            },
          });
        });
        await client.question.deleteMany({
          where: {
            contentId: content.id,
          },
        });

        await client.content.delete({
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
