import { Resolvers } from "../../types";
import { protectedResolver } from "../../users/users.utils";

const resolvers: Resolvers = {
  Mutation: {
    editPhotoName: protectedResolver(
      async (_, { id, photoName }, { loggedInUser, client }) => {
        const updatePhotoName = await client.photo.update({
          where: {
            id,
          },
          data: {
            photoName,
          },
        });
        if (updatePhotoName.id) {
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
