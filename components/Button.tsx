import { ReactChild } from "react";

interface Props {
  href: string;
  children: ReactChild;
}

export default function Button({ href, children }: Props) {
  return (
    <a
      href={href}
      className="inline-block px-10 py-2 font-medium text-center transition-all border border-black rounded-md dark:border-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black"
    >
      {children}
    </a>
  );
}
