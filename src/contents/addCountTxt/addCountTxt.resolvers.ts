import { Resolvers } from "../../types";

const resolvers: Resolvers = {
  Mutation: {
    addCountTxt: async (_, { id }, { client }) => {
      if (!id) {
        return {
          ok: false,
          error: "Id not found",
        };
      }

      const rightAnswer = await client.answer.findUnique({
        where: {
          id,
        },
      });
      // console.log(rightAnswer);
      const answer = await client.answer.update({
        where: {
          id,
        },
        data: {
          winCount: rightAnswer.winCount + 1,
        },
      });
      return {
        ok: true,
        countAll: answer.winCount,
      };
    },
  },
};

export default resolvers;
