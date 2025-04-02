'use client';

import { useInView } from 'react-intersection-observer';

export default function FeaturesSection() {
  const { ref: ref1, inView: inView1 } = useInView({ threshold: 0.1, triggerOnce: true });
  const { ref: ref2, inView: inView2 } = useInView({ threshold: 0.1, triggerOnce: true });
  const { ref: ref3, inView: inView3 } = useInView({ threshold: 0.1, triggerOnce: true });
  const { ref: ref4, inView: inView4 } = useInView({ threshold: 0.1, triggerOnce: true });

  const features = [
    {
      ref: ref1,
      inView: inView1,
      icon: (
        <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
      title: "Hacettepe Topluluğu",
      description: "Sadece @hacettepe.edu.tr uzantılı e-posta hesaplarıyla kayıt olabilir, böylece güvenli bir topluluk oluşturursunuz."
    },
    {
      ref: ref2,
      inView: inView2,
      icon: (
        <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: "Kolay Alışveriş",
      description: "Kullanılmayan eşyalarınızı hızlıca listeleyebilir veya ihtiyaçlarınızı kolayca bulabilirsiniz."
    },
    {
      ref: ref3,
      inView: inView3,
      icon: (
        <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: "Ekonomik Çözüm",
      description: "Komisyon ödemeden, aracı olmadan doğrudan elden alışveriş imkanı sağlar, böylece bütçenize katkıda bulunursunuz."
    },
    {
      ref: ref4,
      inView: inView4,
      icon: (
        <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Zaman Tasarrufu",
      description: "Kampüs içerisindeki kullanıcılarla hızlı teslimat ve kolay buluşma imkanı sayesinde zaman kazandırır."
    },
  ];

  return (
    <div id="özellikler" className="py-16 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-[#1A472A] dark:text-[#4A8D68] font-semibold tracking-wide uppercase">Özellikler</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Beytepe Road&apos;un Avantajları
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 dark:text-gray-400 lg:mx-auto">
            Hacettepe öğrencileri için tasarlanmış bu platform, ihtiyaçlarınızı kolayca karşılamanızı sağlar.
          </p>
        </div>

        <div className="mt-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                ref={feature.ref}
                className={`relative p-6 bg-white dark:bg-gray-800 rounded-lg border border-gray-100 dark:border-gray-700 shadow-sm transition-all duration-700 transform ${
                  feature.inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-[#1A472A] dark:bg-[#2A623D] text-white">
                    {feature.icon}
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900 dark:text-white">{feature.title}</p>
                </div>
                <p className="mt-4 ml-16 text-base text-gray-500 dark:text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 