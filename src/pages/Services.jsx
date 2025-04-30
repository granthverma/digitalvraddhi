import React from 'react';
import { motion } from 'framer-motion';
import servicesImage from '../assets/Seo.jpeg';

const services = [
  {
    title: 'Creative Design',
    description: 'Innovative visual solutions that capture attention and communicate your brand essence.',
    icon: '✨',
    color: 'from-purple-500 to-pink-500'
  },
  {
    title: 'Web Development',
    description: 'High-performance websites built with modern frameworks and optimized for conversions.',
    icon: '🌐',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    title: 'Digital Marketing',
    description: 'Data-driven strategies to increase your online visibility and customer engagement.',
    icon: '🚀',
    color: 'from-orange-500 to-red-500'
  },
  {
    title: 'Mobile Apps',
    description: 'Custom mobile applications for iOS and Android that drive user engagement.',
    icon: '📱',
    color: 'from-green-500 to-teal-500'
  },
];

const Services = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-pink-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6">
        {/* Hero Section */}
        <div className="flex flex-col lg:flex-row items-center gap-16 mb-28">
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:w-1/2 order-2 lg:order-1"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              We Craft <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Digital Experiences</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Where innovation meets execution to create digital solutions that drive real business results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium rounded-full hover:shadow-lg transition-all">
                Start Your Project
              </button>
              <button className="px-8 py-4 border-2 border-gray-300 text-gray-700 font-medium rounded-full hover:bg-gray-50 transition-all">
                How We Work
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:w-1/2 order-1 lg:order-2 relative"
          >
            <div className="relative">
              <img 
                src={servicesImage} 
                alt="Digital Services" 
                className="rounded-3xl shadow-2xl w-full h-auto object-cover aspect-video"
              />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-yellow-400 rounded-2xl shadow-xl z-10 flex items-center justify-center text-4xl">
                🏆
              </div>
              <div className="absolute -top-6 -right-6 w-40 h-40 bg-white rounded-2xl shadow-xl z-10 p-4">
                <div className="bg-gradient-to-r from-green-400 to-blue-500 rounded-lg w-full h-full flex items-center justify-center text-white text-2xl font-bold">
                  +87%
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Services Section */}
        <div className="mb-28">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 bg-indigo-100 text-indigo-600 rounded-full text-sm font-medium mb-4">
              Our Services
            </span>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Solutions Designed for <span className="text-indigo-600">Your Growth</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer specialized services that adapt to your unique business needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="relative group overflow-hidden rounded-2xl bg-white shadow-xl"
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${service.color} opacity-10`}></div>
                <div className="relative p-8">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${service.color} flex items-center justify-center text-white text-3xl mb-6`}>
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <div className="flex items-center text-indigo-600 font-medium group-hover:text-indigo-800 transition-colors">
                    <span>Explore service</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 transition-transform group-hover:translate-x-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl p-12 text-white mb-28"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold mb-2">200+</div>
              <div className="text-xl opacity-90">Projects Completed</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">98%</div>
              <div className="text-xl opacity-90">Client Satisfaction</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">5x</div>
              <div className="text-xl opacity-90">ROI Guarantee</div>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-4xl font-bold text-gray-900 mb-6">Ready to Transform Your Digital Presence?</h3>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Let's create something extraordinary together. Schedule your free consultation today.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium rounded-full hover:shadow-xl transition-all">
              Get Started Now
            </button>
            <button className="px-8 py-4 border-2 border-gray-300 text-gray-700 font-medium rounded-full hover:bg-gray-50 transition-all">
              <span className="flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                </svg>
                Watch Demo
              </span>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;