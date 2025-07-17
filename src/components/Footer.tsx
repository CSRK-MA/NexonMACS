import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Linkedin, Heart, ExternalLink, GraduationCap, Code, Atom, Bot } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'Student Profile', path: '/student' },
    { name: 'Developer Portfolio', path: '/developer' },
    { name: 'Contact', path: '/developer/contact' }
  ];

  const studentLinks = [
    { name: 'About Me', path: '/student' },
    { name: 'Academics', path: '/student/academics' },
    { name: 'Projects', path: '/student/projects' },
    { name: 'Achievements', path: '/student/achievements' }
  ];

  const developerLinks = [
    { name: 'Portfolio', path: '/developer' },
    { name: 'Services', path: '/developer/services' },
    { name: 'Case Studies', path: '/developer/case-studies' },
    { name: 'Contact', path: '/developer/contact' }
  ];

  const interests = [
    { name: 'Material Science', icon: Atom },
    { name: 'Nanotechnology', icon: GraduationCap },
    { name: 'Robotics', icon: Bot },
    { name: 'Innovation', icon: Code }
  ];

  return (
    <footer className="bg-dark-950 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-primary-500 to-accent-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">SK</span>
              </div>
              <h3 className="text-lg font-bold text-white">NexonMACS</h3>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Material & Nano Science Technology student at Wayamba University, passionate about 
              bridging nanoscience with digital innovation, robotics, and cutting-edge technology.
            </p>
            <div className="flex space-x-4">
              <a
                href="mailto:nexonmacs@gmail.com"
                className="text-gray-400 hover:text-primary-400 transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
              <a
                href="https://github.com/CSRK-MA"
                className="text-gray-400 hover:text-primary-400 transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com/in/shehan-r-kumara"
                className="text-gray-400 hover:text-primary-400 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-white">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-primary-400 transition-colors text-sm flex items-center space-x-2"
                  >
                    <span>•</span>
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Student Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-white flex items-center space-x-2">
              <GraduationCap size={18} className="text-primary-400" />
              <span>Academic</span>
            </h3>
            <ul className="space-y-2">
              {studentLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-primary-400 transition-colors text-sm flex items-center space-x-2"
                  >
                    <span>•</span>
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Developer Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-white flex items-center space-x-2">
              <Code size={18} className="text-accent-400" />
              <span>Developer</span>
            </h3>
            <ul className="space-y-2">
              {developerLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-accent-400 transition-colors text-sm flex items-center space-x-2"
                  >
                    <span>•</span>
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Interests Section */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <h3 className="text-lg font-bold text-white mb-6 text-center">Areas of Interest</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {interests.map((interest, index) => {
              const Icon = interest.icon;
              return (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="bg-dark-800 rounded-lg p-4 text-center border border-gray-700 hover:border-primary-500/50 transition-all"
                >
                  <Icon className="w-6 h-6 mx-auto mb-2 text-primary-400" />
                  <span className="text-gray-300 text-sm font-medium">{interest.name}</span>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Contact Info */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start space-x-3">
              <Mail className="w-5 h-5 text-primary-400" />
              <div>
                <p className="text-white font-medium">Email</p>
                <p className="text-gray-400 text-sm">nexonmacs@gmail.com</p>
              </div>
            </div>
            <div className="flex items-center justify-center md:justify-start space-x-3">
              <Phone className="w-5 h-5 text-primary-400" />
              <div>
                <p className="text-white font-medium">Phone</p>
                <p className="text-gray-400 text-sm">+94 70 363 1463</p>
              </div>
            </div>
            <div className="flex items-center justify-center md:justify-start space-x-3">
              <MapPin className="w-5 h-5 text-primary-400" />
              <div>
                <p className="text-white font-medium">Location</p>
                <p className="text-gray-400 text-sm">Gampaha, Sri Lanka</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              <span>© {currentYear} NexonMACS. 2025</span>
            </div>
            <div className="flex items-center space-x-6 text-sm">
              <Link to="/student" className="text-gray-400 hover:text-primary-400 transition-colors">
                Academic Profile
              </Link>
              <Link to="/developer" className="text-gray-400 hover:text-accent-400 transition-colors">
                Developer Portfolio
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;