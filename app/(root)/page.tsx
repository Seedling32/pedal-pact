import Image from 'next/image';

const HomePage = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center bg-hero-small min-h-96 text-white text-center sm:bg-hero-large">
        <h1 className="h1-bold">Let&apos;s ride bikes!</h1>
        <h2 className="text-2xl">Find local routes and get out there.</h2>
      </div>
      <div className="flex p-8">
        <Image
          src="/images/portrait-home.png"
          width={400}
          height={600}
          alt="Sunrise bike ride with friends."
        />
      </div>
    </div>
  );
};

export default HomePage;
