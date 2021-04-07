import { json } from "express";
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
        const manyQ = textTest.map((aData) => ({
          questionBody: aData.question,
        }));

        //! question에는 어떻게 데이터 저장할지

        client.content.create({
          data: {
            type: "textGame",
            title,
            desc,
            userId: loggedInUser.id,
            question: {
              create: {
                questionBody: textTest.answer1,
                answer: {
                  create: textTest.answer2,
                },
              },
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

// if (textTest) {

// let arr = [];
// let wow = [];
// for (let index = 0; index < textTest.length; index++) {
//   let each = [];
//   arr.push(textTest[index][0].eachTest);
//   for (let i = 1; i < textTest[index].length; i++) {
//     each.push(textTest[index][i].eachTest);
//   }
//   wow.push(each);
// }

// console.log(arr);
// console.log(wow);
//!
// await textTest.map((data) => {
//   arr.push(data[0].eachTest);
// });
// wow.push(data[1].eachTest);
//!

// const titles = arr.map((ttl) => ({
//   questionBody: ttl,
// }));
