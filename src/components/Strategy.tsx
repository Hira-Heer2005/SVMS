import { motion } from 'framer-motion';
import { Target, Handshake, Megaphone, Users } from 'lucide-react';

const Strategy = () => {
  const strategies = [
    {
      icon: Target,
      title: 'Direct Sales',
      description: 'Targeted outreach to key decision-makers in facilities and security management',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: Handshake,
      title: 'Strategic Partnerships',
      description: 'Collaborations with security firms, property developers, and facility managers',
      color: 'from-purple-500 to-purple-600',
    },
    {
      icon: Megaphone,
      title: 'Digital Marketing',
      description: 'SEO, content marketing, and social media campaigns to drive awareness',
      color: 'from-green-500 to-green-600',
    },
    {
      icon: Users,
      title: 'Referral Program',
      description: 'Incentivize existing customers to refer new businesses with exclusive rewards',
      color: 'from-orange-500 to-orange-600',
    },
  ];

  return (
    <section id="strategy" className="py-20 md:py-32 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Market Strategy
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Multi-channel approach to reach and convert our target audience
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-400 mx-auto mt-6"></div>
        </motion.div>

        <div className="relative">
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-200 via-purple-200 via-green-200 to-orange-200 transform -translate-y-1/2 hidden lg:block"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {strategies.map((strategy, index) => {
              const Icon = strategy.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2, duration: 0.5 }}
                  whileHover={{ y: -10, transition: { duration: 0.2 } }}
                  className="relative"
                >
                  <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-shadow h-full">
                    <div className="flex flex-col items-center text-center">
                      <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${strategy.color} flex items-center justify-center mb-6 shadow-lg`}>
                        <Icon className="text-white" size={40} />
                      </div>
                      <div className={`text-3xl font-bold bg-gradient-to-r ${strategy.color} bg-clip-text text-transparent mb-4`}>
                        {index + 1}
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">
                        {strategy.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {strategy.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="mt-16 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl p-8 text-center text-white shadow-2xl"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-3">
            Freemium Trial Strategy
          </h3>
          <p className="text-xl text-blue-50 mb-6">
            14-day free trial to experience the full power of SVMS with no credit card required
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold text-lg hover:bg-gray-50 transition-colors shadow-lg"
          >
            Start Free Trial
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Strategy;
