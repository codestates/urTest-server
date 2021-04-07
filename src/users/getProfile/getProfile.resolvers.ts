import { Resolvers } from "../../types";
import { protectedResolver } from "../users.utils";

const resolvers: Resolvers = {
  Query: {
    getProfile: protectedResolver(async (_, { id, type }, { client }) => {
      try {
        if (!id && !type) {
          return await client.content.findMany();
        }
        if (id && !type) {
          return await client.user.findUnique({
            where: {
              id,
            },
          });
        }
        if (!id && type) {
          return await client.content.findMany({
            where: {
              type,
            },
          });
        }
      } catch (error) {
        return error;
      }
    }),
  },
};

export default resolvers;
