import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import { motion, useInView } from 'framer-motion';
import heroImg from '../assets/hero-image.jpeg';
import service1 from '../assets/Graphic.png';
import service2 from '../assets/Websitedevelopment.jpeg';
import service3 from '../assets/Seo.jpeg';
import service4 from '../assets/Social.jpeg';
import service5 from '../assets/Googleads.jpeg';

// Animation variants
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const fadeIn = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.8 } }
};

const scaleUp = {
  hidden: { scale: 0.9, opacity: 0 },
  show: { scale: 1, opacity: 1, transition: { duration: 0.5 } }
};

function Home() {
  const ref = useRef();
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const services = [
    { 
      title: "Graphic Designing", 
      color: "from-pink-500 to-red-500",
      icon: service1,
      description: "Stunning visuals that capture your brand essence"

    },
    { 
      title: "Website Development", 
      color: "from-blue-500 to-indigo-500",
      icon: service2,
      description: "Responsive, fast, and conversion-optimized websites"
    },
    { 
      title: "SEO", 
      color: "from-green-500 to-emerald-500",
      icon: service3,
      description: "Higher rankings and organic traffic growth"
    },
    { 
      title: "Social Media Management", 
      color: "from-purple-500 to-pink-500",
      icon: service4,
      description: "Engaging content that grows your audience"
    },
    { 
      title: "Google Ads", 
      color: "from-yellow-400 to-orange-500",
      icon: service5,
      description: "Targeted campaigns that drive conversions"
    },
  ];

  return (
    <main className="min-h-screen bg-white text-gray-800 overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex flex-col md:flex-row items-center justify-center px-6 text-center bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 text-white">
        {/* Background animation */}
        <div className="absolute inset-0 overflow-hidden">
          <Canvas>
            <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
            <Stars radius={50} count={2000} factor={4} fade speed={1} />
          </Canvas>
        </div>
        
        <div className="relative z-10 max-w-2xl mb-6 md:mb-0 md:mr-10">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Empower Your Brand <span className="text-yellow-300">Digitally</span> 🚀
            </h1>
            <motion.p 
              className="text-xl md:text-2xl mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Websites, Social Media, SEO, Google Ads & More!
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row justify-center gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <Link 
                to="/contact" 
                className="bg-white text-indigo-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition transform hover:scale-105 shadow-lg"
              >
                Get Started
              </Link>
              <Link 
                to="/services" 
                className="border-2 border-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-indigo-600 transition transform hover:scale-105 shadow-lg"
              >
                Explore Services
              </Link>
            </motion.div>
          </motion.div>
        </div>
        
        <motion.img 
          src={heroImg} 
          alt="Digital Services" 
          className="relative z-10 w-64 md:w-96 rounded-xl shadow-2xl"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          whileHover={{ scale: 1.05 }}
        />
      </section>

      {/* About Section */}
      <section className="py-28 px-6 max-w-5xl mx-auto text-center" ref={ref}>
        {isInView && (
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
          >
            <motion.h2 
              className="text-4xl font-bold mb-6 bg-gradient-to-r from-indigo-600 to-pink-500 bg-clip-text text-transparent"
              variants={item}
            >
              Who We Are
            </motion.h2>
            <motion.p 
              className="text-gray-600 text-xl leading-relaxed"
              variants={item}
            >
              Digital Vraddhi is your creative partner for growth. We provide end-to-end digital solutions to elevate your brand's online presence and drive results that matter.
            </motion.p>
            
            <motion.div 
              className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6"
              variants={container}
            >
              {[100, 200, 50, 300].map((num, idx) => (
                <motion.div 
                  key={idx}
                  className="bg-white p-6 rounded-xl shadow-lg border border-gray-100"
                  variants={item}
                  whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0,0,0,0.1)" }}
                >
                  <div className="text-3xl font-bold text-indigo-600 mb-2">+{num}%</div>
                  <div className="text-gray-500">Client Growth</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        )}
      </section>

      {/* Services Preview */}
      <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.2 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-indigo-600 to-pink-500 bg-clip-text text-transparent">Our Services</h2>
            <p className="text-gray-600 text-xl max-w-2xl mx-auto">Comprehensive digital solutions tailored to your business needs</p>
          </motion.div>
          
          <motion.div 
            className="grid gap-8 md:grid-cols-3 lg:grid-cols-5"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            {services.map((service, idx) => (
              <motion.div 
                key={idx} 
                variants={scaleUp}
                whileHover={{ y: -10 }}
                className={`bg-gradient-to-br ${service.color} text-white p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all`}
              >
                <div className="bg-white/20 rounded-full w-16 h-16 flex items-center justify-center mb-4 mx-auto">
                  <img src={service.icon} alt={service.title} className="w-10 h-10 object-contain" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-sm opacity-90">{service.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-28 px-6 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.2 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-indigo-600 to-pink-500 bg-clip-text text-transparent">Why Choose Us?</h2>
        </motion.div>
        
        <motion.ul 
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 text-lg"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {[
            { text: "Experienced Team", emoji: "👨‍💻" },
            { text: "Creative Solutions", emoji: "🎨" },
            { text: "Result-Driven Approach", emoji: "📈" },
            { text: "Affordable Pricing", emoji: "💰" },
          ].map((feature, idx) => (
            <motion.li 
              key={idx}
              variants={item}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow flex items-center"
              whileHover={{ scale: 1.03 }}
            >
              <span className="text-3xl mr-4">{feature.emoji}</span>
              <span>{feature.text}</span>
            </motion.li>
          ))}
        </motion.ul>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 bg-indigo-50">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.2 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4 text-indigo-600">What Our Clients Say</h2>
          </motion.div>
          
          <motion.div
            className="bg-white p-8 rounded-2xl shadow-lg relative"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="text-5xl absolute top-4 left-4 text-indigo-100">"</div>
            <p className="text-gray-700 text-lg italic mb-6 pl-8">
              Digital Vraddhi transformed our online presence completely. Our website traffic increased by 300% within just 3 months of working with them. Highly recommended!
            </p>
            <div className="flex items-center">
              <div className="w-12 h-12 rounded-full bg-indigo-500 mr-4"></div>
              <div>
                <div className="font-semibold">Sarah Johnson</div>
                <div className="text-gray-500 text-sm">CEO, TechStart Inc.</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center py-28 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2 className="text-4xl font-bold mb-8">Ready to grow your business digitally?</h2>
          <Link 
            to="/contact" 
            className="inline-block bg-white text-indigo-600 px-10 py-4 rounded-full font-semibold hover:bg-gray-100 transition transform hover:scale-105 shadow-lg text-lg"
          >
            Let's Talk
          </Link>
          <p className="mt-6 opacity-90">Get a free consultation today!</p>
        </motion.div>
      </section>
    </main>
  );
}

export default Home;