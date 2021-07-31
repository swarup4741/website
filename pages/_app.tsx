import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";
import "../styles/globals.css";
import Navbar from "@/components/Navbar";
import React, { createContext, useState } from "react";

export const context = createContext({});

function MyApp({ Component, pageProps }: AppProps) {
  const [state, setState] = useState();
  return (
    <ThemeProvider attribute="class" defaultTheme="system">
      <context.Provider value={{ state, setState }}>
        <Navbar />
        <Component {...pageProps} />
      </context.Provider>
    </ThemeProvider>
  );
}
export default MyApp;
