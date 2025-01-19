import { Button } from '@/components/ui/button';
import { UserRound, UserRoundPlus } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { APP_NAME } from '@/lib/constants';
import ModeToggle from './mode-toggle';

const Header = () => {
  return (
    <header className="bg-slate-800 w-full border-b">
      <div className="wrapper flex-between">
        <div className="flex-start">
          <Link href="/" className="flex-start">
            <Image
              src="/images/logo.svg"
              alt={`${APP_NAME} logo.`}
              height={48}
              width={48}
              priority={true}
              className="rounded-lg"
            />
            <span className="hidden lg:block font-bold text-2xl ml-3 text-white">{APP_NAME}</span>
          </Link>
        </div>
        <div className="flex space-x-2">
          <div className="flex items-center space-x-3 mr-2 text-white">
            <ModeToggle />
            <Link href="/rides">Rides</Link>
            <Link href="/about-us">About Us</Link>
            <Link href="/contact">Contact</Link>
          </div>
          <Button asChild variant="ghost">
            <Link href="/sign-in">
              <UserRound /> Sign In
            </Link>
          </Button>
          <Button asChild>
            <Link href="/register">
              <UserRoundPlus /> Register
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
