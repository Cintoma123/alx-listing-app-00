import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-10">
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand / Logo */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-3">ALX Listings</h2>
          <p className="text-sm">
            Discover the best accommodations — from cozy rooms to luxury
            mansions. Simplify your booking experience with us.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">
            Quick Links
          </h3>
          <ul className="space-y-2">
            <li>
              <Link href="/" className="hover:text-blue-400">
                Home
              </Link>
            </li>
            <li>
              <Link href="/listings" className="hover:text-blue-400">
                Listings
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-blue-400">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-blue-400">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Accommodation Types */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">
            Accommodation
          </h3>
          <ul className="space-y-2">
            <li>
              <Link href="/listings/rooms" className="hover:text-blue-400">
                Rooms
              </Link>
            </li>
            <li>
              <Link href="/listings/mansion" className="hover:text-blue-400">
                Mansion
              </Link>
            </li>
            <li>
              <Link href="/listings/countryside" className="hover:text-blue-400">
                Countryside
              </Link>
            </li>
            <li>
              <Link href="/listings/villa" className="hover:text-blue-400">
                Villas
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact & Social */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Contact Us</h3>
          <p>Email: support@alxlistings.com</p>
          <p>Phone: +234-800-123-4567</p>

          <div className="flex space-x-4 mt-4">
            <Link href="https://facebook.com" target="_blank">
              <span className="sr-only">Facebook</span>
              <svg
                className="w-6 h-6 hover:text-blue-400"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M22 12a10 10 0 10-11.5 9.95V14.9h-2.3V12h2.3V9.8c0-2.28 1.35-3.55 3.42-3.55.99 0 2.02.18 2.02.18v2.2h-1.14c-1.13 0-1.48.7-1.48 1.42V12h2.5l-.4 2.9h-2.1v7.05A10 10 0 0022 12z" />
              </svg>
            </Link>
            <Link href="https://twitter.com" target="_blank">
              <span className="sr-only">Twitter</span>
              <svg
                className="w-6 h-6 hover:text-blue-400"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M23 3a10.9 10.9 0 01-3.14 1.54A4.48 4.48 0 0022.4.36a9 9 0 01-2.88 1.1 4.52 4.52 0 00-7.72 4.12 12.84 12.84 0 01-9.3-4.7 4.52 4.52 0 001.4 6.05 4.47 4.47 0 01-2.05-.57v.06a4.53 4.53 0 003.63 4.43 4.5 4.5 0 01-2.04.08 4.53 4.53 0 004.23 3.14A9.06 9.06 0 012 19.54a12.8 12.8 0 006.92 2.03c8.3 0 12.85-6.9 12.85-12.88 0-.2-.01-.4-.02-.6A9.22 9.22 0 0023 3z" />
              </svg>
            </Link>
            <Link href="https://instagram.com" target="_blank">
              <span className="sr-only">Instagram</span>
              <svg
                className="w-6 h-6 hover:text-blue-400"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zM12 7a5 5 0 100 10 5 5 0 000-10zm0 1.75a3.25 3.25 0 11-.002 6.502A3.25 3.25 0 0112 8.75zm6.5-.88a1.12 1.12 0 11-2.24 0 1.12 1.12 0 012.24 0z" />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 py-4 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} ALX Listings. All rights reserved.
      </div>
    </footer>
  );
}
