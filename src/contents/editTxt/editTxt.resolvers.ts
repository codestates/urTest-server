import { json } from "express";
import {
  extendResolversFromInterfaces,
  fieldToFieldConfig,
} from "graphql-tools";
import client from "../../client";
import { protectedResolver } from "../../users/users.utils";
import editContentTypeDefs from "../editContent/editContent.typeDefs";
const resolvers = {
  Mutation: {
    editTxt: protectedResolver(
      async (_, { id, question, answer1, answer2 }, { loggedInUser }) => {
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

        return {
          ok: true,
        };
      }
    ),

    editTxtAll: protectedResolver(async (_, { allEdit }, { loggedInUser }) => {
      // console.log(allEdit);
      allEdit.map(async (editData, idx) => {
        const answers = await client.answer.findMany({
          where: { questionId: editData.id },
          orderBy: { id: "asc" },
        });

        const newArr = [];

        if (editData.answer1 && editData.answer2) {
          newArr.push(editData.answer1);
          newArr.push(editData.answer2);
        } else if (editData.answer1 && !editData.answer2) {
          newArr.push(editData.answer1);
          newArr.push(answers[1].body);
        } else if (!editData.answer1 && editData.answer2) {
          newArr.push(answers[0].body);
          newArr.push(editData.answer2);
        }

        answers.map(async (one, idx) => {
          await client.answer.update({
            where: { id: one.id },
            data: { body: newArr[idx] },
          });
        });
        if (editData.question) {
          await client.question.update({
            where: { id: editData.id },
            data: { questionBody: editData.question },
          });
        }
      });

      return {
        ok: true,
      };
    }),
  },
};
export default resolvers;
