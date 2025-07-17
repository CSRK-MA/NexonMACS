import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Mail, Calendar, User, Heart, Target, Lightbulb, Atom, Microscope, Bot } from 'lucide-react';

const AboutPage: React.FC = () => {
  const interests = [
    "Nanomaterial Synthesis",
    "Material Characterization",
    "Quantum Dots Research",
    "Robotics & Automation",
    "Innovation & Technology",
    "Full-Stack Web Development",
    "Mobile App Development",
    "Machine Learning Applications",
    "Database Management",
    "UI/UX Design"
  ];

  const goals = [
    {
      icon: Target,
      title: "Short-term Goals",
      items: [
        "Complete Bachelor's degree with First Class Honours",
        "Publish research paper on nanomaterials",
        "Master advanced web development frameworks",
        "Complete final year research project",
        "Develop robotics projects with nano-applications"
      ]
    },
    {
      icon: Lightbulb,
      title: "Long-term Vision",
      items: [
        "Pursue Master's in Material Science",
        "Become a Research Scientist",
        "Bridge nanotechnology with robotics",
        "Contribute to Sri Lankan tech ecosystem",
        "Innovate in nano-robotics field"
      ]
    }
  ];

  const researchAreas = [
    {
      icon: Atom,
      title: "Nanomaterial Synthesis",
      description: "Exploring novel synthesis methods for advanced nanomaterials with applications in electronics and medicine"
    },
    {
      icon: Microscope,
      title: "Material Characterization",
      description: "Using advanced techniques like XRD, SEM, FTIR, and UV-Vis spectroscopy for comprehensive analysis"
    },
    {
      icon: Bot,
      title: "Nano-Robotics",
      description: "Investigating the integration of nanomaterials in robotic systems for enhanced functionality"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Header Section */}
        <div className="bg-dark-800 rounded-xl shadow-xl p-6 sm:p-8 mb-8 border border-gray-700">
          <div className="flex flex-col lg:flex-row items-center lg:items-start space-y-6 lg:space-y-0 lg:space-x-8">
            <div className="w-40 h-40 sm:w-48 sm:h-48 bg-gradient-to-br from-primary-500 to-accent-500 rounded-xl flex items-center justify-center text-white shadow-2xl overflow-hidden flex-shrink-0">
              <img 
                src="img/14.jpg"
                alt="Shehan R. Kumara"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.nextElementSibling?.classList.remove('hidden');
                }}
              />
              <div className="hidden w-full h-full flex items-center justify-center">
                <div className="text-center">
                  <User className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-2" />
                  <span className="text-sm font-medium">Shehan R. Kumara</span>
                </div>
              </div>
            </div>
            
            <div className="flex-1 text-center lg:text-left">
              <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4 bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
                Shehan R. Kumara
              </h1>
              <p className="text-lg sm:text-xl text-gray-300 mb-4">
                Material & Nano Science Technology Undergraduate
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 text-gray-300 mb-6">
                <div className="flex items-center justify-center lg:justify-start space-x-2">
                  <GraduationCap size={16} className="text-primary-400 flex-shrink-0" />
                  <span className="text-sm sm:text-base">Wayamba University of Sri Lanka</span>
                </div>
                <div className="flex items-center justify-center lg:justify-start space-x-2">
                  <Calendar size={16} className="text-primary-400 flex-shrink-0" />
                  <span className="text-sm sm:text-base">Expected Graduation: 2027</span>
                </div>
                <div className="flex items-center justify-center lg:justify-start space-x-2">
                  <MapPin size={16} className="text-primary-400 flex-shrink-0" />
                  <span className="text-sm sm:text-base">Gampaha, Sri Lanka</span>
                </div>
                <div className="flex items-center justify-center lg:justify-start space-x-2">
                  <Mail size={16} className="text-primary-400 flex-shrink-0" />
                  <span className="text-sm sm:text-base">fot239118@kul.wyb.ac.lk</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 sm:gap-3 justify-center lg:justify-start">
                <span className="px-3 sm:px-4 py-2 bg-primary-500/20 text-primary-400 rounded-lg border border-primary-500/30 text-sm">
                  Current GPA: --
                </span>
                <span className="px-3 sm:px-4 py-2 bg-accent-500/20 text-accent-400 rounded-lg border border-accent-500/30 text-sm">
                  Year 2 Student
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* About Me Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-dark-800 rounded-xl shadow-xl p-6 sm:p-8 border border-gray-700">
              <div className="flex items-center space-x-3 mb-6">
                <Heart className="text-primary-400" size={24} />
                <h2 className="text-xl sm:text-2xl font-bold text-white">About Me</h2>
              </div>
              <div className="prose prose-lg text-gray-300 leading-relaxed space-y-4 text-sm sm:text-base">
                <p> I am an enthusiastic undergraduate specializing in <strong>Material and Nano Science Technology</strong> at Wayamba University of Sri Lanka. Currently in my first year, my academic journey began with a deep curiosity about how materials function at the nanoscale — a field that holds transformative potential across energy, healthcare, and advanced robotics. 
                </p> 
                <p> My commitment to academic excellence is matched by my passion for hands-on learning. I actively engage in <strong>research projects</strong> and cross-disciplinary activities, particularly in <strong>nanomaterial development, robotics, and web technologies</strong>. I believe that innovation thrives at the intersection of science and technology, which motivates me to build both theoretical knowledge and practical skills. 
                </p> 
                <p> My current research interests include the <strong>synthesis and characterization of nanomaterials</strong>, with a strong focus on their applications in <strong>renewable energy systems, biomedical engineering, and nano-robotics</strong>. I am preparing for an upcoming research project that involves the synthesis of <strong>quantum dots for solar cell applications</strong>, with an emphasis on smart integration with robotic technologies. 
                </p> 
                <p> Beyond the lab, I am passionate about <strong>developing applications</strong>, participating in <strong>robotics challenges</strong>, and mentoring junior peers. I actively take part in science outreach programs and competitions, aiming to translate advanced scientific ideas into real-world solutions. My long-term goal is to contribute to cutting-edge innovations that bridge <strong>fundamental material science research and scalable technology</strong>. 
                </p>
              </div>
            </div>

            {/* Research Areas */}
            <div className="bg-dark-800 rounded-xl shadow-xl p-6 sm:p-8 border border-gray-700">
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-6 flex items-center space-x-3">
                <Microscope className="text-accent-400" size={24} />
                <span>Research Areas</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {researchAreas.map((area, index) => {
                  const Icon = area.icon;
                  return (
                    <div key={index} className="bg-dark-700 rounded-lg p-4 sm:p-6 border border-gray-600">
                      <Icon className="text-primary-400 mb-3" size={32} />
                      <h3 className="text-base sm:text-lg font-bold text-white mb-2">{area.title}</h3>
                      <p className="text-gray-300 text-sm">{area.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Goals Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {goals.map((goal, index) => {
                const Icon = goal.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-dark-800 rounded-xl p-6 border border-gray-700"
                  >
                    <div className="flex items-center space-x-3 mb-4">
                      <Icon className="text-accent-400" size={24} />
                      <h3 className="text-lg sm:text-xl font-bold text-white">{goal.title}</h3>
                    </div>
                    <ul className="space-y-2">
                      {goal.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start space-x-2">
                          <div className="w-2 h-2 bg-accent-400 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-300 text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Interests */}
            <div className="bg-dark-800 rounded-xl shadow-xl p-6 border border-gray-700">
              <h3 className="text-lg sm:text-xl font-bold text-white mb-4 flex items-center space-x-2">
                <Lightbulb className="text-primary-400" size={20} />
                <span>Interests & Passions</span>
              </h3>
              <div className="flex flex-wrap gap-2">
                {interests.map((interest, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1 bg-primary-500/20 text-primary-400 rounded-full text-xs sm:text-sm border border-primary-500/30 hover:bg-primary-500/30 transition-colors"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>

            {/* Quick Stats */}
            <div className="bg-dark-800 rounded-xl shadow-xl p-6 border border-gray-700">
              <h3 className="text-lg sm:text-xl font-bold text-white mb-4">Academic Stats</h3>
              <div className="space-y-4">
                <div className="text-center p-4 bg-primary-500/20 rounded-lg border border-primary-500/30">
                  <div className="text-xl sm:text-2xl font-bold text-primary-400">--</div>
                  <div className="text-xs sm:text-sm text-gray-400">Current GPA</div>
                </div>
                <div className="text-center p-4 bg-accent-500/20 rounded-lg border border-accent-500/30">
                  <div className="text-xl sm:text-2xl font-bold text-accent-400">25%</div>
                  <div className="text-xs sm:text-sm text-gray-400">Course Completion</div>
                </div>
                <div className="text-center p-4 bg-gray-700/50 rounded-lg border border-gray-600">
                  <div className="text-xl sm:text-2xl font-bold text-gray-300">5+</div>
                  <div className="text-xs sm:text-sm text-gray-400">Projects Completed</div>
                </div>
              </div>
            </div>

            {/* Current Status */}
            <div className="bg-dark-800 rounded-xl shadow-xl p-6 border border-gray-700">
              <h3 className="text-lg sm:text-xl font-bold text-white mb-4">Current Status</h3>
              <div className="space-y-3">
                
                <div className="flex items-start space-x-3">
                  <div className="w-3 h-3 bg-blue-400 rounded-full mt-1.5 flex-shrink-0"></div>
                  <div>
                    <p className="font-medium text-white text-sm sm:text-base">Mini Project</p>
                    <p className="text-xs sm:text-sm text-gray-400">Safty helment - Real-time accident detection</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-3 h-3 bg-purple-400 rounded-full mt-1.5 flex-shrink-0"></div>
                  <div>
                    <p className="font-medium text-white text-sm sm:text-base">Open to Collaborate</p>
                    <p className="text-xs sm:text-sm text-gray-400">Research projects & hackathons</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-3 h-3 bg-green-400 rounded-full mt-1.5 flex-shrink-0"></div>
                  <div>
                    <p className="font-medium text-white text-sm sm:text-base">Robotics Enthusiast</p>
                    <p className="text-xs sm:text-sm text-gray-400">Exploring nano-robotics applications</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default AboutPage;
