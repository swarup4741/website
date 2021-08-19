import { ReactChild } from "react";

interface Props {
  href: string;
  children: ReactChild;
}

export default function Button({ href, children }: Props) {
  return (
    <a
      href={href}
      className="inline-block px-10 py-2 font-medium text-center text-white bg-black rounded-md dark:bg-white dark:text-black"
    >
      {children}
    </a>
  );
}
