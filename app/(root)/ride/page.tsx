import RideList from '@/components/shared/rides/ride-list';
import sampleData from '@/db/sample-data';

const RidesPage = () => {
  return (
    <>
      <RideList data={sampleData.rides} title="Explore our rides" limit={8} />
    </>
  );
};

export default RidesPage;
