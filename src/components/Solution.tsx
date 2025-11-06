import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const Solution = () => {
  return (
    <section id="solution" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Solution: <span className="text-blue-600">SVMS</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              A comprehensive web-based platform that replaces traditional registers with a secure,
              data-driven, and fully trackable visitor management experience.
            </p>

            <div className="space-y-4">
              {[
                'Digital-first approach eliminates paper trails',
                'Real-time tracking and analytics dashboard',
                'Multi-layer security with verification',
                'Seamless integration with existing systems',
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 className="text-green-500 flex-shrink-0 mt-1" size={24} />
                  <span className="text-gray-700 text-lg">{feature}</span>
                </motion.div>
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-8 px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors shadow-lg"
            >
              Explore Platform
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-cyan-400 blur-3xl opacity-20 rounded-full"></div>
            <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-4 shadow-2xl">
              <div className="bg-slate-900 rounded-xl overflow-hidden">
                <div className="bg-slate-800 px-4 py-3 flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="p-8 aspect-square flex items-center justify-center bg-gradient-to-br from-blue-900/20 to-cyan-900/20">
                  <div className="text-blue-400/50 text-4xl font-bold text-center">
                    PRODUCT<br />DASHBOARD<br />MOCKUP
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Solution;
