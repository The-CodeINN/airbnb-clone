"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

const Logo = () => {
  const router = useRouter();

  return (
    <Image
      onClick={() => router.push("/")}
      src='/images/logo.svg'
      alt='Air BnB Logo'
      className='hidden md:block cursor-pointer'
      height='100'
      width='100'
    />
  );
};

export default Logo;
