import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Code, Smartphone, ShoppingCart, Wrench, Zap, Shield, CheckCircle, ArrowRight, Star, Clock, Users, ExternalLink, Play, Download, MessageSquare } from 'lucide-react';

const ServicesPage: React.FC = () => {
  const [selectedPackage, setSelectedPackage] = useState(1);
  const [selectedService, setSelectedService] = useState<number | null>(null);

  const services = [
    {
      icon: Code,
      title: "Website Development",
      description: "Custom websites built with modern technologies, optimized for performance and user experience.",
      longDescription: "Transform your digital presence with cutting-edge websites that combine stunning design with powerful functionality. Our development process ensures your site is fast, secure, and scalable.",
      features: ["Responsive Design", "SEO Optimization", "Fast Loading", "Cross-Browser Compatible", "CMS Integration", "Analytics Setup"],
      startingPrice: "$1,500",
      color: "from-blue-500 to-blue-600",
      deliverables: ["Custom Design", "Source Code", "Documentation", "Training", "3 Months Support"],
      timeline: "2-4 weeks",
      technologies: ["WordPress", "Elementor", "Astra", "PHP", "CSS"],
      caseStudy: "TechCorp Website Redesign - 300% increase in conversions",
      hourlyRate: "$20–$37/hr"
    },
    {
      icon: ShoppingCart,
      title: "E-commerce Solutions",
      description: "Complete online store solutions with payment integration, inventory management, and analytics.",
      longDescription: "Launch your online business with a comprehensive e-commerce platform that handles everything from product management to secure payments and customer analytics.",
      features: ["Payment Gateway Integration", "Inventory Management", "Order Processing", "Customer Dashboard", "Multi-vendor Support", "Mobile App"],
      startingPrice: "$2,500",
      color: "from-green-500 to-green-600",
      deliverables: ["E-commerce Platform", "Admin Panel", "Mobile App", "Payment Setup", "6 Months Support"],
      timeline: "4-8 weeks",
      technologies: ["WooCommerce", "WordPress", "Stripe", "PHP", "MySQL", "Elementor Pro"],
      caseStudy: "RetailMax - 400% increase in online sales",
      hourlyRate: "$20–$35/hr"
    },
    {
      icon: Smartphone,
      title: "Web Applications",
      description: "Custom web applications tailored to your business needs with robust backend systems.",
      longDescription: "Build powerful web applications that streamline your business processes and provide exceptional user experiences across all devices.",
      features: ["Custom Functionality", "Database Design", "API Integration", "User Management", "Real-time Features", "Cloud Deployment"],
      startingPrice: "$3,000",
      color: "from-purple-500 to-purple-600",
      deliverables: ["Web Application", "API Documentation", "Database Schema", "User Guide", "12 Months Support"],
      timeline: "6-12 weeks",
      technologies: ["Vue.js", "Laravel", "PostgreSQL", "Docker"],
      caseStudy: "HealthPlus Management System - 200% efficiency improvement",
      hourlyRate: "$12–$25/hr"
    },
    {
      icon: Wrench,
      title: "Custom Software",
      description: "Bespoke software solutions designed specifically for your business processes and workflows.",
      longDescription: "Get tailor-made software solutions that perfectly fit your unique business requirements and help you gain a competitive advantage.",
      features: ["Requirements Analysis", "Custom Development", "Testing & QA", "Documentation", "Training", "Ongoing Support"],
      startingPrice: "$5,000",
      color: "from-orange-500 to-orange-600",
      deliverables: ["Custom Software", "Source Code", "Technical Documentation", "User Training", "Lifetime Support"],
      timeline: "8-16 weeks",
      technologies: ["Python", "Django", "React", "PostgreSQL"],
      caseStudy: "LogiFlow - Custom logistics management solution",
      hourlyRate: "$15–$31/hr"
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "Speed up your existing website with performance audits and optimization techniques.",
      longDescription: "Boost your website's performance with comprehensive optimization strategies that improve loading times, user experience, and search engine rankings.",
      features: ["Speed Analysis", "Code Optimization", "Image Compression", "Caching Setup", "CDN Integration", "Monitoring"],
      startingPrice: "$800",
      color: "from-yellow-500 to-yellow-600",
      deliverables: ["Performance Report", "Optimized Code", "Speed Improvements", "Monitoring Setup", "3 Months Support"],
      timeline: "1-2 weeks",
      technologies: ["Lighthouse", "CloudFlare", "WP Rocket", "Redis"],
      caseStudy: "NewsPortal - 75% faster loading times",
      hourlyRate: "$20–$40/hr"
    },
    {
      icon: Shield,
      title: "Maintenance & Support",
      description: "Ongoing maintenance, updates, and technical support to keep your website running smoothly.",
      longDescription: "Ensure your digital assets remain secure, updated, and performing optimally with our comprehensive maintenance and support services.",
      features: ["Regular Updates", "Security Monitoring", "Backup Management", "24/7 Support", "Performance Monitoring", "Bug Fixes"],
      startingPrice: "$200/month",
      color: "from-red-500 to-red-600",
      deliverables: ["Monthly Reports", "Security Updates", "Backup System", "Support Portal", "Emergency Response"],
      timeline: "Ongoing",
      technologies: ["WordPress", "iThemes Security", "UpdraftPlus", "Jetpack Monitor"],
      caseStudy: "50+ websites maintained with 99.9% uptime",
      hourlyRate: "N/A"
    }
  ];

  const packages = [
    {
      name: "Starter",
      price: "$1,999",
      description: "Perfect for small businesses and startups",
      features: [
        "5-page responsive website",
        "Mobile-optimized design",
        "Basic SEO setup",
        "Contact forms",
        "Google Analytics",
        "3 months support",
        "SSL Certificate",
        "Basic hosting setup"
      ],
      popular: false,
      color: "border-gray-700",
      deliveryTime: "2-3 weeks",
      revisions: "3 rounds",
      hourlyRate: "$33–$50/hr"
    },
    {
      name: "Professional",
      price: "$3,999",
      description: "Ideal for growing businesses",
      features: [
        "10-page responsive website",
        "Advanced design & animations",
        "Advanced SEO optimization",
        "Content management system",
        "E-commerce integration (up to 50 products)",
        "6 months support",
        "Performance optimization",
        "Social media integration",
        "Email marketing setup"
      ],
      popular: true,
      color: "border-developer-accent",
      deliveryTime: "4-6 weeks",
      revisions: "5 rounds",
      hourlyRate: "$33–$50/hr"
    },
    {
      name: "Enterprise",
      price: "$7,999",
      description: "For large businesses with complex needs",
      features: [
        "Unlimited pages",
        "Custom web application",
        "Advanced e-commerce (unlimited products)",
        "Custom integrations",
        "Database design",
        "12 months support",
        "Priority support",
        "Custom training",
        "API development",
        "Multi-language support"
      ],
      popular: false,
      color: "border-gray-700",
      deliveryTime: "8-12 weeks",
      revisions: "Unlimited",
      hourlyRate: "$33–$50/hr"
    }
  ];


  const process = [
    {
      step: "01",
      title: "Discovery & Planning",
      description: "We discuss your requirements, goals, and vision for your project in detail.",
      icon: Users,
      duration: "1-2 days",
      deliverables: ["Project Brief", "Technical Specification", "Timeline"]
    },
    {
      step: "02",
      title: "Design & Prototyping",
      description: "Create detailed project plan, wireframes, and technical specifications.",
      icon: Code,
      duration: "3-5 days",
      deliverables: ["Wireframes", "Design Mockups", "Prototype"]
    },
    {
      step: "03",
      title: "Development",
      description: "Build your solution using modern technologies and best practices.",
      icon: Wrench,
      duration: "2-8 weeks",
      deliverables: ["Working Application", "Source Code", "Documentation"]
    },
    {
      step: "04",
      title: "Testing & QA",
      description: "Comprehensive testing to ensure everything works perfectly.",
      icon: Shield,
      duration: "3-5 days",
      deliverables: ["Test Reports", "Bug Fixes", "Performance Optimization"]
    },
    {
      step: "05",
      title: "Launch & Deployment",
      description: "Deploy your project and provide ongoing support and maintenance.",
      icon: Zap,
      duration: "1-2 days",
      deliverables: ["Live Website", "Training", "Support Documentation"]
    },
    {
      step: "06",
      title: "Support & Maintenance",
      description: "Ongoing support, updates, and enhancements as needed.",
      icon: Star,
      duration: "Ongoing",
      deliverables: ["Regular Updates", "Support", "Performance Monitoring"]
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechStart Inc.",
      text: "Shehan delivered an exceptional e-commerce platform that exceeded our expectations. The attention to detail and performance optimization was outstanding.",
      rating: 5,
      project: "E-commerce Platform",
      result: "300% increase in sales"
    },
    {
      name: "Michael Chen",
      company: "Digital Solutions Ltd.",
      text: "Professional, reliable, and skilled. Our web application has been running flawlessly since launch. Highly recommended!",
      rating: 5,
      project: "Custom Web App",
      result: "50% efficiency improvement"
    },
    {
      name: "Emily Rodriguez",
      company: "Creative Agency",
      text: "The website redesign transformed our online presence. We've seen a significant increase in leads and customer engagement.",
      rating: 5,
      project: "Website Redesign",
      result: "200% more leads"
    }
  ];

  const addOns = [
    {
      name: "SEO Optimization",
      price: "$500",
      description: "Complete SEO setup and optimization",
      features: ["Keyword Research", "On-page SEO", "Technical SEO", "Analytics Setup"]
    },
    {
      name: "Mobile App",
      price: "$2,000",
      description: "Companion mobile app for your website",
      features: ["iOS & Android", "Push Notifications", "Offline Mode", "App Store Submission"]
    },
    {
      name: "Advanced Analytics",
      price: "$300",
      description: "Custom analytics and reporting dashboard",
      features: ["Custom Dashboards", "Real-time Reports", "User Behavior Tracking", "Conversion Tracking"]
    },
    {
      name: "Priority Support",
      price: "$100/month",
      description: "24/7 priority support and maintenance",
      features: ["24/7 Support", "Priority Response", "Monthly Reports", "Proactive Monitoring"]
    }
  ];

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
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white">
              Professional Services
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto px-4">
              Comprehensive web development solutions to grow your business online.
              From simple websites to complex applications.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
              <a
                href="#services"
                className="bg-developer-accent text-white px-6 sm:px-8 py-3 rounded-lg font-medium hover:bg-opacity-90 transition-all transform hover:scale-105"
              >
                Explore Services
              </a>
              <a
                href="/developer/contact"
                className="border-2 border-developer-accent text-developer-accent px-6 sm:px-8 py-3 rounded-lg font-medium hover:bg-developer-accent hover:text-white transition-all"
              >
                Get Free Quote
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="py-8 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-8 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Our Services</h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-4">
              Choose from our comprehensive range of web development services designed to meet your specific needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              const isSelected = selectedService === index;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`bg-developer-card rounded-lg p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300 border group cursor-pointer ${
                    isSelected ? 'border-developer-accent' : 'border-gray-700 hover:border-developer-accent/50'
                  }`}
                  onClick={() => setSelectedService(isSelected ? null : index)}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center mb-4 gap-3">
                    <div className={`p-3 bg-gradient-to-r ${service.color} rounded-lg shadow-lg group-hover:scale-110 transition-transform`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg sm:text-xl font-bold text-white">{service.title}</h3>
                      <p className="text-developer-accent font-medium text-sm sm:text-base">Starting at {service.startingPrice}</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-4 leading-relaxed text-sm sm:text-base">
                    {isSelected ? service.longDescription : service.description}
                  </p>
                  
                  {isSelected && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="space-y-4"
                    >
                      <div>
                        <h4 className="text-sm font-medium text-gray-400 mb-2">What's Included:</h4>
                        <ul className="space-y-1">
                          {service.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center text-gray-300">
                              <CheckCircle className="w-3 h-3 text-developer-accent mr-2 flex-shrink-0" />
                              <span className="text-xs">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4 text-xs">
                        <div>
                          <span className="text-gray-400">Timeline:</span>
                          <p className="text-white font-medium">{service.timeline}</p>
                        </div>
                        <div>
                          <span className="text-gray-400">HourlyRate:</span>
                          <p className="text-white font-medium">{service.hourlyRate}</p>
                        </div>
                        <div>
                          <span className="text-gray-400">Technologies:</span>
                          <p className="text-white font-medium">{service.technologies.slice(0, 2).join(', ')}</p>
                        </div>
                      </div>
                      
                      <div className="bg-developer-primary rounded-lg p-3 border border-gray-700">
                        <p className="text-xs text-gray-400 mb-1">Case Study:</p>
                        <p className="text-white text-sm font-medium">{service.caseStudy}</p>
                      </div>
                    </motion.div>
                  )}
                  
                  <div className="flex gap-2 mt-4">
                    <button className="flex-1 bg-developer-accent/20 hover:bg-developer-accent text-developer-accent hover:text-white px-4 py-2 rounded-lg transition-all duration-300 border border-developer-accent/30 hover:border-developer-accent text-sm">
                      {isSelected ? 'Hide Details' : 'Learn More'}
                    </button>
                    <a
                      href="/developer/contact"
                      className="flex-1 bg-developer-accent hover:bg-developer-accent/90 text-white px-4 py-2 rounded-lg transition-all duration-300 text-center text-sm"
                    >
                      Get Started
                    </a>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-developer-card">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-8 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Pricing Packages</h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-4">
              Choose the perfect package for your needs. All packages include responsive design and basic support.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
            {packages.map((pkg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`relative bg-developer-primary rounded-lg p-6 sm:p-8 shadow-lg border-2 transition-all duration-300 ${
                  pkg.popular 
                    ? 'border-developer-accent transform scale-105' 
                    : 'border-gray-700 hover:border-developer-accent/50'
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-developer-accent text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6 sm:mb-8">
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">{pkg.name}</h3>
                  <div className="text-3xl sm:text-4xl font-bold text-developer-accent mb-2">{pkg.price}</div>
                  <p className="text-gray-300 text-sm sm:text-base">{pkg.description}</p>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                  <div className="text-center p-3 bg-developer-card rounded-lg">
                    <Clock className="w-4 h-4 mx-auto mb-1 text-developer-accent" />
                    <div className="text-white font-medium">{pkg.deliveryTime}</div>
                    <div className="text-gray-400 text-xs">Delivery</div>
                  </div>
                  <div className="text-center p-3 bg-developer-card rounded-lg">
                    <ArrowRight className="w-4 h-4 mx-auto mb-1 text-developer-accent" />
                    <div className="text-white font-medium">{pkg.revisions}</div>
                    <div className="text-gray-400 text-xs">Revisions</div>
                  </div>
                </div>

                <ul className="space-y-3 mb-6 sm:mb-8">
                  {pkg.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-developer-accent mr-3 flex-shrink-0" />
                      <span className="text-sm sm:text-base">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <a href="/developer/contact">
                  <div className="space-y-3">
                    <button className={`w-full py-3 rounded-lg font-medium transition-all ${
                      pkg.popular
                        ? 'bg-developer-accent text-white hover:bg-opacity-90'
                        : 'border-2 border-developer-accent text-developer-accent hover:bg-developer-accent hover:text-white'
                    }`}>
                      Get Started
                    </button>
                    
                  </div>
                </a>
              </motion.div>
            ))}
          </div>

          {/* Add-ons */}
          <div className="bg-developer-primary rounded-lg p-6 sm:p-8 border border-gray-700">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-6 text-center">Popular Add-ons</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {addOns.map((addon, index) => (
                <div key={index} className="bg-developer-card rounded-lg p-4 border border-gray-700 hover:border-developer-accent/50 transition-colors">
                  <h4 className="font-bold text-white mb-2">{addon.name}</h4>
                  <p className="text-developer-accent font-bold mb-2">{addon.price}</p>
                  <p className="text-gray-300 text-sm mb-3">{addon.description}</p>
                  <ul className="space-y-1">
                    {addon.features.map((feature, idx) => (
                      <li key={idx} className="text-xs text-gray-400 flex items-center">
                        <CheckCircle className="w-3 h-3 text-developer-accent mr-1" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-8 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Development Process</h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-4">
              A proven methodology that ensures your project is delivered on time and exceeds expectations.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {process.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center group"
                >
                  <div className="relative mb-4 sm:mb-6">
                    <div className="inline-flex items-center justify-center w-16 h-16 sm:w-15 sm:h-15 bg-developer-accent rounded-full text-white font-bold text-lg sm:text-xl mb-4 group-hover:scale-110 transition-transform">
                      {step.step}
                    </div>
                    <div className="absolute -bottom-5 left-1/2 transform -translate-x-1/2">
                      <Icon className="w-6 h-6 text-developer-accent" />
                    </div>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-3">{step.title}</h3>
                  <p className="text-gray-300 leading-relaxed text-sm sm:text-base px-2 mb-3">{step.description}</p>
                  <div className="text-sm text-developer-accent font-medium mb-2">{step.duration}</div>
                  <div className="text-xs text-gray-400">
                    Deliverables: {step.deliverables.join(', ')}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-developer-card">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-8 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Client Success Stories</h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-4">
              What my clients say about working with me and the results they've achieved.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-developer-primary rounded-lg p-6 sm:p-8 border border-gray-700 hover:border-developer-accent/50 transition-colors"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic text-sm sm:text-base">"{testimonial.text}"</p>
                <div className="border-t border-gray-700 pt-4">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <p className="font-bold text-white">{testimonial.name}</p>
                      <p className="text-developer-accent text-sm">{testimonial.company}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-gray-400">{testimonial.project}</p>
                      <p className="text-green-400 text-sm font-medium">{testimonial.result}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8">
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
                <ArrowRight size={20} />
              </a>
              <a
                href="/developer/case-studies"
                className="border-2 border-developer-accent text-developer-accent px-6 sm:px-8 py-3 rounded-lg font-medium hover:bg-developer-accent hover:text-white transition-all"
              >
                View Case Studies
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;