import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, MessageSquare, Calendar, Star, Globe, Zap, Shield, Award } from 'lucide-react';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectType: '',
    budget: '',
    timeline: '',
    message: '',
    phone: '',
    website: '',
    hearAbout: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<{[key: string]: string}>({});

  // EmailJS Configuration
  const EMAILJS_SERVICE_ID = 'service_bg2dexf'; // Replace with your EmailJS service ID
  const EMAILJS_TEMPLATE_ID = 'template_w34og86'; // Replace with your EmailJS template ID
  const EMAILJS_PUBLIC_KEY = '0G5JtzDFRoI0tWW9K'; // Replace with your EmailJS public key

  const sendEmail = async (templateParams: any) => {
    // Load EmailJS if not already loaded
    if (!window.emailjs) {
      const script = document.createElement('script');
      script.src = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js';
      script.async = true;
      document.head.appendChild(script);

      await new Promise((resolve) => {
        script.onload = resolve;
      });

      window.emailjs.init(EMAILJS_PUBLIC_KEY);
    }

    const result = await window.emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      templateParams
    );

    return result;
  };

  const handleSubmit = async () => {
    setIsLoading(true);
    setErrors({});

    // Basic validation
    const newErrors: {[key: string]: string} = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    if (!formData.projectType) newErrors.projectType = 'Project type is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setIsLoading(false);
      return;
    }

    try {
      // Prepare email template parameters
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        company: formData.company || 'Not provided',
        phone: formData.phone || 'Not provided',
        website: formData.website || 'Not provided',
        project_type: formData.projectType,
        budget: formData.budget || 'Not specified',
        timeline: formData.timeline || 'Not specified',
        hear_about: formData.hearAbout || 'Not specified',
        message: formData.message,
        to_name: 'Shehan RK', // Your name
        to_email: 'nexonmacs@gmail.com', // Your email
        reply_to: formData.email
      };

      // Send email using EmailJS
      await sendEmail(templateParams);
      
      setIsSubmitted(true);
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: '',
          email: '',
          company: '',
          projectType: '',
          budget: '',
          timeline: '',
          message: '',
          phone: '',
          website: '',
          hearAbout: ''
        });
      }, 3000);
    } catch (error) {
      console.error('Error sending email:', error);
      alert('Failed to send message. Please try again or contact directly at nexonmacs@gmail.com');
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "Nexonmacs@gmail.com",
      description: "Response within 24 hours",
      link: "mailto:nexonmacs@gmail.com"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+94 70 363 1463",
      description: "Available Mon-Fri, 9AM-6PM",
      link: "tel:+94703631463"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Gampaha, Sri Lanka",
      description: "Available for remote work globally",
      link: "#"
    },
    {
      icon: Clock,
      title: "Availability",
      value: "Currently Available",
      description: "Ready to start new projects",
      link: "#"
    }
  ];

  const projectTypes = [
    "Website Development",
    "E-commerce Store",
    "Web Application",
    "Custom Software",
    "Performance Optimization",
    "Maintenance & Support",
    "Mobile App Development",
    "API Development",
    "Database Design",
    "Other"
  ];

  const budgetRanges = [
    "Under $2,000",
    "$2,000 - $5,000",
    "$5,000 - $10,000",
    "$10,000 - $20,000",
    "$20,000 - $50,000",
    "$50,000+",
    "Let's discuss"
  ];

  const timelines = [
    "ASAP",
    "Within 1 month",
    "1-3 months",
    "3-6 months",
    "6+ months",
    "Flexible"
  ];

  const hearAboutOptions = [
    "Google Search",
    "Social Media",
    "Referral",
    "Portfolio Website",
    "LinkedIn",
    "GitHub",
    "Other"
  ];

  const faqs = [
    {
      question: "How long does a typical project take?",
      answer: "Project timelines vary based on complexity. A simple website takes 2-4 weeks, while complex web applications can take 2-6 months. I'll provide a detailed timeline after understanding your requirements."
    },
    {
      question: "Do you work with clients outside Sri Lanka?",
      answer: "Yes! I work with clients globally. I'm experienced in remote collaboration and use modern tools to ensure smooth communication and project delivery regardless of location."
    },
    {
      question: "What's included in ongoing maintenance?",
      answer: "Maintenance includes regular updates, security monitoring, backup management, performance optimization, and technical support. I also provide training for content management systems."
    },
    {
      question: "Do you provide hosting services?",
      answer: "While I don't provide hosting directly, I can recommend reliable hosting providers and help with setup and deployment. I also assist with ongoing server management if needed."
    },
    {
      question: "What technologies do you specialize in?",
      answer: "I specialize in modern web technologies including React, Vue.js, Node.js, Python, and various databases. I choose the best technology stack based on your project requirements."
    },
    {
      question: "Do you offer payment plans?",
      answer: "Yes, I offer flexible payment plans for larger projects. Typically, I require 50% upfront and the remainder upon completion, but we can discuss terms that work for both parties."
    }
  ];

  const whyChooseMe = [
    {
      icon: Zap,
      title: "Fast Delivery",
      description: "Quick turnaround times without compromising quality"
    },
    {
      icon: Shield,
      title: "Reliable & Secure",
      description: "Secure coding practices and reliable project delivery"
    },
    {
      icon: Award,
      title: "Quality Assured",
      description: "High-quality code with comprehensive testing"
    },
    {
      icon: Globe,
      title: "Global Experience",
      description: "Experience working with clients worldwide"
    }
  ];

  return (
    <div className="min-h-screen w-full bg-gray-900">
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
              Let's Work Together
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto px-4">
              Ready to bring your ideas to life? Get in touch and let's discuss 
              how I can help transform your business with custom web solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
              <a
                href="#contact-form"
                className="bg-developer-accent text-white px-6 sm:px-8 py-3 rounded-lg font-medium hover:bg-developer-accent/50 transition-all transform hover:scale-105"
              >
                Start Your Project
              </a>
              <a
                href="#faq"
                className="border-2 border-developer-accent text-developer-accent px-6 sm:px-8 py-3 rounded-lg font-medium hover:bg-developer-accent/50 hover:text-white transition-all"
              >
                View FAQ
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-8 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8 sm:mb-16">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gray-800 rounded-lg p-4 sm:p-6 text-center shadow-lg border border-gray-700 hover:border-blue-600/50 transition-all group"
                >
                  <a href={info.link} className="block">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-600/20 rounded-lg mb-4 group-hover:bg-blue-600/30 transition-colors">
                      <Icon className="w-6 h-6 text-developer-accent" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">{info.title}</h3>
                    <p className="text-developer-accent font-medium mb-1 text-sm sm:text-base">{info.value}</p>
                    <p className="text-gray-400 text-xs sm:text-sm">{info.description}</p>
                  </a>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Me */}
      <section className="py-8 sm:py-16 px-4 sm:px-6 lg:px-8 bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-8 sm:mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Why Choose Me?</h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-4">
              Here's what sets me apart from other developers
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseMe.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center p-6 bg-gray-900 rounded-lg border border-gray-700 hover:border-blue-600/50 transition-all"
                >
                  <Icon className="w-8 h-8 mx-auto mb-4 text-developer-accent" />
                  <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-300 text-sm">{item.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact-form" className="py-8 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-gray-800 rounded-lg p-4 sm:p-8 shadow-xl border border-gray-700"
          >
            <div className="text-center mb-6 sm:mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">Start Your Project</h2>
              <p className="text-gray-300 text-sm sm:text-base">
                Fill out the form below and I'll get back to you within 24 hours with a detailed proposal.
              </p>
            </div>

            <div className="space-y-4 sm:space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 bg-gray-900 border rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-600 focus:border-transparent text-sm sm:text-base ${
                      errors.name ? 'border-red-500' : 'border-gray-600'
                    }`}
                    placeholder="Your full name"
                  />
                  {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 bg-gray-900 border rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-600 focus:border-transparent text-sm sm:text-base ${
                      errors.email ? 'border-red-500' : 'border-gray-600'
                    }`}
                    placeholder="your@email.com"
                  />
                  {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                    Company/Organization
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-600 focus:border-transparent text-sm sm:text-base"
                    placeholder="Your company name"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-600 focus:border-transparent text-sm sm:text-base"
                    placeholder="+94 77 123 4567"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="website" className="block text-sm font-medium text-gray-300 mb-2">
                  Current Website (if any)
                </label>
                <input
                  type="url"
                  id="website"
                  name="website"
                  value={formData.website}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-600 focus:border-transparent text-sm sm:text-base"
                  placeholder="https://yourwebsite.com"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
                <div>
                  <label htmlFor="projectType" className="block text-sm font-medium text-gray-300 mb-2">
                    Project Type *
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    required
                    value={formData.projectType}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 bg-gray-900 border rounded-lg text-white focus:ring-2 focus:ring-blue-600 focus:border-transparent text-sm sm:text-base ${
                      errors.projectType ? 'border-red-500' : 'border-gray-600'
                    }`}
                  >
                    <option value="">Select project type</option>
                    {projectTypes.map((type) => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                  {errors.projectType && <p className="text-red-400 text-xs mt-1">{errors.projectType}</p>}
                </div>
                <div>
                  <label htmlFor="budget" className="block text-sm font-medium text-gray-300 mb-2">
                    Budget Range
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-blue-600 focus:border-transparent text-sm sm:text-base"
                  >
                    <option value="">Select budget range</option>
                    {budgetRanges.map((range) => (
                      <option key={range} value={range}>{range}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="timeline" className="block text-sm font-medium text-gray-300 mb-2">
                    Timeline
                  </label>
                  <select
                    id="timeline"
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-blue-600 focus:border-transparent text-sm sm:text-base"
                  >
                    <option value="">Select timeline</option>
                    {timelines.map((time) => (
                      <option key={time} value={time}>{time}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="hearAbout" className="block text-sm font-medium text-gray-300 mb-2">
                  How did you hear about me?
                </label>
                <select
                  id="hearAbout"
                  name="hearAbout"
                  value={formData.hearAbout}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-blue-600 focus:border-transparent text-sm sm:text-base"
                >
                  <option value="">Select an option</option>
                  {hearAboutOptions.map((option) => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Project Details *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-gray-900 border rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-600 focus:border-transparent resize-none text-sm sm:text-base ${
                    errors.message ? 'border-red-500' : 'border-gray-600'
                  }`}
                  placeholder="Tell me about your project requirements, goals, and any specific features you need..."
                ></textarea>
                {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message}</p>}
              </div>

              <div className="text-center">
                <button
                  type="button"
                  onClick={handleSubmit}
                  disabled={isSubmitted || isLoading}
                  className={`inline-flex items-center space-x-2 px-6 sm:px-8 py-3 rounded-lg font-medium transition-all transform hover:scale-105 ${
                    isSubmitted
                      ? 'bg-green-600 text-white'
                      : isLoading
                      ? 'bg-gray-600 text-gray-300 cursor-not-allowed'
                      : 'bg-developer-accent text-white hover:bg-developer-accent/50'
                  }`}
                >
                  {isLoading ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      <span>Sending...</span>
                    </>
                  ) : isSubmitted ? (
                    <>
                      <CheckCircle size={20} />
                      <span>Message Sent!</span>
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gray-800">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-8 sm:mb-12"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-300 text-sm sm:text-base">Common questions about working together</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-900 rounded-lg p-4 sm:p-6 border border-gray-700 hover:border-blue-600/50 transition-colors"
              >
                <h3 className="text-lg font-bold text-white mb-3">{faq.question}</h3>
                <p className="text-gray-300 leading-relaxed text-sm sm:text-base">{faq.answer}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-8">
            <p className="text-gray-300 mb-4">Still have questions?</p>
            <a
              href="mailto:nexonmacs@gmail.com"
              className="inline-flex items-center space-x-2 text-developer-accent hover:text-developer-accent/70 transition-colors"
            >
              <Mail size={16} />
              <span>Send me an email</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;