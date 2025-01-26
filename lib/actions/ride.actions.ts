'use server';
import { prisma } from '@/db/prisma';

// Get rides

export async function getLatestRides() {
  const data = await prisma.route.findMany({
    take: 8,
    orderBy: {
      createdAt: 'desc',
    },
  });

  return data;
}

export async function getRideById(id: string) {
  return await prisma.route.findFirst({
    where: { id: id },
  });
}
