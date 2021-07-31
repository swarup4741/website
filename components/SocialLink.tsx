import React from "react";
import Image from "next/image";
import SwarupImg from "@/public/images/self.jpg";
import { SocialLinks } from "@/lib/constants";

export default function SocialLink() {
  return (
    <div className="flex items-center gap-8 sm:gap-10">
      <Image
        src={SwarupImg}
        alt="Avatar of Swarup Das"
        height={200}
        width={200}
        className="rounded-full"
        objectFit="cover"
        placeholder="blur"
      />
      <div className="space-y-4 sm:space-x-8">
        {SocialLinks.map(sl => (
          <a
            key={sl.label}
            href={sl.url}
            target="_blank"
            rel="noreferrer noopener"
            className="block sm:inline-block h-12 w-12 rounded-full bg-gray-900 dark:bg-gray-100"
          >
            <div className="flex items-center justify-center h-full">
              {sl.component}
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
