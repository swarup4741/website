import React, { useState } from "react";
import Image from "next/image";
import bg from "@/public/images/bg.png";

export default function Project() {
  const [clicked, setClicked] = useState(false);
  return (
    <div
      onClick={() => setClicked(!clicked)}
      className="relative w-full h-48 max-w-sm overflow-y-hidden border-2 border-gray-200 rounded-md dark:border-gray-700"
    >
      <header
        className={`px-2 py-1 border-b-2 border-gray-200 dark:border-gray-700 ${
          clicked ? "animate-reveal" : ""
        }`}
      >
        <div className="w-3 h-3 bg-gray-300 rounded-full toolbar dark:bg-gray-700"></div>
      </header>
      <Image
        src={bg}
        alt="Project thumbnail"
        placeholder="blur"
        height={216}
        width={384}
        objectFit="cover"
        objectPosition="center"
      />
    </div>
  );
}
