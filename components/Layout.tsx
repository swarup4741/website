import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="container max-w-3xl mx-auto px-6 py-8">{children}</main>
  );
}
