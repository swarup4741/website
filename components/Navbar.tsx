import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { navLinks } from "@/lib/constants";
import { useTheme } from "next-themes";
import { Moon, Sun } from "./Icons";

export default function Navbar() {
  const router = useRouter();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    <nav className="sticky top-0 z-20 bg-gray-200 border border-gray-300 backdrop-filter backdrop-blur-xl saturate-200 dark:bg-gray-900 bg-opacity-70 dark:bg-opacity-80 dark:border-gray-800">
      <div className="max-w-3xl px-6 py-4 mx-auto">
        <ul className="flex items-center justify-between">
          {navLinks.map(navLink => (
            <li key={navLink.label}>
              <Link href={navLink.url} passHref>
                <a
                  className={`${
                    router.asPath === navLink.url
                      ? "text-gray-900 font-semibold dark:text-gray-100"
                      : "text-gray-700 dark:text-gray-400"
                  }`}
                >
                  {navLink.label}
                </a>
              </Link>
            </li>
          ))}
          <li>
            <button
              aria-label="Toggle theme"
              className="p-3 bg-gray-900 rounded-full cursor-pointer dark:bg-gray-100"
              onClick={() => {
                setTheme(theme === "light" ? "dark" : "light");
              }}
            >
              {mounted && (theme === "light" ? <Moon /> : <Sun />)}
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
