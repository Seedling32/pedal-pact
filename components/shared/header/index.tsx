import Image from 'next/image';
import Link from 'next/link';
import { APP_NAME } from '@/lib/constants';
import Menu from './menu';

const Header = () => {
  return (
    <header className="bg-slate-800 w-full">
      <div className="wrapper flex-between py-5">
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
        <Menu />
      </div>
    </header>
  );
};

export default Header;
