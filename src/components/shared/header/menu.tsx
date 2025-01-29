import Link from 'next/link';
import ModeToggle from './mode-toggle';
import { Button } from '@/src/components/ui/button';
import { EllipsisVertical, UserRound, UserRoundPlus } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from '@/src/components/ui/sheet';

const Menu = () => {
  return (
    <div className="flex justify-end gap-3">
      <nav className="hidden md:flex items-center w-full max-w-s gap-2 text-white">
        <Link href="/ride" className="hover:border-b">
          Rides
        </Link>
        <Link href="/about-us" className="hover:border-b">
          About Us
        </Link>
        <Link href="/contact" className="hover:border-b">
          Contact
        </Link>
        <Button asChild variant="ghost" className="ml-2">
          <Link href="/sign-in">
            <UserRound /> Sign In
          </Link>
        </Button>
        <Button asChild>
          <Link href="/register">
            <UserRoundPlus /> Register
          </Link>
        </Button>
        <ModeToggle />
      </nav>
      <nav className="md:hidden">
        <Sheet>
          <SheetTrigger className="align-middle">
            <EllipsisVertical className="text-yellow-500" />
          </SheetTrigger>
          <SheetContent className="flex flex-col items-start">
            <SheetTitle>Menu</SheetTitle>
            <Link href="/ride" className="hover:underline">
              Rides
            </Link>
            <Link href="/about-us" className="hover:underline">
              About Us
            </Link>
            <Link href="/contact" className="hover:underline">
              Contact
            </Link>
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
            <ModeToggle />
            <SheetDescription></SheetDescription>
          </SheetContent>
        </Sheet>
      </nav>
    </div>
  );
};

export default Menu;
