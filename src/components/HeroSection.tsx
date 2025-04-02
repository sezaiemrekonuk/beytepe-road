'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="relative pt-20 pb-16 overflow-hidden bg-gradient-to-br from-[#E8EACF] to-[#F5F5F0] dark:from-gray-800 dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <div 
            className={`lg:col-span-6 text-center lg:text-left transform transition-all duration-700 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <h1 className="mt-16 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
              <span className="block">Hacettepe&apos;de Yeni</span>
              <span className="block text-[#1A472A] dark:text-[#4A8D68]">Alışveriş Deneyimi</span>
            </h1>
            <p className="mt-6 text-lg text-gray-600 dark:text-gray-300">
              Beytepe Road ile kampüs içerisinde alışveriş artık çok daha kolay! 
              Kullanmadığın eşyaları sat, ihtiyacın olanları bul. 
              Tamamen Hacettepe öğrencilerine özel güvenli alışveriş platformu.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row sm:justify-center lg:justify-start gap-4">
              <Link
                href="/#kaydol"
                className="px-8 py-3 text-base font-medium rounded-md text-white bg-[#1A472A] hover:bg-[#2A623D] dark:bg-[#2A623D] dark:hover:bg-[#1A472A] md:py-4 md:text-lg md:px-10 transition"
              >
                Hemen Kaydol
              </Link>
              <Link
                href="/#nasıl-çalışır"
                className="px-8 py-3 text-base font-medium rounded-md text-[#1A472A] bg-[#E8EACF] hover:bg-[#D8DBBC] dark:text-[#E8EACF] dark:bg-[#1A472A] dark:hover:bg-[#0F2A19] md:py-4 md:text-lg md:px-10 transition"
              >
                Nasıl Çalışır
              </Link>
            </div>
          </div>
          <div 
            className={`mt-12 lg:mt-0 lg:col-span-6 transform transition-all duration-700 delay-300 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <div className="relative lg:inset-y-0 lg:right-0">
              <div className="relative mx-auto w-full rounded-lg shadow-lg overflow-hidden">
                <div className="relative w-full h-72 sm:h-80 md:h-96">
                  <Image
                    src="/beyteperoad-logo.jpg"
                    alt="Beytepe Road uygulaması"
                    fill
                    className="object-cover object-center"
                    priority
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-tr from-[#1A472A]/30 to-[#4A8D68]/30 rounded-lg"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#E8EACF] rounded-full mix-blend-multiply filter blur-3xl opacity-20 dark:opacity-10"></div>
      <div className="absolute -bottom-16 -right-24 w-80 h-80 bg-[#1A472A] rounded-full mix-blend-multiply filter blur-3xl opacity-20 dark:opacity-10"></div>
    </div>
  );
} 