import client from "../client";

export default {
  User: {
    contents: ({ id }) => {
      return client.content.findMany({
        where: { userId: id },
      });
    },
    contentType: ([{ type }]) => {
      return client.content.findMany({
        where: {
          type,
        },
      });
    },
  },
};
