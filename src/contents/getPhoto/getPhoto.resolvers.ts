import client from "../../client";

export default {
  Query: {
    getPhoto: (_, { contentId }) =>
      client.photo.findMany({
        where: {
          contentId,
        },
      }),
  },
};
