import { FaEnvelope, FaGithub, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-primary text-white">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Beytepe Road</h3>
            <p className="text-gray-300">
              Boykot dönemlerinde temel ihtiyaçların takas edilmesini sağlayan modern bir platform.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Hızlı Bağlantılar</h3>
            <ul className="space-y-2">
              <li><a href="#features" className="text-gray-300 hover:text-white transition-colors">Özellikler</a></li>
              <li><a href="#how-it-works" className="text-gray-300 hover:text-white transition-colors">Nasıl Çalışır</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-white transition-colors">Hakkımızda</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-white transition-colors">İletişim</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Yasal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Kullanım Koşulları</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Gizlilik Politikası</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Çerez Politikası</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">İletişim</h3>
            <div className="flex items-center space-x-4 mb-4">
              <a href="mailto:info@beyteperoad.com" className="text-gray-300 hover:text-white transition-colors">
                <FaEnvelope size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <FaGithub size={20} />
              </a>
            </div>
            <p className="text-gray-300 text-sm">
              Şu an yalnızca Hacettepe Üniversitesi mail adresleri ile kayıt açılmaktadır.
            </p>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Beytepe Road. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 