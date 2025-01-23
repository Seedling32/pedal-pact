import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const { name, path, shortDescription, longDescription } = req.body;
      // Generate static map URL
      const pathString = path
        .map((point: { lat: number; lng: number }) => `${point.lat},${point.lng}`)
        .join('|');
      const staticMapUrl = `https://maps.googleapis.com/maps/api/staticmap?size=400x300&path=color:0x00ff00ff|weight:5|${pathString}&key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}`;

      const newRoute = await prisma.route.create({
        data: {
          name,
          path: JSON.stringify(path),
          shortDescription,
          longDescription,
          staticMapUrl,
        },
      });
      res.status(200).json(newRoute);
    } catch (error) {
      res.status(500).json({ error: 'Error saving route' });
      console.log(error);
    }
  }
}
