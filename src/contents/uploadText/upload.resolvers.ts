import { json } from "express";
import { builtinModules } from "node:module";
import client from "../../client";
import { protectedResolver } from "../../users/users.utils";
const resolvers = {
  Mutation: {
    uploadText: protectedResolver((_, { textTest }) => {
      const textData = JSON.parse(textTest);
      if (!textTest) {
        return {
          ok: false,
          error: "there is no gameTitle",
        };
      } else {
        textData.map((obj) => {
          let newArr = [];
          client.question.create({
            data: {
              questionBody: Object.keys(obj)[0],
            },
          });

          client.answer.create({});
        });
      }
    }),
  },
};
module.exports = resolvers;
