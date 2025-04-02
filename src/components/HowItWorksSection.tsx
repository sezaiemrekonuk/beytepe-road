'use client';

import { useInView } from 'react-intersection-observer';

export default function HowItWorksSection() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const steps = [
    {
      number: "01",
      title: "Kayıt Ol",
      description: "Hacettepe Üniversitesi e-posta adresinizle (@hacettepe.edu.tr) uygulamaya kayıt olun."
    },
    {
      number: "02",
      title: "Profil Oluştur",
      description: "Kişisel bilgilerinizi ekleyin ve güvenilir bir alıcı/satıcı profili oluşturun."
    },
    {
      number: "03",
      title: "İlan Ver veya Ara",
      description: "Satmak istediğiniz ürünleri listeleyin veya ihtiyacınız olan ürünleri aramaya başlayın."
    },
    {
      number: "04",
      title: "İletişime Geç",
      description: "İlgilendiğiniz ürün için satıcı ile doğrudan uygulama üzerinden iletişime geçin."
    },
    {
      number: "05",
      title: "Buluş ve Takas Yap",
      description: "Kampüs içinde güvenli bir noktada buluşarak ürün ve ödeme takası yapın."
    },
  ];

  return (
    <div id="nasıl-çalışır" className="py-24 bg-[#F5F5F0] dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base text-[#1A472A] dark:text-[#4A8D68] font-semibold tracking-wide uppercase">Kullanım</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Beytepe Road Nasıl Çalışır?
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 dark:text-gray-400 mx-auto">
            Sadece 5 adımda kampüs içi alışveriş deneyimini keşfedin.
          </p>
        </div>

        <div 
          ref={ref}
          className={`mt-20 relative transition-all duration-1000 transform ${
            inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          {/* Step divider line */}
          <div className="hidden md:block absolute left-1/2 -ml-0.5 w-0.5 h-full bg-gray-200 dark:bg-gray-700"></div>

          {/* Steps */}
          <div className="space-y-12">
            {steps.map((step, index) => (
              <div 
                key={index} 
                className={`relative transition-all duration-700 transform ${
                  inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="md:grid md:grid-cols-2 md:gap-24 relative">
                  <div className={`${index % 2 === 0 ? 'md:col-start-1' : 'md:col-start-2'}`}>
                    <div className="p-6 bg-white dark:bg-gray-900 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
                      <div className="text-[#1A472A] dark:text-[#4A8D68] font-bold text-xl mb-2">{step.title}</div>
                      <p className="text-gray-600 dark:text-gray-400">{step.description}</p>
                    </div>
                  </div>
                  
                  <div className="md:absolute top-1/2 -translate-y-1/2 left-0 md:left-1/2 md:-translate-x-1/2">
                    <div className="border-4 border-[#E8EACF] dark:border-[#0F2A19] bg-[#1A472A] dark:bg-[#2A623D] text-white h-12 w-12 rounded-full flex items-center justify-center font-bold z-10">
                      {step.number}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}