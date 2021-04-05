import client from "../client";

export default {
  Content: {
    user: ({ userId }) => {
      return client.user.findUnique({
        where: { id: userId },
      });
    },
    photos: ({ contentId }) => {
      return client.photo.findMany({
        where: { id: contentId },
      });
    },
  },
};
