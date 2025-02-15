import { useSession } from 'next-auth/react';
import Link from 'next/link';
import { Button } from '../../ui/button';
import { UserRound } from 'lucide-react';

const UserButton = () => {
  const { data: session } = useSession();

  if (!session) {
    return (
      <Button asChild variant="ghost">
        <Link href="/sign-in">
          <UserRound /> Sign In
        </Link>
      </Button>
    );
  }

  return <>User</>;
};

export default UserButton;
