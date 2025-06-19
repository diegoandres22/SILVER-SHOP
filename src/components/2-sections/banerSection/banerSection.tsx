import React from 'react'
import Image from "next/image";
import data from "@/../public/PicsOfTheMainBanner/hersheys.jpg";

export const BanersSection = () => {

  return (
    <div className="  w-screen h-60 flex justify-center items-center overflow-hidden">
      <Image
        src={data}
        width={1920}
        height={1080}
        alt="Banner season"
        className="object-cover object-center w-screen h-full"
      />
    </div>
  );
};

