import { FaExchangeAlt, FaLock, FaUsers, FaUserShield, FaRegLightbulb, FaEnvelope } from 'react-icons/fa';
import { motion } from 'framer-motion';

import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import FeatureCard from './components/ui/FeatureCard';
import TestimonialCard from './components/ui/TestimonialCard';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary-dark text-white py-20">
        <div className="container">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 mb-10 lg:mb-0">
              <motion.h1 
                className="text-4xl md:text-5xl font-bold mb-6"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                Boykot Dönemlerinde <br />
                <span className="text-green-300">İhtiyaçları Takas Etmenin</span> <br />
                Modern Yolu
              </motion.h1>
              <motion.p 
                className="text-xl mb-8 text-gray-200"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Beytepe Road, satın alım boykotlarında temel ve zaruri ihtiyaçların takas edilmesini sağlayan güvenli bir platformdur.
              </motion.p>
              <motion.div 
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <button className="btn-primary bg-white text-primary hover:bg-gray-100">
                  Hacettepe Mail ile Kaydol
                </button>
                <button className="btn-secondary text-white border-white hover:bg-white hover:text-primary">
                  Daha Fazla Bilgi
                </button>
              </motion.div>
            </div>
            <div className="lg:w-1/2">
              <motion.img 
                src="/beyteperoad-logo.jpg" 
                alt="Beytepe Road Platform" 
                className="w-full max-w-md mx-auto rounded-lg shadow-xl"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="section bg-gray-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Neler Sunuyoruz?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Beytepe Road, boykot dönemlerinde temel ihtiyaçların karşılanmasını kolaylaştırmak için tasarlanmış özelliklere sahiptir.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<FaExchangeAlt />}
              title="Modern Takas Sistemi"
              description="Geleneksel takas sistemlerini modern bir platform üzerinde yeniden yorumluyoruz."
            />
            <FeatureCard 
              icon={<FaLock />}
              title="Güvenli İşlemler"
              description="Tüm takas işlemleri şifrelenmiş ve güvenli bir şekilde gerçekleştirilir."
            />
            <FeatureCard 
              icon={<FaUsers />}
              title="Topluluk Odaklı"
              description="Hacettepe öğrencileri ve akademisyenleri için özel olarak tasarlanmış bir platform."
            />
            <FeatureCard 
              icon={<FaUserShield />}
              title="Doğrulanmış Profiller"
              description="Tüm kullanıcılar Hacettepe mail adresleri ile doğrulanır."
            />
            <FeatureCard 
              icon={<FaRegLightbulb />}
              title="İhtiyaç Bazlı Eşleştirme"
              description="Algoritmalarımız, ihtiyaçlarınızı en doğru şekilde eşleştirerek takas sürecini kolaylaştırır."
            />
            <FeatureCard 
              icon={<FaExchangeAlt />}
              title="Boykot Desteği"
              description="Satın alım boykotları sırasında temel ihtiyaçların karşılanmasına yardımcı olur."
            />
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="section bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Nasıl Çalışır?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Beytepe Road ile ihtiyaçlarınızı karşılamanın basit ve etkili yolunu keşfedin.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Steps */}
            <div className="hidden md:block absolute top-1/4 left-0 right-0 h-0.5 bg-primary-light">
              <div className="absolute left-1/3 top-1/2 w-0.5 h-8 bg-primary-light -translate-y-1/2"></div>
              <div className="absolute right-1/3 top-1/2 w-0.5 h-8 bg-primary-light -translate-y-1/2"></div>
            </div>
            
            {/* Step 1 */}
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4 relative z-10">
                1
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-800">Kayıt Ol</h3>
              <p className="text-gray-600">
                Hacettepe mail adresiniz ile hesap oluşturun ve profilinizi tamamlayın.
              </p>
            </motion.div>
            
            {/* Step 2 */}
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4 relative z-10">
                2
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-800">İhtiyaç/Ürün Ekle</h3>
              <p className="text-gray-600">
                İhtiyaç duyduğunuz veya takas edebileceğiniz ürünleri platforma ekleyin.
              </p>
            </motion.div>
            
            {/* Step 3 */}
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4 relative z-10">
                3
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-800">Takas Yap</h3>
              <p className="text-gray-600">
                Eşleşen kullanıcılarla iletişime geçin ve takas sürecini güvenle tamamlayın.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section bg-gray-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Kullanıcı Görüşleri</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Beta test sürecindeki kullanıcılarımızın Beytepe Road hakkındaki düşünceleri.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TestimonialCard 
              quote="Boykot döneminde temel ihtiyaçlarımı karşılamak için mükemmel bir platform. Takas sistemi son derece pratik."
              name="Ahmet K."
              role="Bilgisayar Mühendisliği Öğrencisi"
            />
            <TestimonialCard 
              quote="Hacettepe mail adresi ile kayıt olabilmek büyük bir güven veriyor. Platformun arayüzü çok kullanıcı dostu."
              name="Zeynep Y."
              role="Psikoloji Bölümü Öğrencisi"
            />
            <TestimonialCard 
              quote="Bu platform sayesinde boykot sürecinde ihtiyaçlarımızı karşılamak çok daha kolay hale geldi."
              name="Mehmet A."
              role="Akademisyen"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-6">Şimdi Beytepe Road'a Katılın</h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Geliştirme sürecindeyiz! Şu an test sürecinde yalnızca Hacettepe Üniversitesi mail adresleri ile kayıt yapılabilmektedir.
          </p>
          <motion.button 
            className="btn-primary bg-white text-primary hover:bg-gray-100"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Hacettepe Mail ile Kaydol
          </motion.button>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">İletişime Geçin</h2>
              <p className="text-gray-600 mb-8">
                Projemiz hakkında daha fazla bilgi almak veya işbirliği yapmak için bizimle iletişime geçebilirsiniz.
              </p>
              <div className="space-y-4">
                <p className="flex items-center text-gray-700">
                  <FaEnvelope className="mr-2 text-primary" /> info@beyteperoad.com
                </p>
              </div>
            </div>
            
            <div>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-gray-700 mb-2">İsim</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Adınız Soyadınız"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="örnek@hacettepe.edu.tr"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-gray-700 mb-2">Mesaj</label>
                  <textarea 
                    id="message" 
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Mesajınız..."
                  />
                </div>
                <button 
                  type="submit" 
                  className="btn-primary"
                >
                  Gönder
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}

export default App;
