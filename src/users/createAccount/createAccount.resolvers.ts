import client from "../../client";
import bycrpt from "bcrypt";

export default {
  Mutation: {
    createAccount: async (
      _,
      { firstName, lastName, userName, email, password }
    ) => {
      // todo: check if username or email are already on DB.
      // todo: hass password
      // todo: save and return the user
      try {
        const existingUser = await client.user.findFirst({
          where: {
            OR: [
              {
                userName,
              },
              {
                email,
              },
            ],
          },
        });
        if (existingUser) {
          throw new Error("This username/password is already taken.");
        }
        const uglyPassword = await bycrpt.hash(password, 10);
        return client.user.create({
          data: {
            userName,
            email,
            firstName,
            lastName,
            password: uglyPassword,
          },
        });
      } catch (error) {
        return error;
      }
    },
  },
};
