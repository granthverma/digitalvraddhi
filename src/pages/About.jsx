import { motion } from 'framer-motion';
import { FiAward, FiUsers, FiSmile, FiTrendingUp } from 'react-icons/fi';
import TeamMemberCard from '../components/TeamMemberCard'; 

const About = () => {
  const stats = [
    { value: '150+', label: 'Projects Completed', icon: <FiAward className="text-3xl" /> },
    { value: '80+', label: 'Happy Clients', icon: <FiUsers className="text-3xl" /> },
    { value: '95%', label: 'Client Retention', icon: <FiSmile className="text-3xl" /> },
    { value: '300%', label: 'Growth', icon: <FiTrendingUp className="text-3xl" /> }
  ];

  const team = [
    { name: 'Aarav Sharma', role: 'Founder & CEO', image: '/team/aarav.jpg', funFact: 'Loves brewing specialty coffee' },
    { name: 'Priya Patel', role: 'Creative Director', image: '/team/priya.jpg', funFact: 'Former professional painter' },
    { name: 'Rohan Verma', role: 'Tech Lead', image: '/team/rohan.jpg', funFact: 'Competitive chess player' },
    { name: 'Neha Gupta', role: 'Marketing Head', image: '/team/neha.jpg', funFact: 'Traveled to 15 countries' }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-gradient-to-b from-gray-50 to-white"
    >
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-600 opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h1 
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-6"
            >
              Our Story
            </motion.h1>
            <motion.p
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              From a small startup to a leading digital agency - our journey of passion, innovation, and relentless pursuit of excellence.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-16">Our Journey</h2>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-1/2 h-full w-1 bg-gradient-to-b from-indigo-400 to-purple-600"></div>
            
            {/* Timeline items */}
            <div className="space-y-16">
              {[
                { 
                  year: '2018', 
                  title: 'Founded in Bangalore', 
                  description: 'Started with just 3 people in a small coworking space, focusing on web design for local businesses.',
                  direction: 'left'
                },
                { 
                  year: '2020', 
                  title: 'First Major Client', 
                  description: 'Landed our first enterprise client, helping them revamp their digital presence which increased their sales by 40%.',
                  direction: 'right'
                },
                { 
                  year: '2022', 
                  title: 'Expanded Services', 
                  description: 'Added full-service digital marketing capabilities and grew our team to 15 specialists.',
                  direction: 'left'
                },
                { 
                  year: '2023', 
                  title: 'Award Winning', 
                  description: 'Recognized as "Emerging Digital Agency of the Year" by the National Business Awards.',
                  direction: 'right'
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: item.direction === 'left' ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true, margin: "-100px" }}
                  className={`relative md:flex ${item.direction === 'left' ? 'md:justify-start' : 'md:justify-end'}`}
                >
                  <div className={`md:w-1/2 p-6 rounded-2xl shadow-lg bg-white ${item.direction === 'left' ? 'md:mr-8' : 'md:ml-8'}`}>
                    <div className="absolute -top-4 left-6 bg-indigo-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      {item.year}
                    </div>
                    <h3 className="text-xl font-bold mt-6 mb-2 text-gray-800">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-16">Our Core Values</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Innovation First",
                description: "We constantly push boundaries and explore new technologies to deliver cutting-edge solutions.",
                icon: "💡"
              },
              {
                title: "Client-Centric",
                description: "Your success is our success. We listen, adapt, and go the extra mile for every client.",
                icon: "❤️"
              },
              {
                title: "Transparency",
                description: "Honest communication and clear processes are at the heart of everything we do.",
                icon: "🔍"
              },
              {
                title: "Collaborative",
                description: "We believe the best results come from teamwork - both within our team and with our clients.",
                icon: "🤝"
              },
              {
                title: "Sustainable Growth",
                description: "We build solutions designed to scale with your business for long-term success.",
                icon: "🌱"
              },
              {
                title: "Fun & Passion",
                description: "We love what we do, and that enthusiasm shows in our work and relationships.",
                icon: "🎉"
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10 }}
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all"
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-4">Meet The Team</h2>
          <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
            The brilliant minds behind Digital Vraddhi's success
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <TeamMemberCard 
                key={index}
                name={member.name}
                role={member.role}
                image={member.image}
                funFact={member.funFact}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-6"
              >
                <div className="flex justify-center mb-4">
                  <div className="bg-white/20 p-4 rounded-full">
                    {stat.icon}
                  </div>
                </div>
                <div className="text-4xl font-bold mb-2">{stat.value}</div>
                <div className="text-lg">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Want to be part of our story?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Whether you're looking to work with us or join our team, we'd love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/contact"
              className="bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
            >
              Contact Us
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/careers"
              className="border-2 border-indigo-600 text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-indigo-50 transition-colors"
            >
              Join Our Team
            </motion.a>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default About;