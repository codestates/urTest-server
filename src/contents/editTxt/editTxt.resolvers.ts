import { json } from "express";
import { fieldToFieldConfig } from "graphql-tools";
import client from "../../client";
import { protectedResolver } from "../../users/users.utils";
import editContentTypeDefs from "../editContent/editContent.typeDefs";
const resolvers = {
  Mutation: {
    editTxt: protectedResolver(async (_, { modify }, { loggedInUser }) => {
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

      return {
        ok: true,
      };
    }),
  },
};
export default resolvers;
