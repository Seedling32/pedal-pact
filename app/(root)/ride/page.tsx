import RideList from '@/components/shared/rides/ride-list';
import { getLatestRides } from '@/lib/actions/ride.actions';

const RidesPage = async () => {
  const latestRides = await getLatestRides();

  return (
    <>
      <RideList data={latestRides} title="Explore our rides" />
    </>
  );
};

export default RidesPage;
