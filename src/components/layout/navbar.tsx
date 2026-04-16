"use client";

import Link from "next/link";
import { buttonVariants } from "../ui/button";
import { ThemeToggle } from "../theme-toggle";
import { navBarLinkList } from "@/config/navbarLinks";
import { NavbarLink } from "@/types/navbarLinks.types";
import { Sidebar } from "@/components/layout/sidebar";

function Navbar() {
  return (
    <nav className="bg-background border-b-1 p-4 shadow-xs sticky top-0 z-100">
      <div className="container flex items-center justify-between">
        <Link href="/" className="hover:opacity-80 transition-opacity">
          <h1 className="text-2xl font-bold tracking-tight">Trushita</h1>
        </Link>
        <div className="text-lg flex items-center justify-center md:gap-x-2">
          <div className="flex items-center justify-center hidden md:block">
            {navBarLinkList.map((item: NavbarLink) => {
              return (
                <Link
                  key={item.path}
                  className={buttonVariants({ variant: "link" })}
                  href={item.path}
                >
                  <span className="text-6">{item.name}</span>
                </Link>
              );
            })}
          </div>
          <ThemeToggle />
          <div className="block md:hidden ml-2">
            <Sidebar />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
