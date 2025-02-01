import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    try {
      const routes = await prisma.ride.findMany();
      res.status(200).json(routes);
    } catch (error) {
      console.error('Error fetching routes:', error);
      res.status(500).json({ error: 'Error fetching routes' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
