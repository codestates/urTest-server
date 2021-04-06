import client from "../client";

export default {
  Content: {
    user: ({ userId }) => {
      return client.user.findUnique({
        where: { id: userId },
      });
    },
    photos: ({ userId }, data) => {
      console.log(userId, data);
    },

    question: ({ contentId }) => {
      console.log(contentId);
      return client.question.findMany({
        where: { id: contentId },
      });
    },
  },
};
