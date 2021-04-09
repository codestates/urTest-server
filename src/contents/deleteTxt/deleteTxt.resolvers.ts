import { Resolvers } from "../../types";
import { protectedResolver } from "../../users/users.utils";

const resolvers: Resolvers = {
  Mutation: {
    deleteQuestion: protectedResolver(
      async (_, { id }, { loggedInUser, client }) => {
        //! 클라이언트가 아이디없이 요청보낼때
        if (!id) {
          return {
            ok: false,
            error: "Id not found",
          };
        }

        const questions = await client.question.findUnique({
          where: {
            id,
          },
        });
        //! 퀘스천이 들어있어있는 컨텐트를 찾음
        const content = await client.content.findUnique({
          where: {
            id: questions.contentId,
          },
        });

        if (content.userId !== loggedInUser.id) {
          return {
            ok: false,
            error: "Not authorized",
          };
        }

        await client.answer.deleteMany({
          where: { questionId: questions.id },
        });

        await client.question.delete({
          where: { id },
        });

        return {
          ok: true,
        };
      }
    ),
  },
};

export default resolvers;
