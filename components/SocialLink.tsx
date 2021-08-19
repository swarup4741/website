import React from "react";
import Image from "next/image";
import SwarupImg from "@/public/images/self.jpg";
import Button from "@/components/Button";

export default function SocialLink() {
  return (
    <div className="my-8">
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
        <Button href="https://github.com/swarup4741">Github</Button>
        <Button href="https://www.linkedin.com/in/swarup4741/">Linkedin</Button>
      </div>
      <div className="grid mt-10 place-items-center sm:place-items-start">
        <Image
          src={SwarupImg}
          alt="Avatar of Swarup Das"
          height={200}
          width={200}
          className="rounded-full"
          objectFit="cover"
          placeholder="blur"
        />
      </div>
    </div>
  );
}
