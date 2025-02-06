import { cn } from '@/src/lib/utils';

const RideDistance = ({ value, className }: { value: number; className?: string }) => {
  //Ensure two decimal places
  const stringValue = value.toFixed(2);
  //Get the int and the float
  const [intValue, floatValue] = stringValue.split('.');
  return (
    <p className={cn('text-2xl', className)}>
      {intValue}
      <span className="text-xs align-super">.{floatValue}</span>
    </p>
  );
};

export default RideDistance;
