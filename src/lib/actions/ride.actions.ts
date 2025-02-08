'use server';

import { prisma } from '@/src/db/prisma';
import { convertToPlainObject } from '../utils';

// Get rides to display on the ride page.
export async function getLatestRides() {
  const data = await prisma.ride.findMany({
    take: 8,
    orderBy: {
      createdAt: 'desc',
    },
  });

  return convertToPlainObject(data);
}

// Get individual ride details based on the slug.
export async function getRideBySlug(slug: string) {
  return await prisma.ride.findFirst({
    where: { slug: slug },
  });
}
