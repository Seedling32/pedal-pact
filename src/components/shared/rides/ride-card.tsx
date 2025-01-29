import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardHeader } from '@/src/components/ui/card';
import { Ride } from '@/types';

const RideCard = ({ ride }: { ride: Ride }) => {
  return (
    <Card className="flex flex-col w-full max-w-sm">
      <CardHeader className="p-0 items-center">
        <Link href={`/ride/${ride.id}`} className="pt-4">
          <Image
            src={ride.staticMapUrl}
            alt={ride.shortDescription}
            height={300}
            width={300}
            priority={true}
          />
        </Link>
      </CardHeader>
      <CardContent className="grow flex flex-col justify-between p-4">
        <Link href={`/ride/${ride.id}`}>
          <h3 className="h3-bold">{ride.shortDescription}</h3>
          <p className="text-m">{ride.longDescription}</p>
        </Link>
        <div>
          <p>Miles</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default RideCard;
