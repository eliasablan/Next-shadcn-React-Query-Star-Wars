"use client";

import React from "react";
import Link from "next/link";
import { ChevronDownIcon } from "@radix-ui/react-icons";

import styles from "../styles/Home.module.css";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ModeToggle } from "@/components/ButtonThemeToggle";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const Header = () => {
  const moreMenuOptions = [
    {
      id: 1,
      name: "vehicles",
      href: "#",
    },
    {
      id: 2,
      name: "starships",
      href: "#",
    },
    {
      id: 3,
      name: "species",
      href: "#",
    },
  ];

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
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link href="characters" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Characters
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="#" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Films
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="#" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Planets
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>More</NavigationMenuTrigger>
                <NavigationMenuContent>
                  {moreMenuOptions.map((menuOption) => (
                    <NavigationMenuList key={menuOption.id}>
                      <NavigationMenuItem>
                        <Link
                          key={menuOption.id}
                          href={menuOption.href}
                          legacyBehavior
                          passHref
                        >
                          <NavigationMenuLink
                            className={navigationMenuTriggerStyle()}
                          >
                            {menuOption.name}
                          </NavigationMenuLink>
                        </Link>
                      </NavigationMenuItem>
                    </NavigationMenuList>
                  ))}
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu> */}

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="ml-auto">
                Tables <ChevronDownIcon className="ml-2 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {moreMenuOptions.map((menuOption) => {
                return (
                  <>
                    <DropdownMenuItem
                      key={menuOption.id}
                      className="capitalize"
                    >
                      {menuOption.name}
                    </DropdownMenuItem>
                    {menuOption.id < moreMenuOptions.length ? (
                      <DropdownMenuSeparator />
                    ) : null}
                  </>
                );
              })}
            </DropdownMenuContent>
          </DropdownMenu>

          <ModeToggle />
        </div>
      </div>
    </nav>
  );
};

export default Header;
