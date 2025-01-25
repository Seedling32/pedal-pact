'use server';
import { PrismaClient } from '@prisma/client';

// Get rides

export async function getLatestRides() {
  const prisma = new PrismaClient();

  const data = await prisma.route.findMany({
    take: 8,
    orderBy: {
      createdAt: 'desc',
    },
  });

  return data;
}

export async function getRideByDescription(id: string) {
  const prisma = new PrismaClient();

  return await prisma.route.findFirst({
    where: { id: id },
  });
}
