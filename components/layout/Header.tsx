"use client";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  // Navigation items (Accommodation types)
  const navItems = [
    { name: "Rooms", href: "/listings/rooms" },
    { name: "Mansion", href: "/listings/mansion" },
    { name: "Countryside", href: "/listings/countryside" },
    { name: "Villa", href: "/listings/villa" },
    { name: "Penthouse", href: "/listings/penthouse" },
  ];

  return (
    <header className="w-full sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-4 lg:px-8">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-blue-600">
          ALX Listings
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex gap-6">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Search Bar */}
        <div className="hidden md:block flex-1 mx-6 max-w-md">
          <input
            type="text"
            placeholder="Search properties..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full border rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Auth Buttons */}
        <div className="hidden lg:flex gap-3">
          <Link href="/auth/signin">
            <button className="border px-4 py-2 rounded-lg hover:bg-gray-100">
              Sign In
            </button>
          </Link>
          <Link href="/auth/signup">
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
              Sign Up
            </button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button onClick={toggleMobileMenu} type="button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8 text-gray-700"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Slide Menu */}
      <div
        className={`fixed top-0 left-0 min-h-screen w-64 bg-slate-100 shadow-lg transform transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        } lg:hidden z-50`}
      >
        <div className="flex items-center justify-between border-b px-4 py-4">
          <Link href="/" className="text-blue-600 font-bold text-xl">
            ALX Listings
          </Link>
          <button onClick={toggleMobileMenu}>
            ✕
          </button>
        </div>

        {/* Mobile Nav */}
        <nav className="flex flex-col gap-4 p-4">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-gray-700 hover:text-blue-600"
              onClick={toggleMobileMenu}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Search */}
        <div className="p-4">
          <input
            type="text"
            placeholder="Search properties..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full border rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Mobile Auth */}
        <div className="flex flex-col gap-2 px-4">
          <Link href="/auth/signin">
            <button className="border w-full px-4 py-2 rounded-lg hover:bg-gray-100">
              Sign In
            </button>
          </Link>
          <Link href="/auth/signup">
            <button className="bg-blue-600 text-white w-full px-4 py-2 rounded-lg hover:bg-blue-700">
              Sign Up
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
}
