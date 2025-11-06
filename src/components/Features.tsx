import { motion } from 'framer-motion';
import { UserPlus, Camera, CreditCard, ScanLine } from 'lucide-react';

const Features = () => {
  const coreFeatures = [
    {
      icon: UserPlus,
      title: 'Visitor Registration',
      description: 'Instant visitor data entry with intuitive interface',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Camera,
      title: 'Picture Capture',
      description: 'Live photo verification for enhanced security',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: CreditCard,
      title: 'Digital Pass Generation',
      description: 'Auto-generated passes with QR codes',
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: ScanLine,
      title: 'Check-In & Check-Out',
      description: 'QR-based entry/exit tracking system',
      color: 'from-orange-500 to-red-500',
    },
  ];

  return (
    <section id="features" className="py-20 md:py-32 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Core Functional Features
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {coreFeatures.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -10, transition: { duration: 0.2 } }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all group"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                  className={`w-16 h-16 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 group-hover:shadow-lg`}
                >
                  <Icon className="text-white" size={32} />
                </motion.div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-blue-100 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
