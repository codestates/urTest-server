import { Resolvers } from "../../types";

const resolvers: Resolvers = {
  Query: {
    searchContent: async (_, { keyword, type }, { client }) => {
      if (type === "textgame") {
        return await client.content.findMany({
          where: {
            type: "textgame",
            title: {
              contains: keyword.toLowerCase(),
            },
          },
        });
      } else if (type === "imggame") {
        return await client.content.findMany({
          where: {
            type: "imggame",
            title: {
              contains: keyword.toLowerCase(),
            },
          },
        });
      }
      return await client.content.findMany({
        where: {
          title: {
            contains: keyword.toLowerCase(),
          },
        },
      });
    },
  },
};

export default resolvers;
