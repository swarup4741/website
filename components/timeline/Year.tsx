import { ReactNode } from "react";

interface yearProps {
  on: string;
  children: ReactNode;
}

export default function Year({ on, children }: yearProps) {
  return (
    <>
      <h3 className="relative mt-6 text-blue-500 ml-9 thread-mark">{on}</h3>
      <ul className="relative mt-6 space-y-4 ml-9 thread-line">{children}</ul>
    </>
  );
}
