"use client";
import { useState } from "react";

export default function Navigation() {
  const [active, setActive] = useState("about");

  return (
    <header className="flex fixed top-0 flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full bg-white text-sm dark:bg-dark0">
      <nav className="max-w-[85rem] w-full mx-auto flex items-center justify-between" aria-label="Global">
        <div className="w-full border-b-[3px] border-b-dark1 pl-4">
          <a href="#">
            <svg
              className="my-4 sm:w-8 sm:h-8 h-4 w-4 text-gray-600 dark:text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
          </a>
        </div>
        <div className="flex flex-row items-center justify-end mt-0 h-full">
          {["about", "work", "contact"].map((item) => (
            <div
              key={item}
              className={`h-full w-full flex items-center justify-center border-b-[3px] border-t-2 hover: border-x-transparent box-border px-5 ${
                active === item ? "border-t-dark2 border-x-dark1 border-x-2 bg-bgdark0 border-b-transparent" : "border-t-transparent border-b-dark1"
              }`}
            >
              <a
                className={`text-[16px] lg:text-base xl:text-xl w-full text-gray-600 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500 ${
                  active === item ? "font-bold text-gray-800 dark:text-gray-200" : ""
                }`}
                href={`#${item}`}
                aria-current={active === item ? "page" : undefined}
                onClick={() => setActive(item)}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            </div>
          ))}
        </div>
      </nav>
    </header>
  );
}