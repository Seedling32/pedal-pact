import { APP_NAME } from '@/lib/constants';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-slate-800 border-t">
      <div className="p-5 flex-center text-white">
        {currentYear} {APP_NAME}. All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
