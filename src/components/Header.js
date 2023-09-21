"use client";

import React from "react";
import Link from "next/link";

import styles from "../styles/Home.module.css";

import { ModeToggle } from "@/components/ButtonThemeToggle";
import { buttonVariants } from "@/components/ui/button";
import { NavigationDropdown } from "./NavigationDropdown";

const Header = () => {
  return (
    <nav
      className={`max-w-5xl m-auto w-full px-4 py-2 border border-input bg-transparent shadow-sm ${styles.stickyheader}`}
    >
      <div className="flex items-center gap-8 justify-between">
        <div>
          <Link href="/" className="text-2xl font-semibold hover:opacity-90">
            Logo
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <Link
            href="features"
            className={buttonVariants({ variant: "ghost" })}
          >
            Features
          </Link>

          <Link href="pricing" className={buttonVariants({ variant: "ghost" })}>
            Pricing
          </Link>

          <Link
            href="characters"
            className={buttonVariants({ variant: "ghost" })}
          >
            Characters
          </Link>

          <Link
            href="dashboard"
            className={buttonVariants({ variant: "destructive" })}
          >
            Dashboard
          </Link>

          <NavigationDropdown />

          <ModeToggle />
        </div>
      </div>
    </nav>
  );
};

export default Header;
