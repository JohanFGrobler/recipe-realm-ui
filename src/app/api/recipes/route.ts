import {PrismaClient, Recipe} from '@prisma/client';

const prisma = new PrismaClient();

export const GET = (query: any): Promise<Recipe[]> => {
  return prisma.recipe.findMany(query);
};

export const POST = (data: Recipe) => {
  return prisma.recipe.createMany({data});
};

export const PATCH = (filer: any, data: Recipe) => {
  return prisma.recipe.updateMany({where: filer, data});
};

export const DELETE = (filer: any) => {
  return prisma.recipe.deleteMany({where: filer});
};

