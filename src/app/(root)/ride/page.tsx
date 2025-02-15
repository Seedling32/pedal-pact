import RideList from '@/src/components/shared/rides/ride-list';
import { getLatestRides } from '@/src/lib/actions/ride.actions';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Rides',
};

const RidesPage = async () => {
  const latestRides = await getLatestRides();

  return (
    <>
      <RideList data={latestRides} title="Explore our rides" />
    </>
  );
};

export default RidesPage;
