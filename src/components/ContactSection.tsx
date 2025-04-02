'use client';

import { useState } from 'react';

export default function ContactSection() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [activeTab, setActiveTab] = useState('iletişim');
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would send this to your backend
    console.log('Submitted email:', email);
    setSubmitted(true);
    setEmail('');
    setTimeout(() => setSubmitted(false), 3000);
  };

  const faqs = [
    {
      question: "Beytepe Road'u kimler kullanabilir?",
      answer: "Beytepe Road sadece Hacettepe Üniversitesi öğrencileri için tasarlanmıştır. Kayıt olabilmek için @hacettepe.edu.tr uzantılı e-posta adresiniz olması gerekmektedir."
    },
    {
      question: "Uygulama ne zaman kullanıma sunulacak?",
      answer: "Uygulama şu anda geliştirme aşamasındadır. Beta sürümü yakında seçili kullanıcılarla test edilecek ve sonrasında tüm Hacettepe öğrencilerine açılacaktır."
    },
    {
      question: "Beytepe Road'da satış yapmak için ücret ödenmesi gerekiyor mu?",
      answer: "Hayır, Beytepe Road tamamen ücretsiz bir platformdur. Satış yapmanız veya ürün aramanız için herhangi bir komisyon alınmamaktadır."
    },
    {
      question: "Alışveriş güvenliği nasıl sağlanıyor?",
      answer: "Sistem sadece Hacettepe e-posta adresleriyle kayıt olunabildiği için güvenli bir topluluk oluşturmaktadır. Ayrıca kullanıcı puanlama sistemi ile güvenilir alıcı/satıcıları tanımlayabilirsiniz."
    },
    {
      question: "Bir sorun yaşarsam kiminle iletişime geçebilirim?",
      answer: "Uygulama içerisindeki iletişim formunu kullanarak doğrudan destek ekibimize ulaşabilirsiniz veya info@beyteperoad.com adresine e-posta gönderebilirsiniz."
    }
  ];

  return (
    <div id="iletişim" className="bg-white dark:bg-gray-900 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold tracking-wide uppercase text-[#1A472A] dark:text-[#4A8D68]">YARDIM</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Sorularınız ve İletişim
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 dark:text-gray-400 mx-auto">
            Beytepe Road hakkında merak ettikleriniz ve bize ulaşmak için
          </p>
        </div>

        {/* Tab navigation */}
        <div className="mt-12 border-b border-gray-200 dark:border-gray-700">
          <div className="flex justify-center -mb-px">
            <button
              onClick={() => setActiveTab('iletişim')}
              className={`px-6 py-3 border-b-2 text-sm font-medium ${
                activeTab === 'iletişim' 
                  ? 'border-[#1A472A] dark:border-[#4A8D68] text-[#1A472A] dark:text-[#4A8D68]'
                  : 'border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:border-gray-300 dark:hover:border-gray-600'
              }`}
            >
              İletişim Formu
            </button>
            <button
              onClick={() => setActiveTab('sss')}
              className={`ml-8 px-6 py-3 border-b-2 text-sm font-medium ${
                activeTab === 'sss' 
                  ? 'border-[#1A472A] dark:border-[#4A8D68] text-[#1A472A] dark:text-[#4A8D68]'
                  : 'border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:border-gray-300 dark:hover:border-gray-600'
              }`}
            >
              Sık Sorulan Sorular
            </button>
          </div>
        </div>

        {/* Tab content */}
        <div className="mt-10">
          {activeTab === 'iletişim' && (
            <div className="max-w-3xl mx-auto">
              <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden">
                <div className="px-6 py-8">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Uygulama Hakkında Bize Ulaşın</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-6">
                    Beytepe Road uygulaması hakkında bilgi almak, önerilerde bulunmak veya lansman bilgilerinden haberdar olmak için formu doldurabilirsiniz.
                  </p>
                  <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                      <label htmlFor="email" className="block text-gray-700 dark:text-gray-300 text-sm font-medium mb-2">
                        E-posta Adresiniz
                      </label>
                      <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="shadow-sm border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white dark:bg-gray-700 text-sm rounded-md focus:ring-[#1A472A] dark:focus:ring-[#4A8D68] focus:border-[#1A472A] dark:focus:border-[#4A8D68] block w-full p-3"
                        placeholder="ornek@hacettepe.edu.tr"
                        required
                      />
                    </div>
                    <div>
                      <button
                        type="submit"
                        className="w-full bg-[#1A472A] hover:bg-[#2A623D] dark:bg-[#2A623D] dark:hover:bg-[#1A472A] text-white font-medium py-3 px-4 rounded-md transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#1A472A] dark:focus:ring-[#4A8D68]"
                      >
                        {submitted ? 'Teşekkürler! Kaydınız alındı' : 'Kaydol ve Haberdar Ol'}
                      </button>
                    </div>
                  </form>
                  <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
                    Verileriniz gizlilik politikamıza uygun olarak saklanacak ve sadece uygulama hakkında bilgilendirme amacıyla kullanılacaktır.
                  </p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'sss' && (
            <div className="max-w-3xl mx-auto divide-y divide-gray-200 dark:divide-gray-700">
              {faqs.map((faq, index) => (
                <div key={index} className="py-5">
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="flex w-full justify-between items-center text-left"
                  >
                    <span className="text-lg font-medium text-gray-900 dark:text-white">{faq.question}</span>
                    <span>
                      <svg 
                        className={`h-6 w-6 text-[#1A472A] dark:text-[#4A8D68] transform ${openFaq === index ? 'rotate-180' : ''} transition-transform`} 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </span>
                  </button>
                  {openFaq === index && (
                    <div className="mt-3 pr-12">
                      <p className="text-base text-gray-500 dark:text-gray-400">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 