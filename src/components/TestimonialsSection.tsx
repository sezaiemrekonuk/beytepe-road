'use client';

import { useState, useEffect } from 'react';

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Define testimonials first so they can be used in the dependency array
  const testimonials = [
    {
      quote: "Ders kitaplarımı satıp, ihtiyacım olan diğer kitapları Beytepe Road üzerinden aldım. Hem ekonomik hem de çok pratik bir yöntem!",
      name: "Ayşe Yılmaz",
      title: "Bilgisayar Mühendisliği, 3. Sınıf",
    },
    {
      quote: "Boykot döneminde ihtiyaçlarımı karşılamak için harika bir platform. Tamamen öğrenciler arasında güvenli alışveriş yapabiliyoruz.",
      name: "Mehmet Kaya",
      title: "İşletme, 2. Sınıf",
    },
    {
      quote: "Kullanmadığım elektronik eşyalarımı satarak dönem başında bütçeme katkı sağladım. Beytepe Road sayesinde hızlı ve güvenli bir şekilde satış yapabildim.",
      name: "Zeynep Demir",
      title: "Elektrik-Elektronik Mühendisliği, 4. Sınıf",
    },
  ];

  // Handle intersection observer to detect when section is visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const sectionElement = document.getElementById('değerlendirmeler');
    if (sectionElement) {
      observer.observe(sectionElement);
    }

    return () => {
      if (sectionElement) {
        observer.unobserve(sectionElement);
      }
    };
  }, []);

  // Auto-rotate testimonials with improved animation handling
  useEffect(() => {
    if (!isVisible) return;

    const interval = setInterval(() => {
      if (!isAnimating) {
        changeTestimonial((activeIndex + 1) % testimonials.length);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [activeIndex, isAnimating, isVisible, testimonials.length]);

  const changeTestimonial = (newIndex: number) => {
    if (newIndex === activeIndex) return;
    
    setIsAnimating(true);
    setActiveIndex(newIndex);
    
    // Reset animation state after transition completes
    setTimeout(() => {
      setIsAnimating(false);
    }, 700);
  };

  return (
    <section 
      id="değerlendirmeler" 
      className="py-20 bg-gradient-to-br from-[#1A472A] to-[#2A623D] text-white overflow-hidden dark:from-[#0F2A19] dark:to-[#183828]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Background decorations */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-white rounded-full mix-blend-soft-light opacity-10 transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-white rounded-full mix-blend-soft-light opacity-10 transform translate-x-1/3 translate-y-1/3"></div>
        
        <div className={`text-center relative z-10 transition-all duration-700 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h2 className="text-base font-semibold tracking-wide uppercase">DEĞERLENDİRMELER</h2>
          <p className="mt-2 text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
            Öğrenciler Ne Diyor?
          </p>
        </div>

        <div className={`mt-12 relative transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <div className="relative mx-auto max-w-3xl h-[300px] md:h-[250px]">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`absolute w-full transition-all duration-700 ease-in-out ${
                  index === activeIndex
                    ? 'translate-x-0 opacity-100 z-10'
                    : index < activeIndex
                      ? '-translate-x-full opacity-0 z-0'
                      : 'translate-x-full opacity-0 z-0'
                }`}
              >
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-8 text-gray-800 dark:text-gray-200">
                  <div className="text-xl md:text-2xl font-medium text-gray-700 dark:text-gray-300 mb-6">
                    <svg className="h-8 w-8 text-[#1A472A] dark:text-[#2A623D] inline-block mr-3 mb-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.417 6.667C15.447 7.33 16 8.227 16 9.333C16 10.467 15.447 11.333 14.417 12C13.447 12.667 12.477 13 11.583 13C11.557 13 11.537 13 11.523 13C11.663 14.227 12.44 15.387 13.975 16.333C15.477 17.227 16 17.933 16 18.333C16 18.733 15.583 19 14.833 19C12.25 19 10.417 17.933 9.167 15.667C7.917 13.387 7.833 10.973 8.833 8.333C9.833 5.707 11.75 4.267 14.417 4C15.167 4 15.583 4.4 15.583 5.067C15.583 5.733 15.167 6.267 14.417 6.667ZM5.417 6.667C6.447 7.33 7 8.227 7 9.333C7 10.467 6.447 11.333 5.417 12C4.447 12.667 3.477 13 2.583 13C2.557 13 2.537 13 2.523 13C2.663 14.227 3.44 15.387 4.975 16.333C6.477 17.227 7 17.933 7 18.333C7 18.733 6.583 19 5.833 19C3.25 19 1.417 17.933 0.167 15.667C-1.083 13.387 -1.167 10.973 -0.167 8.333C0.833 5.707 2.75 4.267 5.417 4C6.167 4 6.583 4.4 6.583 5.067C6.583 5.733 6.167 6.267 5.417 6.667Z" />
                    </svg>
                    {testimonial.quote}
                  </div>
                  <div className="flex items-center mt-6">
                    <div className="h-12 w-12 rounded-full bg-[#1A472A] flex items-center justify-center text-white font-bold text-lg">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div className="ml-4">
                      <div className="font-medium text-[#1A472A] dark:text-[#4A8D68]">{testimonial.name}</div>
                      <div className="text-gray-500 dark:text-gray-400">{testimonial.title}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Improved navigation controls */}
          <div className="flex justify-center items-center space-x-4 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => !isAnimating && changeTestimonial(index)}
                className={`h-3 w-3 rounded-full transition-all duration-300 ${
                  index === activeIndex 
                    ? 'bg-white w-8' 
                    : 'bg-white/50 hover:bg-white/80'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
                disabled={isAnimating}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 