import React from 'react';
import { motion } from 'framer-motion';
import servicesImage from '../assets/Seo.jpeg'; // Replace with your actual image path

const services = [
  {
    title: 'Creative Design',
    description: 'Innovative visual solutions that capture attention and communicate your brand essence.',
    icon: '🎨',
  },
  {
    title: 'Web Development',
    description: 'High-performance websites built with modern frameworks and optimized for conversions.',
    icon: '💻',
  },
  {
    title: 'Digital Marketing',
    description: 'Data-driven strategies to increase your online visibility and customer engagement.',
    icon: '📈',
  },
  {
    title: 'Mobile Apps',
    description: 'Custom mobile applications for iOS and Android that drive user engagement.',
    icon: '📱',
  },
];

const Services = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        {/* Hero Section with Image and Text */}
        <div className="flex flex-col lg:flex-row items-center gap-12 mb-20">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Transforming Ideas Into <span className="text-indigo-600">Digital Reality</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              We combine creativity with technology to deliver exceptional digital experiences that drive results for your business.
            </p>
            <button className="px-8 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors">
              Get Started
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <img 
              src={servicesImage} 
              alt="Our Services" 
              className="rounded-xl shadow-xl w-full h-auto object-cover"
            />
          </motion.div>
        </div>

        {/* Services Grid */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-gray-900 mb-4"
          >
            Our Core Services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Comprehensive solutions tailored to your business needs
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="bg-gray-50 rounded-xl p-8 flex items-start gap-6 transition-all"
            >
              <div className="text-4xl">{service.icon}</div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <a href="#" className="text-indigo-600 font-medium hover:text-indigo-800 transition-colors">
                  Learn more →
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl p-10 text-center"
        >
          <h3 className="text-3xl font-bold text-white mb-4">Ready to elevate your digital presence?</h3>
          <p className="text-indigo-100 mb-8 text-xl max-w-2xl mx-auto">
            Let's discuss how we can help you achieve your business goals.
          </p>
          <button className="px-8 py-3 bg-white text-indigo-600 font-medium rounded-lg hover:bg-gray-100 transition-colors">
            Schedule a Consultation
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;