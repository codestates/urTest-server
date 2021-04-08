import { Resolvers } from "../../types";

const resolvers: Resolvers = {
  Mutation: {
    addCount: async (_, { id }, { client }) => {
      if (!id) {
        return {
          ok: false,
          error: "Id not found",
        };
      }
      const photo = await client.photo.findUnique({
        where: {
          id,
        },
      });
      if (!photo) {
        return {
          ok: false,
          error: "Photo not found",
        };
      }
      await client.photo.update({
        where: {
          id,
        },
        data: {
          winCount: photo.winCount + 1,
        },
      });
      return {
        ok: true,
      };
    },
  },
};

export default resolvers;
