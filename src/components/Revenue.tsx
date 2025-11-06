import { motion } from 'framer-motion';
import { CreditCard, Package, Wrench, Gift } from 'lucide-react';

const Revenue = () => {
  const revenueStreams = [
    {
      icon: CreditCard,
      title: 'Primary Revenue',
      subtitle: 'Subscriptions',
      description: 'Recurring monthly/annual subscription plans based on features and scale',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: Package,
      title: 'Secondary Revenue',
      subtitle: 'Add-ons',
      description: 'OCR technology, Smart Navigation, Advanced Analytics modules',
      color: 'from-purple-500 to-purple-600',
    },
    {
      icon: Wrench,
      title: 'Setup Fees',
      subtitle: 'Custom Branding',
      description: 'One-time customization and implementation fees for enterprise clients',
      color: 'from-green-500 to-green-600',
    },
    {
      icon: Gift,
      title: 'Freemium Strategy',
      subtitle: '14-day Free Trial',
      description: 'Risk-free trial period to convert prospects into paying customers',
      color: 'from-orange-500 to-orange-600',
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Revenue Model
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Diversified income streams ensuring sustainable growth and profitability
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-400 mx-auto mt-6"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {revenueStreams.map((stream, index) => {
            const Icon = stream.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all border border-gray-100"
              >
                <div className="flex items-start gap-6">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${stream.color} flex items-center justify-center flex-shrink-0 shadow-lg`}>
                    <Icon className="text-white" size={32} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-1">
                      {stream.title}
                    </h3>
                    <p className={`text-sm font-semibold bg-gradient-to-r ${stream.color} bg-clip-text text-transparent mb-3`}>
                      {stream.subtitle}
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                      {stream.description}
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

export default Revenue;
