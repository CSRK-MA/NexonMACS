import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { GraduationCap, Code, ArrowRight, Award, Users, Globe, Download, Github, Linkedin, Mail, Atom, Microscope, Zap, Star, ChevronDown, Bot, Lightbulb } from 'lucide-react';
import ParticleBackground from './ParticleBackground';

const LandingPage: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const skills = [
    { name: "Material Science", icon: Atom, color: "text-blue-400" },
    { name: "Nanotechnology", icon: Microscope, color: "text-purple-400" },
    { name: "Robotics", icon: Bot, color: "text-green-400" },
    { name: "Innovation", icon: Lightbulb, color: "text-yellow-400" },
    { name: "Web Development", icon: Code, color: "text-cyan-400" },
    { name: "Research", icon: Star, color: "text-pink-400" }
  ];

  const achievements = [
    { number: "--", label: "Current GPA", icon: Award },
    { number: "15+", label: "Projects", icon: Code },
    { number: "2", label: "Years Learning", icon: GraduationCap },
    { number: "8+", label: "Technologies", icon: Zap }
  ];

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-dark-950 via-dark-900 to-primary-950">
      <ParticleBackground />
      
      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Hero Section */}
        <div className="flex-1 flex items-center justify-center px-4 py-24">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center max-w-6xl mx-auto"
          >
            {/* Profile Image with Advanced Styling */}
            <motion.div
              variants={itemVariants}
              className="mb-8 relative"
            >
              <motion.div
                variants={floatingVariants}
                animate="animate"
                className="relative inline-block"
              >
                <div className="w-48 h-48 sm:w-56 sm:h-56 mx-auto rounded-full bg-gradient-to-br from-primary-400 via-accent-400 to-purple-500 p-1 shadow-2xl">
                  <div className="w-full h-full rounded-full overflow-hidden border-4 border-dark-800 relative">
                    <img 
                      src="img/12.png"
                      alt="Shehan R. Kumara"
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        // Fallback to placeholder if Google Photos link fails
                        e.currentTarget.style.display = 'none';
                        e.currentTarget.nextElementSibling?.classList.remove('hidden');
                      }}
                    />
                    <div className="hidden w-full h-full bg-gradient-to-br from-dark-800 to-dark-700 flex items-center justify-center">
                      <div className="text-center">
                        <GraduationCap className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-2 text-primary-400" />
                        <span className="text-gray-300 text-sm font-medium">Shehan R. Kumara</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Floating Icons */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute -top-4 -right-4 w-10 h-10 sm:w-12 sm:h-12 bg-blue-500/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-blue-500/30"
                >
                  <Atom className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400" />
                </motion.div>
                
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                  className="absolute -bottom-4 -left-4 w-10 h-10 sm:w-12 sm:h-12 bg-purple-500/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-purple-500/30"
                >
                  <Microscope className="w-5 h-5 sm:w-6 sm:h-6 text-purple-400" />
                </motion.div>

                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                  className="absolute top-1/2 -left-12 w-10 h-10 sm:w-12 sm:h-12 bg-green-500/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-green-500/30"
                >
                  <Bot className="w-5 h-5 sm:w-6 sm:h-6 text-green-400" />
                </motion.div>

                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                  className="absolute top-1/2 -right-10 w-10 h-10 sm:w-12 sm:h-12 bg-yellow-500/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-yellow-500/30"
                >
                  <Code className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-400" />
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Enhanced Title Section */}
            <motion.div variants={itemVariants} className="mb-6">
              <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white mb-4 bg-gradient-to-r from-primary-400 via-accent-400 to-purple-500 bg-clip-text text-transparent">
                Shehan R. Kumara
              </h1>
              <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4 text-lg sm:text-xl md:text-3xl text-gray-300 mb-4 font-inter">
                <span className="text-center">Material & Nano Science Student</span>
                <span className="hidden md:inline text-primary-400">•</span>
                <span className="text-center">Web Developer</span>
              </div>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg md:text-xl text-gray-400 mb-8 font-inter max-w-3xl mx-auto px-4"
            >
              Wayamba University of Sri Lanka • Bridging Nanoscience, Robotics & Digital Innovation
            </motion.p>

            {/* Skills Showcase */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 mb-12 max-w-5xl mx-auto px-4"
            >
              {skills.map((skill, index) => {
                const Icon = skill.icon;
                return (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="bg-dark-800/50 backdrop-blur-sm rounded-xl p-3 sm:p-4 border border-gray-700 hover:border-primary-500/50 transition-all duration-300"
                  >
                    <Icon className={`w-6 h-6 sm:w-8 sm:h-8 mx-auto mb-2 ${skill.color}`} />
                    <p className="text-white text-xs sm:text-sm font-medium text-center">{skill.name}</p>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* Social Links with Enhanced Design */}
            <motion.div
              variants={itemVariants}
              className="flex justify-center space-x-4 sm:space-x-6 mb-12"
            >
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                href="mailto:nexonmacs@gmail.com"
                className="p-3 sm:p-4 bg-dark-800/70 backdrop-blur-sm rounded-full hover:bg-primary-600/20 transition-all duration-300 transform border border-gray-700 hover:border-primary-500 group"
              >
                <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-gray-300 group-hover:text-primary-400 transition-colors" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                href="https://github.com/CSRK-MA"
                className="p-3 sm:p-4 bg-dark-800/70 backdrop-blur-sm rounded-full hover:bg-gray-700/50 transition-all duration-300 transform border border-gray-700 hover:border-gray-500 group"
              >
                <Github className="w-5 h-5 sm:w-6 sm:h-6 text-gray-300 group-hover:text-white transition-colors" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                href="https://linkedin.com/in/shehan-r-kumara"
                className="p-3 sm:p-4 bg-dark-800/70 backdrop-blur-sm rounded-full hover:bg-blue-600/20 transition-all duration-300 transform border border-gray-700 hover:border-blue-500 group"
              >
                <Linkedin className="w-5 h-5 sm:w-6 sm:h-6 text-gray-300 group-hover:text-blue-400 transition-colors" />
              </motion.a>
            </motion.div>

            {/* Enhanced Profile Selection Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col lg:flex-row gap-4 sm:gap-6 justify-center items-center mb-16 px-4"
            >
              <Link
                to="/student"
                className="group relative overflow-hidden bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-500 hover:to-primary-600 text-white px-6 sm:px-10 py-6 sm:py-8 rounded-2xl shadow-2xl hover:shadow-primary-500/25 transition-all duration-300 transform hover:scale-105 w-full lg:w-auto border border-primary-500/30"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative flex items-center justify-center space-x-3 sm:space-x-4">
                  <div className="p-2 sm:p-3 bg-white/10 rounded-full group-hover:bg-white/20 transition-colors">
                    <GraduationCap size={24} className="sm:w-8 sm:h-8 group-hover:animate-bounce" />
                  </div>
                  <div className="text-left">
                    <div className="font-bold text-lg sm:text-xl">🎓 Academic Journey</div>
                    <div className="text-sm opacity-90">Material Science • Research • Achievements</div>
                  </div>
                  <ArrowRight size={20} className="sm:w-6 sm:h-6 group-hover:translate-x-2 transition-transform" />
                </div>
              </Link>

              <Link
                to="/developer"
                className="group relative overflow-hidden bg-gradient-to-r from-accent-600 to-accent-700 hover:from-accent-500 hover:to-accent-600 text-white px-6 sm:px-10 py-6 sm:py-8 rounded-2xl shadow-2xl hover:shadow-accent-500/25 transition-all duration-300 transform hover:scale-105 w-full lg:w-auto border border-accent-500/30"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-accent-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative flex items-center justify-center space-x-3 sm:space-x-4">
                  <div className="p-2 sm:p-3 bg-white/10 rounded-full group-hover:bg-white/20 transition-colors">
                    <Code size={24} className="sm:w-8 sm:h-8 group-hover:animate-pulse" />
                  </div>
                  <div className="text-left">
                    <div className="font-bold text-lg sm:text-xl">💻 Developer Portfolio</div>
                    <div className="text-sm opacity-90">Projects • Services • Case Studies</div>
                  </div>
                  <ArrowRight size={20} className="sm:w-6 sm:h-6 group-hover:translate-x-2 transition-transform" />
                </div>
              </Link>
            </motion.div>

            {/* Quick Actions */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center mb-8 px-4"
            >
              <motion.button
                onClick={() => {
                const link = document.createElement('a');
                link.href = '/src/img/Sample_My_CV.pdf';
                link.download = 'Sample My CV.pdf';
                link.click();
              }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center space-x-2 bg-dark-800/70 backdrop-blur-sm hover:bg-dark-700 text-white px-4 sm:px-6 py-3 rounded-lg transition-all duration-300 border border-gray-700 hover:border-gray-500"
              >
                <Download size={18} />
                <span>Download CV</span>
              </motion.button>
              <Link
                to="/developer/contact"
                className="flex items-center justify-center space-x-2 bg-transparent hover:bg-primary-600/20 text-primary-400 hover:text-primary-300 px-4 sm:px-6 py-3 rounded-lg transition-all duration-300 border border-primary-500 hover:border-primary-400"
              >
                <Mail size={18} />
                <span>Get In Touch</span>
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Enhanced Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="px-4 pb-20"
        >
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
              {achievements.map((achievement, index) => {
                const Icon = achievement.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.2 + index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="text-center p-4 sm:p-6 bg-dark-800/50 backdrop-blur-sm rounded-xl border border-gray-700 hover:border-primary-500/50 transition-all duration-300 group"
                  >
                    <Icon className="w-6 h-6 sm:w-8 sm:h-8 mx-auto mb-3 text-primary-400 group-hover:text-accent-400 transition-colors" />
                    <div className="text-2xl sm:text-3xl font-bold text-white mb-1 bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
                      {achievement.number}
                    </div>
                    <div className="text-xs sm:text-sm text-gray-400">{achievement.label}</div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-gray-400 hover:text-primary-400 transition-colors cursor-pointer"
          >
            <ChevronDown size={24} />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default LandingPage;
