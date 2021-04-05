import client from "../../client";

export default {
  Query: {
    getContent: (_, { userId }) =>
      client.content.findFirst({
        where: {
          userId,
        },
      }),
  },
};
