import { json } from "express";
import { fieldToFieldConfig } from "graphql-tools";
import client from "../../client";
import { protectedResolver } from "../../users/users.utils";
import editContentTypeDefs from "../editContent/editContent.typeDefs";
const resolvers = {
  Mutation: {
    editTxt: protectedResolver(
      async (_, { id, question, answer1, answer2 }, { loggedInUser }) => {
        // const manyQ2 = modify.map((aData) => {
        //   const eachTest = [{ body: aData.answer1 }, { body: aData.answer2 }];
        //   console.log(eachTest);

        //   return {
        //     questionBody: aData.question,
        //     answer: {
        //       create: eachTest,
        //     },
        //   };
        // });

        //!
        // const wow = modify.map((data) => {
        //   console.log(data.question);
        //   client.question.update({
        //     where: { id: data.id },
        //     data: {
        //       questionBody: data.question,
        //       // answer: {
        //       //   create: { body: data },
        //       // },
        //     },
        //   });
        // });
        //!
        let answer = [];
        answer.push(answer1, answer2);
        const questions = await client.question.findUnique({
          where: { id },
        });

        await client.question.update({
          where: { id },
          data: {
            questionBody: question,
          },
        });

        const answers = await client.answer.findMany({
          where: {
            questionId: questions.id,
          },
        });
        answers.map(async (item, idx) => {
          await client.answer.update({
            where: { id: item.id },
            data: {
              body: answer[idx],
            },
          });
        });

        // const wow = await modify.map(async (data) => {
        //   await client.question.update({
        //     where: { id: data.id },
        //     data: {
        //       questionBody: data.question,

        //     },
        //   });
        // });

        // console.log(wow);
        return {
          ok: true,
        };
      }
    ),
  },
};
export default resolvers;
