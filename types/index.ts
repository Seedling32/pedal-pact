import { z } from 'zod';
import { createRideSchema } from '@/src/lib/validators';

export type Ride = z.infer<typeof createRideSchema> & {
  ride_id: string;
  slug: string;
  path: string;
  staticMapUrl: string;
  createdAt: Date;
  updatedAt: Date;
  distance: number;
};
