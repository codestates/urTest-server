import { Resolvers } from "../../types";
import { protectedResolver } from "../../users/users.utils";

const resolvers: Resolvers = {
  Mutation: {
    likePhoto: protectedResolver(
      async (_, { id }, { loggedInUser, client }) => {
        const ok = await client.content.findUnique({
          where: {
            id,
          },
        });
      }
    ),
  },
};

export default resolvers;
