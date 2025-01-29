import { z } from 'zod';
import { createRideSchema } from '@/src/lib/validators';

export type Ride = z.infer<typeof createRideSchema> & {
  id: string;
  name: string;
  path: string;
  staticMapUrl: string;
  createdAt: Date;
  updatedAt: Date;
};
