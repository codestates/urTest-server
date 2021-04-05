import client from "../../client";
import { Resolvers } from "../../types";
import { protectedResolver } from "../../users/users.utils";

const resolvers: Resolvers = {
  Query: {
    getContent: protectedResolver((_, { userId }) =>
      client.content.findFirst({
        where: {
          userId,
        },
      })
    ),
  },
};

export default resolvers;
