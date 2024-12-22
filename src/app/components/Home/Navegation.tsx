"use client";
import Link from "next/link";
import { useState } from "react";

export default function Navigation() {
  const [active, setActive] = useState("home");

  return (
    <header className="flex fixed top-0 flex-no-wrap z-50 w-full bg-white text-sm dark:bg-dark0 h-16">
      <nav className="w-full mx-auto flex items-center justify-between h-full" aria-label="Global">
        <div className="flex flex-row items-center justify-start h-full flex-shrink-0 w-full">
          {["home", "about", "work", "contact"].map((item) => (
            <div
              key={item}
              className={`h-full flex items-center justify-center border-b-[3px] border-t-2 box-border w-28 md:w-64 ${active === item
                ? "border-t-dark2 border-x-dark1 border-x-2 bg-bgdark0 border-b-transparent"
                : "border-t-transparent border-b-dark1"
                }`}
            >
              <Link
                className={`text-[16px] lg:text-base xl:text-xl text-center py-4 text-gray-600 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500 ${active === item ? "font-bold text-gray-800 dark:text-gray-200" : ""
                  }`}
                href={`/${item === "home" ? "" : item}`}
                aria-current={active === item ? "page" : undefined}
                onClick={() => setActive(item)}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </Link>
            </div>
          ))}
        </div>
      </nav>
      <div className="flex items-center justify-center h-full w-full border-b-[3px] border-b-dark1">
      </div>
    </header>
  );
}

