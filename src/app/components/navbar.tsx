"use client";

import Link from "next/link";
import { Bell, Menu, Settings } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Image from "next/image";

const navigationLinks = [
  { href: "/", label: "Home" },
  { href: "/analysis", label: "Analysis" },
  { href: "/report", label: "Reports" },
  { href: "/configurations", label: "Configurations" },
  { href: "/infereces", label: "Inferences" },
  { href: "/devices-management", label: "Device Management" },
  { href: "/dashboard", label: "Go To Dashboard" },
];

export function Navbar() {
  return (
    <nav className="border-b bg-[#182028] text-white py-2">
      <div className="flex flex-col px-4">
        <div className="flex h-14 items-center justify-between px-4 gap-4">
          {/* Logo - visible on all screens */}
          <Link
            href="/"
            className="font-semibold text-xl flex items-center gap-2"
          >
            <div className="w-6 h-6 bg-primary rounded-sm flex items-center justify-center text-primary-foreground text-sm">
              <Image src={'/logo.png'} alt="logo" width={24} height={24}/>
            </div>
            PAOIP
          </Link>

          {/* Mobile Menu Button */}
          <Sheet>
            <SheetTrigger asChild className="lg:hidden ml-auto">
              <Button variant="ghost" size="icon">
                <Menu className="h-4 w-4" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent
              side="left"
              className="w-80 bg-[#182028] text-white border-r-[#182028]"
            >
              <div className="flex flex-col gap-4 mt-8">
                {navigationLinks.map((link) => (
                  <Link key={link.href} href={link.href}>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="w-full justify-start"
                    >
                      {link.label}
                    </Button>
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>

          {/* Action Buttons - show after hamburger on mobile, auto margin on desktop */}
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon">
              <Bell className="h-4 w-4" />
              <span className="sr-only">Notifications</span>
            </Button>
            <Button variant="ghost" size="icon">
              <Settings className="h-4 w-4" />
              <span className="sr-only">Settings</span>
            </Button>
          </div>
        </div>

        {/* Desktop Navigation - hidden on mobile */}
        <div className="hidden lg:flex items-center gap-1 ml-8 overflow-x-auto">
          {navigationLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="flex items-center gap-2 shrink-0"
            >
              <Button variant="ghost" size="sm">
                {link.label}
              </Button>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
