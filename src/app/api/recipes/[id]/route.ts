import {PrismaClient, Recipe} from '@prisma/client';

const prisma = new PrismaClient();

export const GET = (id: string): Promise<Recipe | null> => {
  return prisma.recipe.findFirst({where:{id}});
};

export const POST = (data: Recipe) => {
  return prisma.recipe.create({data});
};

export const PATCH = (filter: any, data: Recipe) => {
  return prisma.recipe.update({where: filter, data});
};

export const DELETE = (filter: any) => {
  return prisma.recipe.delete({where: filter});
};

