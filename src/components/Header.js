"use client";

import React from "react";
import Link from "next/link";

import styles from "../styles/Home.module.css";

import { ModeToggle } from "@/components/ButtonThemeToggle";
import { buttonVariants } from "@/components/ui/button";

const Header = () => {
  return (
    <nav
      className={`max-w-5xl m-auto w-full px-4 py-2 border border-input bg-transparent shadow-sm ${styles.stickyheader}`}
    >
      <div className="flex items-center gap-8 justify-between">
        <div>
          <Link href="/" className="text-2xl font-semibold hover:opacity-90">
            Star Wars Tables
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <Link href="#" className={buttonVariants({ variant: "ghost" })}>
            Films
          </Link>

          <Link href="#" className={buttonVariants({ variant: "ghost" })}>
            Planets
          </Link>

          <Link
            href="characters"
            className={buttonVariants({ variant: "ghost" })}
          >
            Characters
          </Link>

          {/* <Link
            href="characters"
            className={buttonVariants({ variant: "ghost" })}
          >
            Vechicles
          </Link>

          <Link
            href="characters"
            className={buttonVariants({ variant: "ghost" })}
          >
            Starships
          </Link>

          <Link
            href="characters"
            className={buttonVariants({ variant: "ghost" })}
          >
            Species
          </Link> */}

          <ModeToggle />
        </div>
      </div>
    </nav>
  );
};

export default Header;
