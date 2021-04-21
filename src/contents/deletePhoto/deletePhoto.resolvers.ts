import { Resolvers } from "../../types";
import { protectedResolver } from "../../users/users.utils";

const resolvers: Resolvers = {
  Mutation: {
    deletePhoto: protectedResolver(
      async (_, { id }, { loggedInUser, client }) => {
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
          select: {
            contentId: true,
          },
        });
        const content = await client.content.findUnique({
          where: {
            id: photo.contentId,
          },
        });
        if (!photo) {
          return {
            ok: false,
            error: "Photo not found.",
          };
        } else if (content.userId !== loggedInUser.id) {
          return {
            ok: false,
            error: "Not authorized",
          };
        } else {
          await client.photo.delete({
            where: {
              id,
            },
          });
          return {
            ok: true,
          };
        }
      }
    ),
    deletePhotoAll: protectedResolver(
      async (_, { contentId }, { loggedInUser, client }) => {
        const photo = await client.photo.findMany({
          where: {
            contentId,
          },
        });
        const content = await client.content.findUnique({
          where: {
            id: photo[0].contentId,
          },
        });
        if (!photo) {
          return {
            ok: false,
            error: "Photo not found.",
          };
        } else if (
          content.userId !== loggedInUser.id &&
          loggedInUser.grade !== "admin"
        ) {
          return {
            ok: false,
            error: "Not authorized",
          };
        } else {
          await client.photo.deleteMany({
            where: {
              contentId,
            },
          });
          await client.content.delete({
            where: {
              id: photo[0].contentId,
            },
          });
          return {
            ok: true,
          };
        }
      }
    ),
  },
};

export default resolvers;
