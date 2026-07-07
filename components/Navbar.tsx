
"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Top Stories", path: "/top-stories" },
    { name: "News Update", path: "/news-update" },
    // { name: "Articles", path: "/article" },
    // { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">

      <div className="flex items-center justify-between px-4 sm:px-6 lg:px-8 w-full py-4">

       
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/images/logo-small.png"
            alt="Back Strap Law"
            width={40}
            height={40}
          />
          <div className="leading-tight">
            <h1 className="font-semibold text-black">
              <span className="text-[#a5880f] font-bold">B</span>ackstrap{" "}
              <span className="text-[#a5880f] font-bold">L</span>aw
            </h1>
            <p className="text-xs text-[#a5880f]/80">
              Where Law Meets Clarity
            </p>
          </div>
        </Link>

        
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          {navItems.map((item) => {
            const isActive = pathname === item.path;

            return (
              <Link
                key={item.path}
                href={item.path}
                className={`relative group pb-1 transition-all duration-300 ${
                  isActive
                    ? "text-black"
                    : "text-gray-700 hover:text-black"
                }`}
              >
                {item.name}

                <span
                  className={`absolute left-0 -bottom-1 h-[2px] bg-[#a5880f] transition-all duration-300 ${
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-black"
        >
          ☰
        </button>

      </div>

      
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-white border-t border-gray-200 px-6 py-4 space-y-4"
          >
            {navItems.map((item) => {
              const isActive = pathname === item.path;

              return (
                <Link
                  key={item.path}
                  href={item.path}
                  onClick={() => setOpen(false)}
                  className={`block text-sm ${
                    isActive
                      ? "text-black font-semibold"
                      : "text-gray-700"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>

    </header>
  );
}