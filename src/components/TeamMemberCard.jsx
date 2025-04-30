import { motion } from 'framer-motion';

export default function TeamMemberCard({ name, role, image, funFact, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
      className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all"
    >
      <img src={image} alt={name} className="w-full h-64 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800">{name}</h3>
        <p className="text-indigo-600 mb-3">{role}</p>
        <div className="bg-gray-50 p-3 rounded-lg">
          <p className="text-sm text-gray-600">
            <span className="font-semibold">Fun Fact:</span> {funFact}
          </p>
        </div>
      </div>
    </motion.div>
  );
}