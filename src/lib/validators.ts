import { z } from 'zod';

// Schema for creating rides
export const createRideSchema = z.object({
  shortDescription: z.string().min(3, 'Short description must be at least 3 characters.'),
  longDescription: z.string().min(3, 'Long description must be at least 3 characters.'),
  date: z.coerce.date(),
});
