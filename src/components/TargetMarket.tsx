import { motion } from 'framer-motion';
import { Building2, Briefcase, Factory, Heart, GraduationCap, Calendar } from 'lucide-react';

const TargetMarket = () => {
  const markets = [
    { icon: Building2, title: 'Housing Societies', color: 'from-blue-500 to-blue-600' },
    { icon: Briefcase, title: 'Corporate Offices', color: 'from-purple-500 to-purple-600' },
    { icon: Factory, title: 'Industrial Facilities', color: 'from-orange-500 to-orange-600' },
    { icon: Heart, title: 'Healthcare Facilities', color: 'from-red-500 to-red-600' },
    { icon: GraduationCap, title: 'Schools & Universities', color: 'from-green-500 to-green-600' },
    { icon: Calendar, title: 'Event Venues', color: 'from-cyan-500 to-cyan-600' },
  ];

  return (
    <section id="market" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Target Market
          </h2>
          <p className="text-xl text-gray-600">
            Serving diverse industries with tailored security solutions
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-400 mx-auto mt-6"></div>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {markets.map((market, index) => {
            const Icon = market.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -10, scale: 1.05, transition: { duration: 0.2 } }}
                className="flex flex-col items-center"
              >
                <div className={`w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-gradient-to-br ${market.color} flex items-center justify-center mb-4 shadow-lg hover:shadow-2xl transition-shadow`}>
                  <Icon className="text-white" size={40} />
                </div>
                <h3 className="text-center font-semibold text-gray-900 text-sm md:text-base">
                  {market.title}
                </h3>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TargetMarket;
