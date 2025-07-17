import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Code, ExternalLink, Github, Calendar, Users, Star, Filter } from 'lucide-react';

const ProjectsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedYear, setSelectedYear] = useState('all');

  const projects = [
    {
      title: "EduTrack - Smart Lab Inventory Manager",
      category: "web",
      year: "2025",
      type: "Web Application",
      image: "img/lab.png",
      description: "Developed a comprehensive web-based Smart Lab Inventory Management system designed to streamline lab operations, track equipment, manage chemicals, and handle equipment requests efficiently. The system provides real-time insights into lab resources and user activities.",
      technologies: ["React", "Node.js", "Tailwind CSS","Express.js", "MongoDB", "JavaScript", "HTML", "CSS"],
      features: [
        "Intuitive dashboard for an overview of lab status",
        "Centralized management of all lab materials and equipment",
        "Automated tracking of equipment check-in/check-out",
        "Real-time alerts for overdue items and low stock",
        "User and department management with role-based access",
        "Reporting and analytics on equipment usage and trends",
        "Integrated scanner functionality for quick item lookup"
      ],
      status: "Completed",
      teamSize: 1,
      duration: "2 months",
      githubUrl: "#",
      liveUrl: "#",
      featured: true,
      grade: "N/A"
    },
    {
      title: "Smart Safety Helmet Attachment with Accident Detection and Emergency Alert System",
      category: "embedded-systems",
      year: "2025",
      type: "Mini Project",
      image: "img/helmet.jpg",
      description: "Designed and developed an innovative attachment for traditional safety helmets, capable of detecting accidents and falls, and automatically alerting emergency services with real-time location data. This project enhances wearer safety by providing immediate assistance in critical situations.",
      technologies: ["Arduino Nano", "Accelerometer", "Gyroscope", "GPS Module", "Bluetooth Module", "GSM Module", "Li-ion Battery", "C++"],
      features: [
        "Automatic accident detection via impact and fall sensors",
        "Real-time GPS tracking for accurate location sharing",
        "Instantaneous emergency alerts to pre-defined contacts/services via GSM",
        "Seamless attachment design for compatibility with existing helmets",
        "Low-power consumption for extended operation",
        "Robust sensor integration for reliable performance in various conditions"
      ],
      status: "Prototype Development",
      teamSize: null,
      duration: "Ongoing",
      githubUrl: "#",
      liveUrl: "#",
      featured: true,
      grade: "N/A"
    },
    {
      title: "Precision Line-Following Robot - Team DCRM",
      category: "robotics",
      year: "2024",
      type: "Robotic Project",
      image: "img/13.png",
      description: "Engineered a custom robotic car from scratch for Wayamba University Robotics Competition, combining embedded systems expertise and collaborative problem-solving to excel in competitive line-following challenges.",
      technologies: ["Arduino Mega", "ESP32", "IR Array", "LiDAR", "L298N", "Geared Motors", "C++", "PlatformIO"],
      features: [
        "Custom hardware integration with precision sensors",
        "Real-time adaptive path correction",
        "Sub-millimeter tracking accuracy",
        "Competition-grade stability control",
        "Cross-functional team collaboration"
      ],
      status: "Competition Completed",
      teamSize: 4,
      duration: "5 months",
      githubUrl: "#",
      liveUrl: "#",
      featured: true,
      grade: "Finalist"
    },
    {
      title: "SmartLibrary - Digital Library System",
      category: "web",
      year: "2023",
      type: "Course Project",
      image: "https://images.pexels.com/photos/1370295/pexels-photo-1370295.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Digital library management system with book recommendation engine, QR code integration, and automated fine calculation.",
      technologies: ["Vue.js", "Laravel", "MySQL", "Redis"],
      features: [
        "Book search and filtering",
        "QR code book scanning",
        "Automated fine calculation",
        "Reading recommendations",
        "Admin dashboard"
      ],
      status: "Completed",
      teamSize: 2,
      duration: "3 months",
      githubUrl: "#",
      liveUrl: "#",
      featured: false,
      grade: "A-"
    },
    {
      title: "WeatherWise - Weather Prediction ML Model",
      category: "ai",
      year: "2023",
      type: "Research Project",
      image: "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Machine learning model for weather prediction using historical data and real-time sensor inputs with 85% accuracy.",
      technologies: ["Python", "TensorFlow", "Pandas", "Scikit-learn", "Flask"],
      features: [
        "Historical data analysis",
        "Real-time predictions",
        "Interactive visualizations",
        "API for third-party integration",
        "Mobile-friendly interface"
      ],
      status: "Completed",
      teamSize: 1,
      duration: "5 months",
      githubUrl: "#",
      liveUrl: "#",
      featured: true,
      grade: "A"
    },
    {
      title: "CryptoTracker - Cryptocurrency Portfolio",
      category: "web",
      year: "2022",
      type: "Personal Project",
      image: "https://images.pexels.com/photos/844124/pexels-photo-844124.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Real-time cryptocurrency portfolio tracker with price alerts, news integration, and portfolio analytics.",
      technologies: ["React", "Chart.js", "CoinGecko API", "Firebase"],
      features: [
        "Real-time price tracking",
        "Portfolio management",
        "Price alerts",
        "News integration",
        "Performance analytics"
      ],
      status: "Completed",
      teamSize: 1,
      duration: "2 months",
      githubUrl: "#",
      liveUrl: "#",
      featured: false,
      grade: "Personal"
    },
    {
      title: "ChatBot Assistant - NLP Chatbot",
      category: "ai",
      year: "2023",
      type: "Course Project",
      image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Intelligent chatbot for university inquiries using natural language processing and machine learning.",
      technologies: ["Python", "NLTK", "spaCy", "Flask", "SQLite"],
      features: [
        "Natural language understanding",
        "Context-aware responses",
        "Multi-language support",
        "Learning from interactions",
        "Admin analytics panel"
      ],
      status: "Completed",
      teamSize: 2,
      duration: "3 months",
      githubUrl: "#",
      liveUrl: "#",
      featured: false,
      grade: "A-"
    }
  ];

  const categories = [
    { value: 'all', label: 'All Projects' },
    { value: 'web', label: 'Web Development' },
    { value: 'mobile', label: 'Mobile Apps' },
    { value: 'robotics', label: 'Robotics' },
    { value: 'embedded-systems', label: 'Systems' },
    { value: 'ai', label: 'AI/ML' },
  ];

  const years = [
    { value: 'all', label: 'All Years' },
    { value: '2024', label: '2024' },
    { value: '2023', label: '2023' },
    { value: '2022', label: '2022' },
  ];

  const filteredProjects = projects.filter(project => {
    const matchesCategory = selectedCategory === 'all' || project.category === selectedCategory;
    const matchesYear = selectedYear === 'all' || project.year === selectedYear;
    return matchesCategory && matchesYear;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed': return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'Competition Completed': return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'In Development': return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      case 'Planning': return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      case 'Prototype Development': return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      default: return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'web': return '🌐';
      case 'mobile': return '📱';
      case 'ai': return '🤖';
      case 'robotics': return '🤖';
      case 'embedded-systems': return '🤖';
      default: return '💻';
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-4 bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
            Academic Projects
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl">
            A showcase of my academic and personal projects, demonstrating practical application 
            of computer science concepts and continuous learning.
          </p>
        </div>

        {/* Project Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-dark-800 rounded-xl p-6 text-center border border-gray-700">
            <Code className="w-8 h-8 mx-auto mb-3 text-primary-400" />
            <div className="text-3xl font-bold text-white">{projects.length}</div>
            <div className="text-sm text-gray-400">Total Projects</div>
          </div>
          <div className="bg-dark-800 rounded-xl p-6 text-center border border-gray-700">
            <Star className="w-8 h-8 mx-auto mb-3 text-accent-400" />
            <div className="text-3xl font-bold text-white">{projects.filter(p => p.featured).length}</div>
            <div className="text-sm text-gray-400">Featured Projects</div>
          </div>
          <div className="bg-dark-800 rounded-xl p-6 text-center border border-gray-700">
            <Users className="w-8 h-8 mx-auto mb-3 text-primary-400" />
            <div className="text-3xl font-bold text-white">{projects.filter(p => p.teamSize > 1).length}</div>
            <div className="text-sm text-gray-400">Team Projects</div>
          </div>
          <div className="bg-dark-800 rounded-xl p-6 text-center border border-gray-700">
            <Calendar className="w-8 h-8 mx-auto mb-3 text-accent-400" />
            <div className="text-3xl font-bold text-white">2+</div>
            <div className="text-sm text-gray-400">Years Active</div>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-dark-800 rounded-xl p-6 mb-8 border border-gray-700">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="flex items-center space-x-2">
              <Filter className="text-gray-400" size={20} />
              <span className="text-white font-medium">Filter Projects:</span>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 flex-1">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-2 bg-dark-700 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              >
                {categories.map(category => (
                  <option key={category.value} value={category.value}>{category.label}</option>
                ))}
              </select>
              <select
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
                className="px-4 py-2 bg-dark-700 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              >
                {years.map(year => (
                  <option key={year.value} value={year.value}>{year.label}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Featured Projects */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center space-x-2">
            <Star className="text-primary-400" size={24} />
            <span>Featured Projects</span>
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredProjects.filter(project => project.featured).map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-dark-800 rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-700 hover:border-primary-500/50"
              >
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-2">
                      <span className="text-2xl">{getCategoryIcon(project.category)}</span>
                      <span className="px-3 py-1 bg-primary-500/20 text-primary-400 rounded-full text-sm border border-primary-500/30">
                        {project.type}
                      </span>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-sm border ${getStatusColor(project.status)}`}>
                      {project.status}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-gray-400 mb-2">Key Features:</h4>
                    <ul className="text-sm text-gray-300 space-y-1">
                      {project.features.slice(0, 3).map((feature, idx) => (
                        <li key={idx} className="flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 bg-accent-400 rounded-full"></div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-2 py-1 bg-gray-700/50 text-gray-300 rounded text-xs border border-gray-600"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-gray-700">
                    <div className="flex items-center space-x-4 text-sm text-gray-400">
                      <span className="flex items-center space-x-1">
                        <Users size={14} />
                        <span>{project.teamSize} member{project.teamSize > 1 ? 's' : ''}</span>
                      </span>
                      <span className="flex items-center space-x-1">
                        <Calendar size={14} />
                        <span>{project.duration}</span>
                      </span>
                      {project.grade !== 'Personal' && (
                        <span className="text-green-400 font-medium">Grade: {project.grade}</span>
                      )}
                    </div>
                    <div className="flex space-x-3">
                      <a
                        href={project.githubUrl}
                        className="text-gray-400 hover:text-white transition-colors"
                      >
                        <Github size={18} />
                      </a>
                      <a
                        href={project.liveUrl}
                        className="text-primary-400 hover:text-primary-300 transition-colors"
                      >
                        <ExternalLink size={18} />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* All Projects */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center space-x-2">
            <Code className="text-accent-400" size={24} />
            <span>All Projects</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.filter(project => !project.featured).map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-dark-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-700 hover:border-gray-600"
              >
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-lg">{getCategoryIcon(project.category)}</span>
                    <span className={`px-2 py-1 rounded-full text-xs border ${getStatusColor(project.status)}`}>
                      {project.status}
                    </span>
                  </div>
                  
                  <h3 className="text-lg font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-gray-300 text-sm mb-3 line-clamp-2">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-1 mb-3">
                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-2 py-1 bg-gray-700/50 text-gray-300 rounded text-xs border border-gray-600"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 bg-gray-700/50 text-gray-300 rounded text-xs border border-gray-600">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>
                  
                  <div className="flex items-center justify-between text-xs text-gray-400">
                    <span>{project.year} • {project.teamSize} member{project.teamSize > 1 ? 's' : ''}</span>
                    <div className="flex space-x-2">
                      <a href={project.githubUrl} className="hover:text-white transition-colors">
                        <Github size={14} />
                      </a>
                      <a href={project.liveUrl} className="hover:text-primary-400 transition-colors">
                        <ExternalLink size={14} />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <Code className="mx-auto text-gray-500 mb-4" size={48} />
            <p className="text-gray-500">No projects found matching your criteria.</p>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default ProjectsPage;
