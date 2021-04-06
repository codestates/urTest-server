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
        // if (textTest) {
        console.log(textTest[1][0].eachTest);
        await client.content.create({
          data: {
            title,
            desc,
            userId: loggedInUser.id,
            question: {
              create: {
                questionBody: textTest[1][0].eachTest,
                answer: {
                  create: {
                    body: textTest[0][0].eachTest,
                  },
                },
              },
            },
          },
        });

        // await client.question.create({
        //   data: {
        //     questionBody: textTest,
        //   },
        // });

        return {
          ok: true,
        };
        // textData.map((obj) => {
        //   for (var key in obj) {
        //     client.content.create({
        //       data: {
        //         title,
        //         desc,
        //       },
        //     });

        //     client.question.create({
        //       data: {
        //         questionBody: key,
        //         contentId: loggedInUser.id,
        //       },
        //     });
        //     let jsonAnswer = JSON.stringify(obj[key]);
        //     client.answer.create({
        //       data: {
        //         body: jsonAnswer,
        //         questionId: loggedInUser.id,
        //       },
        //     });
        //   }
        // });
        // }
      }
    ),
  },
};
export default resolvers;
