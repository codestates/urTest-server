import { Resolvers } from "../../types";

const resolvers: Resolvers = {
  Mutation: {
    deleteAccount: async (_, { id }, { client }) => {
      if (!id) {
        return {
          ok: false,
          error: "Id not found",
        };
      }
      const content = await client.content.findMany({
        where: {
          userId: id,
        },
      });
      const question = await Promise.all(
        content.map(async (item) => {
          return await client.question.findMany({
            where: {
              contentId: item.id,
            },
          });
        })
      );

      await client.bookMark.deleteMany({
        where: {
          userId: id,
        },
      });
      content.map(async (item) => {
        await client.photo.deleteMany({
          where: {
            contentId: item.id,
          },
        });
      });
      content.map(async (item) => {
        await client.comment.deleteMany({
          where: {
            contentId: item.id,
          },
        });
      });
      question.map(async (item) => {
        item.map(async (list) => {
          await client.answer.deleteMany({
            where: {
              questionId: list.id,
            },
          });
        });
      });
      content.map(async (item) => {
        await client.question.deleteMany({
          where: {
            contentId: item.id,
          },
        });
      });

      await client.content.deleteMany({
        where: {
          userId: id,
        },
      });
      await client.user.delete({
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
