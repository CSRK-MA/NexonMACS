import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Clock, Users, Award, ExternalLink, ArrowRight, Star, Calendar, Globe, Eye, ShieldCheck, Cog, CheckCircle, Lightbulb, UserCircle, FolderOpen, Shield } from 'lucide-react';

const CaseStudiesPage: React.FC = () => {
  const caseStudies = [
    {
      title: "Ceylon Clean Pro",
      client: "Clening Service",
      industry: "Business Services",
      image: "/src/img/cclen.png",
      liveUrl: "https://csrk-ma.github.io/CeylonClean-Pro/", 
      challenge: "Paradise Bay Resort needed comprehensive deep cleaning services for their 150-room facility after renovation, with strict deadlines before the peak tourist season and maintaining 5-star cleanliness standards.",
      solution: "Deployed a specialized team of 25 trained cleaners using eco-friendly products and advanced cleaning equipment. Implemented a systematic room-by-room approach with quality control checkpoints and flexible scheduling to work around ongoing operations.",
      results: [
        { metric: "Appointment Scheduling Time", improvement: "-75%", icon: Clock },
        { metric: "Project Duration", improvement: "7 days", icon: Clock },
        { metric: "Client Satisfaction", improvement: "98%", icon: Users },
        { metric: "Repeat Bookings", improvement: "+85%", icon: Award }
      ],
      technologies: ["Eco-friendly Products", "HEPA Vacuums", "Steam Cleaning", "UV Sanitization", "Quality Control App", "Team Coordination System"],
      timeline: "7 days",
      testimonial: "CeylonClean Pro delivered exceptional results within our tight deadline. The attention to detail and professionalism of their team was outstanding. Our guests have consistently praised the cleanliness standards since reopening.",
      clientRole: "General Manager, Paradise Bay Resort",
      year: "2025"
    },

    {
      title: "EduTrack - Smart Lab Inventory Manager",
      client: "University",
      industry: "Education & Research / Laboratory Management",
      image: "/src/img/lab.png",
      liveUrl: "https://csrk-ma.github.io/EduTrack/",
      challenge: "Educational and research institutions often struggle with inefficient, manual, or fragmented systems for managing lab equipment, chemicals, and material inventory. This leads to lost items, stockouts, extended maintenance downtimes, and difficulties in tracking resource utilization, hindering research and teaching workflows.",
      solution: "Designed and developed 'EduTrack,' a comprehensive web-based Smart Lab Inventory Manager. This platform centralizes all lab resources, automating check-in/out processes, providing real-time inventory levels, sending proactive alerts for low stock or overdue items, and generating insightful reports for efficient resource allocation.",
      results: [
        { metric: "Inventory Tracking Accuracy", "improvement": "+99.8%", "icon": "TrendingUp" },
        { metric: "Equipment Utilization Rate", "improvement": "+95%", "icon": "Clock" },
        { metric: "Operational Efficiency", "improvement": "+98%", "icon": "Users" },
        { metric: "Alert Response Time", "improvement": "-58%", "icon": "Award" }
      ],
      technologies: ["React", "Node.js", "Tailwind CSS","Express.js", "MongoDB", "JavaScript", "HTML", "CSS", "RESTful API"],
      timeline: "2months",
      testimonial: "EduTrack has transformed how we manage our lab. The real-time visibility and automated alerts have significantly reduced lost items and improved our operational efficiency, allowing our staff and students to focus more on their core work.",
      clientRole: "Dr.Sampath-Lab Administrator",
      year: "2025"
    },

    {
      title: "Restaurant Chain Website",
      client: "Taste Buds Chain",
      industry: "Hospitality & Food Service",
      image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600",
      liveUrl: "https://csrk-ma.github.io/TasteChain/",
      challenge: "Taste Buds Chain, a growing multi-location restaurant group, needed a comprehensive digital platform to centralize online ordering, manage reservations across all branches, and implement a robust customer loyalty program to enhance efficiency and customer engagement.",
      solution: "Developed a custom website solution integrating online ordering, a real-time reservation system, and a tiered loyalty program. The platform features multi-location support with centralized menu and content management, ensuring consistency and ease of updates across all restaurant branches.",
      results: [
        { metric: "Operational Efficiency", improvement: "Improved", icon: Cog },
        { metric: "Client Satisfaction", improvement: "98%", icon: Users },
        { metric: "Repeat Bookings", improvement: "+85%", icon: Award },
        { metric: "Brand Consistency", improvement: "Achieved", icon: CheckCircle }
      ],
      technologies: ["WordPress", "WooCommerce", "Custom PHP", "MySQL"],
      timeline: "2 months",
      testimonial: "The new website has revolutionized how we manage our restaurants. Online orders are seamless, reservations are a breeze, and our loyalty program has significantly boosted customer engagement.",
      clientRole: "Operations Manager, Taste Buds Chain",
      year: "2024"
    },
    {
      title: "SecureVault: A Robust Password Management Solution",
      client: "Personal Project",
      industry: "Productivity Software",
      image: "/src/img/securevault.png",
      liveUrl: "https://csrk-ma.github.io/SecureVault/",
      challenge: "Many individuals and organizations struggle with managing numerous passwords securely, often resorting to weak or reused credentials. The challenge was to create an intuitive and highly secure application that centralizes password management, offers robust encryption, and provides insights into password strength.",
      solution: "Developed 'SecureVault,' a desktop or web-based application (specify if it's desktop, web, or both) for secure password storage and management. Key features include end-to-end encryption, categorized item storage (logins, notes, cards, identities), a 'Security Report' for identifying weak passwords, and a user-friendly interface for easy access and organization of sensitive data.",
      results: [
        { metric: "Password Security", improvement: "Enhanced", icon: Shield },
        { metric: "Data Organization", improvement: "Streamlined", icon: FolderOpen },
        { metric: "User Control", improvement: "Maximized", icon: UserCircle },
        { metric: "Vulnerability Detection", improvement: "Automated", icon: Lightbulb }
      ],
      technologies: ["React", "Node.js", "Express.js", "MongoDB", "JavaScript", "HTML", "CSS", "RESTful API", "Encryption Libraries", "Authentication"],
      timeline: "1 months",
      testimonial: "As a developer, I aimed to build a tool that truly empowers users to take control of their digital security. SecureVault demonstrates a practical approach to modern password management, offering both security and usability.",
      clientRole: "Lead Developer & Architect",
      year: "2024"
    },
    {
      title: "Lanka Gem Treasure E-commerce Solution",
      client: "Lanka Gem Treasure",
      industry: "Gems & Jewelry E-commerce",
      image: "/src/img/gem.png",
      liveUrl: "https://csrk-ma.github.io/lanka-gem-treasure/",
      challenge: "Lanka Gem Treasure, a purveyor of genuine Ceylon gems and handcrafted jewelry, needed a modern, visually appealing online presence to showcase their unique products and reach a wider global audience, enhancing trust and authenticity in the digital space.",
      solution: "Designed and developed an intuitive e-commerce website with a focus on high-quality product displays, clear navigation, and a secure user experience. Implemented robust image galleries and detailed product descriptions to highlight the unique beauty of each gem and jewelry piece.",
      results: [
        { metric: "Online Presence", improvement: "Established", icon: Globe },
        { metric: "Product Visibility", improvement: "Enhanced", icon: Eye },
        { metric: "Customer Engagement", improvement: "Improved", icon: Users },
        { metric: "Brand Authenticity", improvement: "Reinforced", icon: ShieldCheck }
      ],
      technologies: ["HTML", "CSS", "JavaScript", "PHP"],
      timeline: "5 days",
      testimonial: "The new website beautifully captures the essence of our unique Ceylon gems. It's user-friendly and truly showcases our products effectively.",
      clientRole: "Owner, Lanka Gem Treasure",
      year: "2024"
    },

    {
      title: "HealthPlus Patient Management System",
      client: "HealthPlus Medical Center",
      industry: "Healthcare",
      image: "https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=800",
      liveUrl: "https://ceylon-clean-pro.example.com", 
      challenge: "HealthPlus needed a comprehensive patient management system to streamline operations, reduce paperwork, and improve patient care coordination across multiple locations.",
      solution: "Built a custom healthcare management system with patient records, appointment scheduling, billing integration, and real-time communication between departments.",
      results: [
        { metric: "Administrative Efficiency", improvement: "+200%", icon: TrendingUp },
        { metric: "Appointment Scheduling Time", improvement: "-75%", icon: Clock },
        { metric: "Patient Wait Time", improvement: "-40%", icon: Users },
        { metric: "Operational Costs", improvement: "-30%", icon: Award }
      ],
      technologies: ["Vue.js", "Laravel", "MySQL", "Socket.io", "Docker"],
      timeline: "4 months",
      testimonial: "This system has revolutionized how we manage patient care. Our staff is more efficient and patients are happier with the streamlined experience.",
      clientRole: "Operations Director, HealthPlus Medical Center",
      year: "2023"
    },

    {
      title: "EduLearn Online Learning Platform",
      client: "EduLearn Academy",
      industry: "Education Technology",
      image: "https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg?auto=compress&cs=tinysrgb&w=800",
      liveUrl: "https://ceylon-clean-pro.example.com", 
      challenge: "EduLearn needed a scalable online learning platform to deliver courses to thousands of students with features for live classes, assignments, and progress tracking.",
      solution: "Developed a comprehensive learning management system with video streaming, interactive assignments, real-time collaboration tools, and advanced analytics.",
      results: [
        { metric: "Student Enrollment", improvement: "+400%", icon: Users },
        { metric: "Course Completion Rate", improvement: "+85%", icon: TrendingUp },
        { metric: "Platform Uptime", improvement: "99.9%", icon: Clock },
        { metric: "User Satisfaction", improvement: "+150%", icon: Award }
      ],
      technologies: ["Next.js", "Express.js", "PostgreSQL", "Redis", "WebRTC"],
      timeline: "5 months",
      testimonial: "The platform has enabled us to scale our educational programs globally. The features are exactly what we needed to deliver quality online education.",
      clientRole: "Founder, EduLearn Academy",
      year: "2023"
    },

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
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-white">
              Case Studies
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto px-4">
              Real results from real projects. See how I've helped businesses transform 
              their digital presence and achieve measurable success.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-8 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-12 sm:space-y-20">
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-developer-card rounded-lg overflow-hidden shadow-xl border border-gray-700"
            >
              {/* Header */}
              <div className="p-4 sm:p-8 border-b border-gray-700">
                <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between mb-6 gap-4">
                  <div>
                    <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">{study.title}</h2>
                    <p className="text-developer-accent text-lg">{study.client} • {study.industry}</p>
                  </div>
                  <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-4">
                    <div className="text-center">
                      <div className="text-sm text-gray-400">Timeline</div>
                      <div className="text-white font-semibold">{study.timeline}</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm text-gray-400">Year</div>
                      <div className="text-white font-semibold">{study.year}</div>
                    </div>
                    <a
                      href={study.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 bg-developer-accent text-white px-4 py-2 rounded-lg hover:bg-opacity-90 transition-colors"
                    >
                      <ExternalLink size={16} />
                      <span>View Live</span>
                    </a>
                  </div>
                </div>
                
                <img 
                  src={study.image} 
                  alt={study.title}
                  className="w-full h-48 sm:h-64 lg:h-80 object-cover rounded-lg"
                />
              </div>

              {/* Content */}
              <div className="p-4 sm:p-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 mb-8 sm:mb-12">
                  {/* Challenge & Solution */}
                  <div className="space-y-6 sm:space-y-8">
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-white mb-4">The Challenge</h3>
                      <p className="text-gray-300 leading-relaxed text-sm sm:text-base">{study.challenge}</p>
                    </div>
                    
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-white mb-4">The Solution</h3>
                      <p className="text-gray-300 leading-relaxed text-sm sm:text-base">{study.solution}</p>
                    </div>

                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-white mb-4">Technologies Used</h3>
                      <div className="flex flex-wrap gap-2">
                        {study.technologies.map((tech, techIndex) => (
                          <span 
                            key={techIndex}
                            className="px-3 py-1 bg-developer-primary text-developer-accent rounded-full text-sm border border-developer-accent/30"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Results */}
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-6">Results Achieved</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
                      {study.results.map((result, resultIndex) => {
                        const Icon = result.icon;
                        return (
                          <div 
                            key={resultIndex}
                            className="bg-developer-primary rounded-lg p-4 text-center border border-gray-700"
                          >
                            <Icon className="w-6 h-6 sm:w-8 sm:h-8 mx-auto mb-3 text-developer-accent" />
                            <div className="text-xl sm:text-2xl font-bold text-white mb-1">{result.improvement}</div>
                            <div className="text-gray-400 text-xs sm:text-sm">{result.metric}</div>
                          </div>
                        );
                      })}
                    </div>

                    {/* Testimonial */}
                    <div className="bg-developer-primary rounded-lg p-4 sm:p-6 border-l-4 border-developer-accent">
                      <blockquote className="text-gray-300 italic mb-4 text-sm sm:text-base">
                        "{study.testimonial}"
                      </blockquote>
                      <div className="text-developer-accent font-medium text-sm sm:text-base">— {study.clientRole}</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-developer-card">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 mb-8 px-4">
              Let's discuss how I can help you achieve similar results for your project.
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

export default CaseStudiesPage;