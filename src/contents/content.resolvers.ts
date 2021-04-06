import client from "../client";

export default {
  Content: {
    user: ({ userId }) => {
      return client.user.findUnique({
        where: { id: userId },
      });
    },
    photos: ({ userId }, data) => {
      console.log(userId, "Fuck", data);
    },
  },
  // Photo:{
  //   photoName:({})
  // }
};
