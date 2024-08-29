import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const userResolver = {
  Query: {
    users: async () => await prisma.user.findMany(),
    user: async (_: any, { id }: { id: number }) => await prisma.user.findUnique({ where: { id } }),
  },
  Mutation: {
    addToCart: async (_: any, { userId, bookId }: { userId: number; bookId: string }) => {
      return await prisma.cartItem.create({
        data: { userId, bookId },
      });
    },
    addToFavorites: async (_: any, { userId, bookId }: { userId: number; bookId: string }) => {
      return await prisma.favoriteItem.create({
        data: { userId, bookId },
      });
    },
    removeFromCart: async (_: any, { userId, bookId }: { userId: number; bookId: string }) => {
      return await prisma.cartItem.deleteMany({
        where: { userId, bookId },
      });
    },
    removeFromFavorites: async (_: any, { userId, bookId }: { userId: number; bookId: string }) => {
      return await prisma.favoriteItem.deleteMany({
        where: { userId, bookId },
      });
    },
  },
};
