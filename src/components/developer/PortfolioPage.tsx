import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Code, Zap, Users, Award, Filter, Search, Star, Calendar, TrendingUp, Eye, Heart, MessageSquare } from 'lucide-react';

const PortfolioPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [viewMode, setViewMode] = useState('grid'); // grid or list

  const projects = [
    {
      title: "Ceylon Clening Pro",
      category: "web",
      type: "Business Website",
      image: "img/cclen.png",
      description: "Professional office cleaning service with sanitization, maintenance scheduling, and quality assurance systems.",
      longDescription: "A comprehensive office cleaning solution with eco-friendly products, advanced sanitization protocols, flexible scheduling system, and detailed quality tracking for both daily maintenance and deep cleaning services.",
      technologies: ["Eco-friendly Products", "HEPA Vacuums", "Steam Cleaning", "UV Sanitization", "Quality Control App"],
      features: ["Daily Cleaning", "Deep Sanitization", "Flexible Scheduling", "Quality Assurance", "Eco-friendly Products", "24/7 Support"],
      liveUrl: "https://csrk-ma.github.io/CeylonClean-Pro/",
      githubUrl: "https://csrk-ma.github.io/CeylonClean-Pro/",
      featured: true,
      status: "Active",
      duration: "7 days",
      year: "2024",
      client: "Clening Service",
      views: 850,
      likes: 92,
      comments: 24,
      metrics: {
        performance: 95,
        accessibility: 99,
        seo: 88,
        bestPractices: 97
      }
    },
    {
      title: "EduTrack - Smart Lab Inventory Manager",
      category: "web-development",
      type: "Web Application",
      image: "img/lab.png",
      description: "A comprehensive web-based system designed to streamline lab operations and inventory management for educational and research institutions.",
      longDescription: "EduTrack is a full-featured Smart Lab Inventory Management system developed to centralize and automate the tracking of laboratory equipment, chemicals, and materials. It provides a user-friendly dashboard for real-time insights, efficient equipment check-in/out processes, automated alerts, and robust reporting, significantly enhancing operational efficiency and resource utilization in educational and research environments.",
      technologies: ["React", "Node.js","Tailwind CSS", "Express.js", "MongoDB", "JavaScript", "HTML", "CSS", "RESTful API"],
      features: [
        "Real-time Lab Dashboard & Overview",
        "Chemical Inventory Tracking",
        "Detailed Reporting & Analytics",
        "Check-in/out with Scanner Support",
        "Automated Alerts (Low Stock, Overdue, Maintenance)",
        "Centralized Requests & Email Management",
        "User & Department Management (RBAC)",
        "Multi-lab Scalability"],
      liveUrl: "https://csrk-ma.github.io/EduTrack/",
      githubUrl: "https://csrk-ma.github.io/EduTrack/",
      featured: true,
      status: "Live",
      duration: "2 months",
      year: "2025",
      client: "University",
      views: 892,
      likes: 56,
      comments: 14,
      metrics: {
        performance: 94,
        accessibility: 96,
        seo: 85,
        bestPractices: 95
      }
    },
    {
      title: "SecureVault - Robust Password Manager",
      category: "web-application",
      type: "Security Software",
      image: "img/securevault.png",
      description: "An intuitive and highly secure application for centralizing password management, offering robust encryption and security insights.",
      longDescription: "SecureVault is a comprehensive web-based (or desktop-based, specify which) application designed to address the challenges of managing multiple digital credentials securely. It features end-to-end encryption for all stored data, categorized item organization (logins, notes, cards, identities), and a unique 'Security Report' that actively identifies and alerts users about weak or reused passwords, promoting stronger digital hygiene. The user-friendly interface ensures seamless navigation and efficient management of sensitive information.",
      technologies: ["React", "Node.js", "Express.js", "MongoDB", "JavaScript", "HTML", "CSS", "RESTful API", "Encryption Libraries", "Authentication"],
      features: [
        "End-to-End Encryption",
        "Categorized Item Storage",
        "Security Report ",
        "Password Generator",
        "Search & Filtering Capabilities",
        "User Authentication & Authorization",
        "Responsive User Interface",
        "Cross-Platform Compatibility (if applicable)"
      ],
      liveUrl: "https://csrk-ma.github.io/SecureVault/",
      githubUrl: "https://csrk-ma.github.io/SecureVault/",
      featured: true,
      status: "Development",
      duration: "3 months",
      year: "2025",
      client: "Personal Project",
      views: 237,
      likes: 67,
      comments: 33,
      metrics: {
        performance: 90,
        accessibility: 92,
        seo: 75,
        bestPractices: 93
      }
    },
    {
      title: "E-Commerce Platform",
      category: "web",
      type: "Full-Stack",
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Full-featured e-commerce platform with payment integration, inventory management, and admin dashboard.",
      longDescription: "A comprehensive e-commerce solution built with modern technologies. Features include real-time inventory tracking, secure payment processing, advanced analytics, and a powerful admin dashboard. The platform handles thousands of products and supports multiple payment gateways.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "AWS", "Redis"],
      features: ["Payment Gateway", "Inventory Management", "Admin Dashboard", "Mobile Responsive", "Real-time Analytics", "Multi-vendor Support"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
      status: "Live",
      duration: "3 months",
      year: "2024",
      client: "TechCorp Electronics",
      views: 1250,
      likes: 89,
      comments: 23,
      metrics: {
        performance: 95,
        accessibility: 98,
        seo: 92,
        bestPractices: 96
      }
    },
    {
      title: "Healthcare Management System",
      category: "web",
      type: "Custom Software",
      image: "https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Comprehensive healthcare management system for hospitals with patient records, appointment scheduling, and billing.",
      longDescription: "A complete healthcare management solution designed for modern medical facilities. Includes patient management, appointment scheduling, electronic health records, billing integration, and telemedicine capabilities.",
      technologies: ["Vue.js", "Laravel", "MySQL", "Docker", "WebRTC"],
      features: ["Patient Records", "Appointment Scheduling", "Billing System", "Reports", "Telemedicine", "Mobile App"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
      status: "Live",
      duration: "4 months",
      year: "2024",
      client: "HealthPlus Medical Center",
      views: 980,
      likes: 67,
      comments: 15,
      metrics: {
        performance: 93,
        accessibility: 99,
        seo: 88,
        bestPractices: 94
      }
    },
    {
      title: "Real Estate Portal",
      category: "web",
      type: "Business Website",
      image: "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Modern real estate portal with property listings, virtual tours, and lead management system.",
      longDescription: "An innovative real estate platform featuring advanced property search, virtual reality tours, mortgage calculators, and comprehensive lead management for real estate professionals.",
      technologies: ["Next.js", "PostgreSQL", "Prisma", "Tailwind CSS", "Three.js"],
      features: ["Property Listings", "Virtual Tours", "Lead Management", "Search Filters", "Mortgage Calculator", "Agent Portal"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
      status: "Live",
      duration: "2 months",
      year: "2023",
      client: "Prime Properties",
      views: 756,
      likes: 45,
      comments: 12,
      metrics: {
        performance: 91,
        accessibility: 95,
        seo: 94,
        bestPractices: 92
      }
    },
    {
      title: "Restaurant Chain Website",
      category: "web",
      type: "Business Website",
      image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Multi-location restaurant website with online ordering, reservation system, and loyalty program.",
      longDescription: "A complete restaurant chain solution featuring online ordering, table reservations, loyalty programs, menu management, and multi-location support with centralized administration.",
      technologies: ["WordPress", "WooCommerce", "Custom PHP", "MySQL"],
      features: ["Online Ordering", "Reservations", "Loyalty Program", "Multi-location", "Menu Management", "Analytics"],
      liveUrl: "https://csrk-ma.github.io/TasteChain/",
      githubUrl: "https://csrk-ma.github.io/TasteChain/",
      featured: true,
      status: "Demo",
      duration: "2 months",
      year: "2024",
      client: "Taste Buds Chain",
      views: 634,
      likes: 34,
      comments: 8,
      metrics: {
        performance: 87,
        accessibility: 92,
        seo: 96,
        bestPractices: 89
      }
    },
    {
      title: "Lanka Gem Treasure",
      category: "web",
      type: "E-commerce Website",
      image: "img/gem.png",
      description: "An online platform for genuine Ceylon gems and handcrafted jewelry.",
      longDescription: "A visually appealing e-commerce website showcasing exquisite Ceylon gems and finely crafted jewelry. The site features detailed product listings, customer testimonials, and an intuitive navigation for a seamless shopping experience.",
      technologies: ["HTML", "CSS", "JavaScript", "PHP" ],
      features: ["Product Listings", "Image Gallery", "About Us Section", "Testimonials", "Contact Form", "Navigation Menu"],
      liveUrl: "https://csrk-ma.github.io/lanka-gem-treasure/",
      githubUrl: "https://csrk-ma.github.io/lanka-gem-treasure/",
      featured: true,
      status: "Live",
      duration: "5 days",
      year: "2024",
      client: "Lanka Gem Treasure",
      views: 142,
      likes: 89,
      comments: 13,
      metrics: {
        performance: 85,
        accessibility: 90,
        seo: 88,
        bestPractices: 87
      }
    },
    {
      title: "Educational Platform",
      category: "web",
      type: "Learning Management",
      image: "https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Online learning platform with course management, video streaming, and progress tracking.",
      longDescription: "A comprehensive learning management system with AI-powered course recommendations, interactive assignments, live streaming capabilities, and detailed progress analytics for both students and instructors.",
      technologies: ["React", "Express.js", "MongoDB", "Socket.io", "FFmpeg"],
      features: ["Course Management", "Video Streaming", "Progress Tracking", "Certificates", "Live Classes", "AI Recommendations"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
      status: "Live",
      duration: "5 months",
      year: "2023",
      client: "EduLearn Academy",
      views: 1100,
      likes: 78,
      comments: 19,
      metrics: {
        performance: 89,
        accessibility: 97,
        seo: 90,
        bestPractices: 93
      }
    },


  ];

  const stats = [
    { label: "Projects Completed", value: "50+", icon: Code, color: "text-blue-400" },
    { label: "Happy Clients", value: "35+", icon: Users, color: "text-green-400" },
    { label: "Years Experience", value: "3+", icon: Award, color: "text-purple-400" },
    { label: "Response Time", value: "< 24h", icon: Zap, color: "text-yellow-400" }
  ];

  const categories = [
    { value: 'all', label: 'All Projects' },
    { value: 'web', label: 'Web Development' },
    { value: 'mobile', label: 'Mobile Apps' },
    { value: 'ecommerce', label: 'E-commerce' },
  ];

  const filteredProjects = projects.filter(project => {
    const matchesCategory = selectedCategory === 'all' || project.category === selectedCategory;
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Live': return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'Development': return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      case 'Maintenance': return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      case 'Demo': return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      case 'Active': return 'bg-purple-500/20 text-purple-400 border-purple-500/30';
      case 'Inactive': return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
      default: return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  const getPerformanceColor = (score: number) => {
    if (score >= 90) return 'text-green-400';
    if (score >= 80) return 'text-yellow-400';
    return 'text-red-400';
  };

  return (
    <div className="min-h-screen w-full">
      {/* Hero Section */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-developer-accent to-developer-secondary bg-clip-text text-transparent">
              Web Developer Portfolio
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto px-4">
              Crafting digital experiences that drive business growth. 
              Specialized in modern web technologies and custom solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
              <a
                href="#portfolio"
                className="bg-developer-accent text-white px-6 sm:px-8 py-3 rounded-lg font-medium hover:bg-opacity-90 transition-all transform hover:scale-105"
              >
                View Portfolio
              </a>
              <a
                href="/developer/contact"
                className="border-2 border-developer-accent text-developer-accent px-6 sm:px-8 py-3 rounded-lg font-medium hover:bg-developer-accent hover:text-white transition-all"
              >
                Get In Touch
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Enhanced Stats Section */}
      <section className="py-8 sm:py-16 px-4 sm:px-6 lg:px-8 bg-developer-card">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center p-4 sm:p-6 rounded-lg bg-developer-primary border border-gray-700 hover:border-developer-accent/50 transition-all group"
                >
                  <Icon className={`w-6 h-6 sm:w-8 sm:h-8 mx-auto mb-2 sm:mb-4 ${stat.color} group-hover:scale-110 transition-transform`} />
                  <div className="text-2xl sm:text-3xl font-bold text-white mb-1 sm:mb-2">{stat.value}</div>
                  <div className="text-xs sm:text-sm text-gray-400">{stat.label}</div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-8 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Portfolio</h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-4">
              A showcase of my recent work, featuring modern web applications and custom solutions.
            </p>
          </motion.div>

          {/* Enhanced Filters and Search */}
          <div className="bg-developer-card rounded-lg p-4 sm:p-6 mb-8 border border-gray-700">
            <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center">
              <div className="flex items-center space-x-2">
                <Filter className="text-gray-400" size={20} />
                <span className="text-white font-medium">Filter:</span>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 flex-1 w-full lg:w-auto">
                <div className="relative flex-1 lg:max-w-xs">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
                  <input
                    type="text"
                    placeholder="Search projects..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 bg-developer-primary border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-developer-accent focus:border-transparent"
                  />
                </div>
                
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-4 py-2 bg-developer-primary border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-developer-accent focus:border-transparent"
                >
                  {categories.map(category => (
                    <option key={category.value} value={category.value}>{category.label}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Featured Projects */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center space-x-2">
              <Star className="text-developer-accent" size={24} />
              <span>Featured Projects</span>
            </h3>
            
            <div className={`grid gap-6 sm:gap-8 ${viewMode === 'grid' ? 'grid-cols-1 lg:grid-cols-2' : 'grid-cols-1'}`}>
              {filteredProjects.filter(project => project.featured).map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-developer-card rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-700 hover:border-developer-accent/50 group"
                >
                  <div className="aspect-video overflow-hidden relative">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="flex items-center justify-between text-white">
                        <div className="flex items-center space-x-4 text-sm">
                          <span className="flex items-center space-x-1">
                            <Eye size={14} />
                            <span>{project.views}</span>
                          </span>
                          <span className="flex items-center space-x-1">
                            <Heart size={14} />
                            <span>{project.likes}</span>
                          </span>
                          <span className="flex items-center space-x-1">
                            <MessageSquare size={14} />
                            <span>{project.comments}</span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="p-4 sm:p-6">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-3 gap-2">
                      <span className="px-3 py-1 bg-developer-accent/20 text-developer-accent rounded-full text-sm border border-developer-accent/30">
                        {project.type}
                      </span>
                      <span className={`px-3 py-1 rounded-full text-sm border ${getStatusColor(project.status)}`}>
                        {project.status}
                      </span>
                    </div>
                    
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-3">{project.title}</h3>
                    <p className="text-gray-300 mb-4 leading-relaxed text-sm sm:text-base">{project.description}</p>
                    
                    {/* Performance Metrics */}
                    <div className="mb-4 p-3 bg-developer-primary rounded-lg border border-gray-700">
                      <h4 className="text-sm font-medium text-gray-400 mb-2">Performance Metrics:</h4>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
                        <div className="text-center">
                          <div className={`font-bold ${getPerformanceColor(project.metrics.performance)}`}>
                            {project.metrics.performance}
                          </div>
                          <div className="text-gray-400">Performance</div>
                        </div>
                        <div className="text-center">
                          <div className={`font-bold ${getPerformanceColor(project.metrics.accessibility)}`}>
                            {project.metrics.accessibility}
                          </div>
                          <div className="text-gray-400">Accessibility</div>
                        </div>
                        <div className="text-center">
                          <div className={`font-bold ${getPerformanceColor(project.metrics.seo)}`}>
                            {project.metrics.seo}
                          </div>
                          <div className="text-gray-400">SEO</div>
                        </div>
                        <div className="text-center">
                          <div className={`font-bold ${getPerformanceColor(project.metrics.bestPractices)}`}>
                            {project.metrics.bestPractices}
                          </div>
                          <div className="text-gray-400">Best Practices</div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <h4 className="text-sm font-medium text-gray-400 mb-2">Key Features:</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-1">
                        {project.features.slice(0, 4).map((feature, idx) => (
                          <div key={idx} className="flex items-center space-x-2">
                            <div className="w-1.5 h-1.5 bg-developer-accent rounded-full"></div>
                            <span className="text-gray-300 text-xs sm:text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
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
                    
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between pt-4 border-t border-gray-700 gap-3">
                      <div className="flex items-center space-x-4 text-sm text-gray-400">
                        <span className="flex items-center space-x-1">
                          <Calendar size={14} />
                          <span>{project.duration}</span>
                        </span>
                        <span className="flex items-center space-x-1">
                          <TrendingUp size={14} />
                          <span>{project.year}</span>
                        </span>
                      </div>
                      <div className="flex space-x-3">
                        <a
                          href={project.githubUrl}
                          className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-gray-700 rounded-lg"
                        >
                          <Github size={18} />
                        </a>
                        <a
                          href={project.liveUrl}
                          className="text-developer-accent hover:text-developer-secondary transition-colors p-2 hover:bg-developer-accent/20 rounded-lg"
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

          {/* All Projects Grid */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center space-x-2">
              <Code className="text-developer-accent" size={24} />
              <span>All Projects</span>
            </h3>
            
            <div className={`grid gap-4 sm:gap-6 ${viewMode === 'grid' ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'}`}>
              {filteredProjects.filter(project => !project.featured).map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`bg-developer-card rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-700 hover:border-gray-600 ${viewMode === 'list' ? 'flex' : ''}`}
                >
                  <div className={`${viewMode === 'list' ? 'w-1/3' : 'aspect-video'} overflow-hidden`}>
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className={`p-4 ${viewMode === 'list' ? 'flex-1' : ''}`}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="px-2 py-1 bg-developer-accent/20 text-developer-accent rounded-full text-xs font-medium">
                        {project.type}
                      </span>
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
                      <div className="flex items-center space-x-3">
                        <span>{project.year} • {project.duration}</span>
                        <span className="flex items-center space-x-1">
                          <Eye size={12} />
                          <span>{project.views}</span>
                        </span>
                      </div>
                      <div className="flex space-x-2">
                        <a href={project.githubUrl} className="hover:text-white transition-colors">
                          <Github size={14} />
                        </a>
                        <a href={project.liveUrl} className="hover:text-developer-accent transition-colors">
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
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-developer-card">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 mb-8 px-4">
              Let's discuss how I can help you achieve your business goals with a custom web solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
              <a
                href="/developer/contact"
                className="bg-developer-accent text-white px-6 sm:px-8 py-3 rounded-lg font-medium hover:bg-opacity-90 transition-all transform hover:scale-105 flex items-center justify-center space-x-2"
              >
                <span>Start Your Project</span>
                <ExternalLink size={20} />
              </a>
              <a
                href="/developer/services"
                className="border-2 border-developer-accent text-developer-accent px-6 sm:px-8 py-3 rounded-lg font-medium hover:bg-developer-accent hover:text-white transition-all"
              >
                View Services
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default PortfolioPage;
