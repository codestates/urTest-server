import { json } from "express";
import { fieldToFieldConfig } from "graphql-tools";
import client from "../../client";
import { protectedResolver } from "../../users/users.utils";
const resolvers = {
  Mutation: {
    uploadText: protectedResolver(
      async (_, { textTest, title, desc }, { loggedInUser }) => {
        if (!textTest) {
          return {
            ok: false,
            error: "there is no gameTitle",
          };
        }
        //! 문제
        // const manyA1 = textTest.map((aData) => ({
        //   body: aData.answer1,
        // }));
        // const manyA2 = textTest.map((aData) => ({
        //   body: aData.answer2,
        // }));

        const manyQ2 = textTest.map((aData) => {
          const eachTest = [{ body: aData.answer1 }, { body: aData.answer2 }];

          return {
            questionBody: aData.question,
            answer: {
              create: eachTest,
            },
          };
        });

        //! question에는 어떻게 데이터 저장할지

        await client.content.create({
          data: {
            type: "textgame",
            title,
            desc,
            userId: loggedInUser.id,
            question: {
              create: manyQ2,
            },
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
