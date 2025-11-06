import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const Pricing = () => {
  const plans = [
    {
      name: 'Basic',
      price: '₨15K',
      period: '/month',
      description: 'Ideal for small offices',
      features: [
        'Visitor Registration',
        'Picture Capture',
        'Digital Pass Generation',
        'Check-In/Check-Out',
        'Basic Reporting',
        'Email Support',
      ],
      color: 'from-blue-500 to-blue-600',
      popular: false,
    },
    {
      name: 'Standard',
      price: '₨50K',
      period: '/month',
      description: 'Perfect for growing businesses',
      features: [
        'All Basic Features',
        'CNIC Auto-Scan (OCR)',
        'Cloud Storage',
        'Advanced Reporting',
        'Smart Navigation',
        'Priority Support',
        'Custom Branding',
      ],
      color: 'from-purple-500 to-purple-600',
      popular: true,
    },
    {
      name: 'Premium Pro',
      price: '₨100K+',
      period: '/month',
      description: 'Enterprise-grade solution',
      features: [
        'All Standard Features',
        'Offline Mode',
        'AI Guard Assistant',
        'Predictive Analytics',
        'Multi-Location Support',
        'Dedicated Account Manager',
        'API Access',
        '24/7 Premium Support',
      ],
      color: 'from-cyan-500 to-cyan-600',
      popular: false,
    },
  ];

  return (
    <section id="pricing" className="py-20 md:py-32 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Pricing Plans
          </h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Choose the perfect plan for your organization
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto mt-6"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className={`relative bg-white rounded-2xl p-8 shadow-2xl ${
                plan.popular ? 'ring-4 ring-cyan-400 scale-105' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-1.5 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-4">{plan.description}</p>
                <div className="flex items-end justify-center gap-1">
                  <span className={`text-5xl font-bold bg-gradient-to-r ${plan.color} bg-clip-text text-transparent`}>
                    {plan.price}
                  </span>
                  <span className="text-gray-500 mb-2">{plan.period}</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className={`w-5 h-5 rounded-full bg-gradient-to-r ${plan.color} flex items-center justify-center flex-shrink-0 mt-0.5`}>
                      <Check className="text-white" size={14} />
                    </div>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="space-y-3">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full py-3 rounded-lg font-semibold text-white bg-gradient-to-r ${plan.color} hover:shadow-lg transition-shadow`}
                >
                  Start Free Trial
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full py-3 rounded-lg font-semibold text-gray-700 border-2 border-gray-300 hover:border-gray-400 transition-colors"
                >
                  Book Demo
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
