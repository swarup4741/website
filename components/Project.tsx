import React, { useContext } from "react";
import Image from "next/image";
import bg from "@/public/images/bg.png";
import { context } from "pages/_app";

export default function Project() {
  const states: { state?: string; setState?: React.SetStateAction<any> } =
    useContext(context);
  return (
    <div id="projects" className="mt-4 grid sm:grid-cols-2 gap-6">
      {[1, 2, 3, 4, 5, 6].map((item, idx) => (
        <div
          onClick={() => states.setState("hello" + item)}
          key={idx}
          className="w-full h-48 border-2 border-gray-200 dark:border-gray-700 rounded-md overflow-y-hidden relative"
        >
          <header className="py-1 px-2 border-b-2 border-gray-200 dark:border-gray-700">
            <div className="toolbar w-3 h-3 bg-gray-300 dark:bg-gray-700 rounded-full"></div>
          </header>
          <Image
            src={bg}
            placeholder="blur"
            height={225}
            width={384}
            objectFit="cover"
            objectPosition="center"
          />
        </div>
      ))}
    </div>
  );
}
