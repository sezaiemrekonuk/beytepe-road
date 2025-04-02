import { motion } from 'framer-motion';

interface TestimonialCardProps {
  quote: string;
  name: string;
  role: string;
  avatarUrl?: string;
}

const TestimonialCard = ({ quote, name, role, avatarUrl }: TestimonialCardProps) => {
  return (
    <motion.div 
      className="bg-white p-6 rounded-lg shadow-md"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="flex flex-col h-full">
        <div className="mb-4 text-gray-600 italic flex-grow">
          "{quote}"
        </div>
        <div className="flex items-center mt-4">
          {avatarUrl ? (
            <img 
              src={avatarUrl} 
              alt={name} 
              className="w-10 h-10 rounded-full mr-3 object-cover"
            />
          ) : (
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white mr-3">
              {name.charAt(0)}
            </div>
          )}
          <div>
            <p className="font-semibold text-gray-800">{name}</p>
            <p className="text-gray-500 text-sm">{role}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default TestimonialCard; 