import RideCard from './ride-card';
import { Ride } from '@/types';

const RideList = ({ data, title, limit }: { data: Ride[]; title?: string; limit?: number }) => {
  const limitedData = limit ? data.slice(0, limit) : data;

  return (
    <div className="m-10">
      <h2 className="h2-bold mb-4">{title}</h2>
      {data.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {limitedData.map((ride: Ride) => (
            <RideCard key={ride.name} ride={ride} />
          ))}
        </div>
      ) : (
        <div>
          <p>No rides found.</p>
        </div>
      )}
    </div>
  );
};

export default RideList;
