import { motion } from 'framer-motion';
import { FiMail, FiUser, FiBriefcase, FiUpload, FiLinkedin, FiGithub } from 'react-icons/fi';
import { useForm } from 'react-hook-form';
import emailjs from 'emailjs-com';

const Careers = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    emailjs.send(
      'YOUR_EMAILJS_SERVICE_ID', // Replace with your EmailJS service ID
      'YOUR_EMAILJS_TEMPLATE_ID', // Replace with your EmailJS template ID
      data,
      'YOUR_EMAILJS_USER_ID' // Replace with your EmailJS user ID
    )
    .then((response) => {
      alert('Application submitted successfully!');
      reset();
    }, (error) => {
      alert('Failed to submit, please try again later.');
    });
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <motion.div 
      initial="hidden"
      animate="visible"
      className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-12 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <motion.div 
          variants={fadeIn}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-indigo-600 to-pink-600 bg-clip-text text-transparent">
            Join Our Team
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Help shape the future of digital solutions while growing your career
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Job Openings */}
          <motion.div 
            variants={fadeIn}
            transition={{ delay: 0.2 }}
            className="lg:col-span-2"
          >
            <h2 className="text-2xl font-bold mb-8 text-gray-800">Current Openings</h2>
            
            <div className="space-y-6">
              {[
                {
                  title: "Frontend Developer (React)",
                  type: "Full-time",
                  location: "Bangalore/Remote",
                  description: "We're looking for a skilled React developer to build beautiful, responsive interfaces for our clients."
                },
                {
                  title: "Digital Marketing Specialist",
                  type: "Full-time",
                  location: "Mumbai",
                  description: "Help our clients grow their online presence through strategic campaigns and data-driven marketing."
                },
                {
                  title: "UI/UX Designer",
                  type: "Contract",
                  location: "Remote",
                  description: "Create intuitive user experiences and stunning visual designs for web and mobile applications."
                }
              ].map((job, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5 }}
                  className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all border-l-4 border-indigo-500"
                >
                  <h3 className="text-xl font-bold mb-2 text-gray-800">{job.title}</h3>
                  <div className="flex items-center space-x-4 mb-3">
                    <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm">{job.type}</span>
                    <span className="text-gray-600 flex items-center">
                      <FiMapPin className="mr-1" /> {job.location}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4">{job.description}</p>
                  <button 
                    onClick={() => document.getElementById('application-form').scrollIntoView({ behavior: 'smooth' })}
                    className="text-indigo-600 font-semibold hover:text-indigo-800 transition-colors"
                  >
                    Apply Now →
                  </button>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Culture Highlights */}
          <motion.div 
            variants={fadeIn}
            transition={{ delay: 0.4 }}
            className="space-y-8"
          >
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-xl font-bold mb-4 text-gray-800">Why Work With Us?</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="bg-indigo-100 p-2 rounded-full mr-3">
                    <FiAward className="text-indigo-600" />
                  </div>
                  <span>Competitive salaries and performance bonuses</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-indigo-100 p-2 rounded-full mr-3">
                    <FiUsers className="text-indigo-600" />
                  </div>
                  <span>Flexible work arrangements (remote/hybrid)</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-indigo-100 p-2 rounded-full mr-3">
                    <FiTrendingUp className="text-indigo-600" />
                  </div>
                  <span>Continuous learning and growth opportunities</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-indigo-100 p-2 rounded-full mr-3">
                    <FiSmile className="text-indigo-600" />
                  </div>
                  <span>Vibrant company culture and team events</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl shadow-md p-6 text-white">
              <h3 className="text-xl font-bold mb-4">Our Hiring Process</h3>
              <ol className="space-y-4 list-decimal list-inside">
                <li>Initial application review (1-3 days)</li>
                <li>Phone screening (30 mins)</li>
                <li>Technical/case study assignment</li>
                <li>Interview with team members</li>
                <li>Offer and onboarding</li>
              </ol>
            </div>
          </motion.div>
        </div>

        {/* Application Form */}
        <motion.div
          id="application-form"
          variants={fadeIn}
          transition={{ delay: 0.6 }}
          className="mt-24 bg-white rounded-2xl shadow-xl p-8 max-w-4xl mx-auto"
        >
          <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Submit Your Application</h2>
          
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name *
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FiUser className="text-gray-400" />
                  </div>
                  <input
                    type="text"
                    id="name"
                    {...register("name", { required: "Name is required" })}
                    className="pl-10 w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    placeholder="Your name"
                  />
                </div>
                {errors.name && (
                  <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email *
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FiMail className="text-gray-400" />
                  </div>
                  <input
                    type="email"
                    id="email"
                    {...register("email", { 
                      required: "Email is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid email address"
                      }
                    })}
                    className="pl-10 w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    placeholder="your.email@example.com"
                  />
                </div>
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  {...register("phone")}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  placeholder="+91 9876543210"
                />
              </div>

              <div>
                <label htmlFor="position" className="block text-sm font-medium text-gray-700 mb-1">
                  Position Applying For *
                </label>
                <select
                  id="position"
                  {...register("position", { required: "Position is required" })}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                >
                  <option value="">Select a position</option>
                  <option value="Frontend Developer (React)">Frontend Developer (React)</option>
                  <option value="Digital Marketing Specialist">Digital Marketing Specialist</option>
                  <option value="UI/UX Designer">UI/UX Designer</option>
                  <option value="Other">Other</option>
                </select>
                {errors.position && (
                  <p className="mt-1 text-sm text-red-600">{errors.position.message}</p>
                )}
              </div>
            </div>

            <div>
              <label htmlFor="linkedin" className="block text-sm font-medium text-gray-700 mb-1">
                LinkedIn Profile
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FiLinkedin className="text-gray-400" />
                </div>
                <input
                  type="url"
                  id="linkedin"
                  {...register("linkedin")}
                  className="pl-10 w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  placeholder="https://linkedin.com/in/yourprofile"
                />
              </div>
            </div>

            <div>
              <label htmlFor="github" className="block text-sm font-medium text-gray-700 mb-1">
                GitHub/Portfolio (if applicable)
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FiGithub className="text-gray-400" />
                </div>
                <input
                  type="url"
                  id="github"
                  {...register("github")}
                  className="pl-10 w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  placeholder="https://github.com/yourusername"
                />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Cover Letter *
              </label>
              <textarea
                id="message"
                rows={5}
                {...register("message", { required: "Cover letter is required" })}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                placeholder="Tell us why you'd be a great fit..."
              />
              {errors.message && (
                <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="resume" className="block text-sm font-medium text-gray-700 mb-1">
                Upload Resume/CV * (PDF only)
              </label>
              <div className="flex items-center">
                <label className="flex flex-col items-center px-4 py-6 bg-white rounded-lg border border-dashed border-gray-300 cursor-pointer hover:bg-gray-50">
                  <FiUpload className="text-gray-500 text-2xl mb-2" />
                  <span className="text-sm text-gray-600">Click to upload</span>
                  <input 
                    type="file" 
                    id="resume"
                    accept=".pdf"
                    {...register("resume", { required: "Resume is required" })}
                    className="hidden" 
                  />
                </label>
                <span className="ml-4 text-sm text-gray-500">Max. 5MB</span>
              </div>
              {errors.resume && (
                <p className="mt-1 text-sm text-red-600">{errors.resume.message}</p>
              )}
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full bg-gradient-to-r from-indigo-600 to-pink-600 text-white py-3 px-6 rounded-lg font-semibold hover:shadow-lg transition-all"
            >
              Submit Application
            </motion.button>
          </form>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Careers;