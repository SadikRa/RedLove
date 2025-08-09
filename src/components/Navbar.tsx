"use client";

import { useState } from "react";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { LogOut, Menu } from "lucide-react";
import logo from "../app/assets/logo.png";
import Image from "next/image";
import { Button } from "./ui/button";
import { ModeToggle } from "./mode-toggle";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Community", href: "/community" },
    { name: "About Us", href: "/about-us" },
    { name: "FAQ", href: "/faq" },
    { name: "Blog", href: "/blog" },
    { name: "Contact Us", href: "/contact" },
  ];

  
  return (
    <nav className="fixed top-0 left-0 w-full bg-background/80 backdrop-blur-md border-b border-border shadow-md z-50">
      <div className="flex items-center justify-between px-4 sm:px-6 lg:px-8 py-4">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Image
            src={logo}
            alt="RedLove Logo"
            width={40}
            height={40}
            className="rounded-full"
          />
          <Link
            href="/"
            className="text-2xl sm:text-3xl font-extrabold text-primary"
          >
            RedLove
          </Link>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-foreground font-medium">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                className="hover:text-secondary transition-colors duration-200"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right Side */}
        <div className="flex items-center space-x-4">
          <ModeToggle />

          {/* User Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Avatar className="cursor-pointer border border-border">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>U</AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Dashboard</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="bg-primary text-white hover:bg-secondary cursor-pointer">
                <LogOut className="mr-2 h-4 w-4" />
                Log Out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Login Button */}
          <Link
            href="/login"
            className="hidden sm:inline-block px-4 py-2 rounded-lg bg-primary text-primary-foreground hover:bg-secondary transition duration-300"
          >
            Login
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-primary focus:outline-none"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-lg border-b border-border shadow-md animate-in slide-in-from-top duration-200">
          <ul className="flex flex-col space-y-4 p-6 text-foreground font-medium">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="block hover:text-secondary transition-colors duration-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              </li>
            ))}
            <li>
              <Button className="w-full bg-primary text-white hover:bg-secondary transition duration-300">
                Log Out
              </Button>
            </li>
            <li>
              <Link
                href="/login"
                className="block w-full text-center px-4 py-2 rounded-lg bg-primary text-primary-foreground hover:bg-secondary transition duration-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Login
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
