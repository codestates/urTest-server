import client from "./client";

export default {
  User: {
    contents: ({ id }) =>
      client.user.findUnique({
        where: { id },
      }),
  },
};
