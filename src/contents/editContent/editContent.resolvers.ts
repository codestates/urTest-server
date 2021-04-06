import { Resolvers } from "../../types";
import { protectedResolver } from "../../users/users.utils";

const resolvers: Resolvers = {
  Mutation: {
    editContent: protectedResolver(
      async (_, { id, title, desc }, { loggedInUser, client }) => {
        const updateContent = await client.content.update({
          where: {
            id,
          },
          data: {
            // photos: {
            //   update: {
            //     where: {
            //       id,
            //     },
            //     data: {
            //       photoName,
            //     },
            //   },
            // },
            title,
            desc,
          },
        });
        if (updateContent.id) {
          return {
            ok: true,
          };
        }
        return {
          ok: false,
          error: "Could not update content",
        };
      }
    ),
  },
};

export default resolvers;
