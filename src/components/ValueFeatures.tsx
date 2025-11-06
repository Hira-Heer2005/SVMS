import { motion } from 'framer-motion';
import { Navigation, WifiOff, ScanText, Bot, Shield, Zap } from 'lucide-react';

const ValueFeatures = () => {
  const features = [
    {
      icon: Navigation,
      title: 'Smart Navigation',
      description: 'GPS-powered directions to visitor destinations',
    },
    {
      icon: WifiOff,
      title: 'Offline Mode',
      description: 'Continue operations without internet connectivity',
    },
    {
      icon: ScanText,
      title: 'CNIC Auto-Scan (OCR)',
      description: 'Automatic identity card recognition and data extraction',
    },
    {
      icon: Bot,
      title: 'AI Guard Assistant',
      description: 'Intelligent chatbot for security personnel support',
    },
    {
      icon: Shield,
      title: 'Advanced Security',
      description: 'Multi-layer verification and access control',
    },
    {
      icon: Zap,
      title: 'Real-Time Updates',
      description: 'Instant notifications and live dashboard monitoring',
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Unique Value-Added Features
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transforming Visitor Management into a Comprehensive Security Solution
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-400 mx-auto mt-6"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="bg-white rounded-2xl p-8 shadow-md hover:shadow-2xl transition-all border border-gray-100"
              >
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center flex-shrink-0">
                    <Icon className="text-white" size={28} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ValueFeatures;
