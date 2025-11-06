import { motion } from 'framer-motion';
import { ShieldAlert, Clock, Database, UserX } from 'lucide-react';

const Problem = () => {
  const problems = [
    {
      icon: ShieldAlert,
      title: 'Security Risks',
      description: 'Unverified entries compromise facility safety',
      color: 'from-red-500 to-orange-500',
    },
    {
      icon: Clock,
      title: 'Time & Errors',
      description: 'Manual processes cause delays and mistakes',
      color: 'from-yellow-500 to-orange-500',
    },
    {
      icon: Database,
      title: 'No Tracking',
      description: 'Disconnected records prevent real-time visibility',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: UserX,
      title: 'No Verification',
      description: 'Lack of digital ID verification and traceability',
      color: 'from-blue-500 to-indigo-500',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="problem" className="py-20 md:py-32 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            The Problem: Outdated Entry Management
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-400 mx-auto"></div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {problems.map((problem, index) => {
            const Icon = problem.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all"
              >
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${problem.color} flex items-center justify-center mb-6`}>
                  <Icon className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {problem.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {problem.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Problem;
