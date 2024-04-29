import {PrismaClient, Recipe} from '@prisma/client';

const prisma = new PrismaClient();

export const GET = (id: string): Promise<Recipe | null> => {
  return prisma.recipe.findFirst({where:{id}});
};

export const POST = (data: Recipe) => {
  return prisma.recipe.createMany({data});
};

export const PATCH = (filter: any, data: Recipe) => {
  return prisma.recipe.updateMany({where: filter, data});
};

export const DELETE = (filter: any) => {
  return prisma.recipe.deleteMany({where: filter});
};

