import { motion } from 'framer-motion';
import { Mail, MapPin, Linkedin, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact" className="bg-slate-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-2"
          >
            <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent mb-4">
              SVMS
            </div>
            <p className="text-blue-100 mb-6 max-w-md">
              Smart Visitor Management System - Revolutionizing facility security with intelligent,
              data-driven visitor tracking and management solutions.
            </p>
            <div className="flex gap-4">
              {[
                { icon: Linkedin, href: '#' },
                { icon: Facebook, href: '#' },
                { icon: Twitter, href: '#' },
              ].map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={index}
                    href={social.href}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                  >
                    <Icon size={20} />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'Features', 'Pricing', 'About Us', 'Contact'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-blue-100 hover:text-white transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Mail className="flex-shrink-0 mt-1 text-blue-400" size={20} />
                <span className="text-blue-100">info@svms.com</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="flex-shrink-0 mt-1 text-blue-400" size={20} />
                <span className="text-blue-100">
                  123 Tech Plaza, Innovation District<br />
                  Karachi, Pakistan
                </span>
              </li>
            </ul>
          </motion.div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-blue-100 text-sm">
              Copyright © 2025 SVMS. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-blue-100 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-blue-100 hover:text-white transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
