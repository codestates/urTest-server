import client from "../../client";

export default {
  Query: {
    seeContent: (_, { id }) =>
      client.content.findUnique({
        where: {
          id,
        },
      }),
  },
};
