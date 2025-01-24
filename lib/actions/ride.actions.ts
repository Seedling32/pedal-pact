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

// Get ride by ID
export async function getRideById(id: string) {
  const prisma = new PrismaClient();

  try {
    const ride = await prisma.route.findUnique({
      where: {
        id: id,
      },
    });

    if (!ride) {
      throw new Error('Ride not found');
    }

    return ride;
  } catch (error) {
    console.error('Error fetching ride:', error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}
