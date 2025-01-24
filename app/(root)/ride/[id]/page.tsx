import { getRideById } from '@/lib/actions/ride.actions';
import DynamicMap from '@/components/shared/map/DynamicMap';

export default async function RideDetails({ params }: { params: { id: string } }) {
  const ride = await getRideById(params.id);

  if (!ride) {
    return <p>Ride not found.</p>;
  }

  // Parse path from string to array of objects if needed
  const parsedPath = typeof ride.path === 'string' ? JSON.parse(ride.path) : ride.path;

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">{ride.name}</h1>
      <p className="text-lg mb-4">{ride.longDescription}</p>
      <DynamicMap path={parsedPath} />
    </div>
  );
}
