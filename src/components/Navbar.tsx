'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-sm fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <Image
                src="/beyteperoad-logo.jpg"
                alt="Beytepe Road Logo"
                width={40}
                height={40}
                className="rounded-full"
              />
              <span className="ml-2 text-xl font-bold text-[#1A472A] dark:text-white">Beytepe Road</span>
            </Link>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/#özellikler" className="text-gray-700 dark:text-gray-300 hover:text-[#1A472A] dark:hover:text-white transition">
              Özellikler
            </Link>
            <Link href="/#nasıl-çalışır" className="text-gray-700 dark:text-gray-300 hover:text-[#1A472A] dark:hover:text-white transition">
              Nasıl Çalışır
            </Link>
            <Link href="/#hakkımızda" className="text-gray-700 dark:text-gray-300 hover:text-[#1A472A] dark:hover:text-white transition">
              Hakkımızda
            </Link>
            <Link href="/#iletişim" className="text-gray-700 dark:text-gray-300 hover:text-[#1A472A] dark:hover:text-white transition">
              İletişim
            </Link>
            <ThemeToggle />
            <Link 
              href="/#kaydol" 
              className="ml-4 px-4 py-2 rounded-md bg-[#1A472A] text-white hover:bg-[#2A623D] dark:bg-[#2A623D] dark:hover:bg-[#1A472A] transition"
            >
              Kaydol
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden space-x-4">
            <ThemeToggle />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none"
            >
              <span className="sr-only">Menü aç</span>
              {/* Icon for menu */}
              <svg 
                className={`${mobileMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              {/* Icon for closing menu */}
              <svg 
                className={`${mobileMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`${mobileMenuOpen ? 'block' : 'hidden'} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 bg-white dark:bg-gray-900">
          <Link 
            href="/#özellikler" 
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
            onClick={() => setMobileMenuOpen(false)}
          >
            Özellikler
          </Link>
          <Link 
            href="/#nasıl-çalışır" 
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
            onClick={() => setMobileMenuOpen(false)}
          >
            Nasıl Çalışır
          </Link>
          <Link 
            href="/#hakkımızda" 
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
            onClick={() => setMobileMenuOpen(false)}
          >
            Hakkımızda
          </Link>
          <Link 
            href="/#iletişim" 
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
            onClick={() => setMobileMenuOpen(false)}
          >
            İletişim
          </Link>
          <Link 
            href="/#kaydol" 
            className="block px-3 py-2 rounded-md text-base font-medium bg-[#1A472A] text-white hover:bg-[#2A623D] dark:bg-[#2A623D] dark:hover:bg-[#1A472A]"
            onClick={() => setMobileMenuOpen(false)}
          >
            Kaydol
          </Link>
        </div>
      </div>
    </nav>
  );
} 