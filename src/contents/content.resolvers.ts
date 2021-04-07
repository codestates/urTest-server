import client from "../client";

export default {
  Content: {
    user: ({ userId }) => {
      return client.user.findUnique({
        where: { id: userId },
      });
    },
    photos: ({ id }) => {
      return client.photo.findMany({
        where: { contentId: id },
      });
    },

    question: ({ contentId }) => {
      return client.question.findMany({
        where: { id: contentId },
      });
    },
  },
};
