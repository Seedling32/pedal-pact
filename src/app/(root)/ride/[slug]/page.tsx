import { getRideBySlug } from '@/src/lib/actions/ride.actions';
import DynamicMap from '@/src/components/shared/map/DynamicMap';

const RideDetailsPage = async (props: { params: Promise<{ slug: string }> }) => {
  const { slug } = await props.params;

  const ride = await getRideBySlug(slug);

  if (!ride) {
    return <p>Ride not found.</p>;
  }

  // Parse path from string to array of objects if needed
  const parsedPath = typeof ride.path === 'string' ? JSON.parse(ride.path) : ride.path;

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">{ride.shortDescription}</h1>
      <p className="text-lg mb-4">{ride.longDescription}</p>
      <DynamicMap path={parsedPath} zoom={15} />
    </div>
  );
};

export default RideDetailsPage;
