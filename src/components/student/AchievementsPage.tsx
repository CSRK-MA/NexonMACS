import React from 'react';
import { motion } from 'framer-motion';
import { Award, Trophy, Medal, Star, Calendar, Users, Target, TrendingUp } from 'lucide-react';

const AchievementsPage: React.FC = () => {
  const achievements = [
    
    {
      title: "Best Project",
      category: "Academic Project",
      date: "March 2024",
      description: "Selected as the best project for innovative AI-powered learning platform",
      icon: Star,
      color: "from-purple-400 to-purple-600",
      level: "Department Level",
      impact: "Top project"
    },
    {
      title: "Academic Excellence Scholarship",
      category: "Scholarship",
      date: "2023",
      description: "Awarded merit-based scholarship for outstanding academic performance",
      icon: Medal,
      color: "from-green-400 to-green-600",
      level: "University Level",
      impact: "Full tuition coverage"
    },
    {
      title: "Programming Contest - 2nd Place",
      category: "Competition",
      date: "2022",
      description: "Second place in the school programming competition",
      icon: Trophy,
      color: "from-orange-400 to-orange-600",
      level: "National Level",
      impact: "Among 100+ participants"
    }
    
  ];

  const skills = [
    {
      category: "Academic & Scientific Skills",
      items: [
        { name: "Spectroscopy & Instrumentation", level: 85 },
        { name: "Material Characterization", level: 80 },
        { name: "Nanomaterial Synthesis", level: 80 },
        { name: "Scientific Data Analysis (Excel, Origin)", level: 85 },
        { name: "Physics Simulations (e.g., PhET, Python Models)", level: 75 },
        { name: "Laboratory Techniques (Biotech/Chemistry)", level: 90 },
        { name: "Technical Writing & Research", level: 85 },
        { name: "Basic Statistics", level: 80 }
      ]
    },
    {
      category: "Programming Languages",
      items: [
        { name: "JavaScript", level: 90 },
        { name: "Python", level: 85 },
        { name: "Java", level: 80 },
        { name: "TypeScript", level: 85 },
        { name: "C", level: 90 },
        { name: "PHP", level: 70 }
      ]
    },
    {
      category: "Web Technologies",
      items: [
        { name: "React", level: 90 },
        { name: "Node.js", level: 85 },
        { name: "Vue.js", level: 80 },
        { name: "Express.js", level: 85 },
        { name: "MongoDB", level: 80 },
        { name: "MySQL", level: 85 }
      ]
    },
    {
      category: "Tools & Platforms",
      items: [
        { name: "Git", level: 90 },
        { name: "Docker", level: 75 },
        { name: "AWS", level: 70 },
        { name: "Firebase", level: 85 },
        { name: "Linux", level: 80 },
        { name: "VS Code", level: 95 }
      ]
    },
    {
      category: "Others",
      items: [
        { name: "Team Collaboration", level: 95 },
        { name: "Public Speaking", level: 85 },
        { name: "Leadership", level: 90 },
        { name: "Project Management", level: 85 },
        { name: "Creative Problem Solving", level: 90 },
        { name: "English Communication", level: 88 },
        { name: "Career Development Planning", level: 80 },
        { name: "Time Management", level: 90 }
      ]
    }
    
  ];

  const extracurricular = [
    {
      title: "Computer Science Society - Vice President",
      period: "2023-2024",
      description: "Led initiatives to organize tech talks, workshops, and coding competitions for 200+ members",
      achievements: ["Organized 5 major events", "Increased membership by 40%", "Established industry partnerships"]
    },
    {
      title: "Coding Club - Founding Member",
      period: "2022-Present",
      description: "Co-founded the university coding club to promote programming culture among students",
      achievements: ["Weekly coding sessions", "Mentored 30+ junior students", "Organized hackathons"]
    },
    {
      title: "Open Source Contributor",
      period: "2022-Present",
      description: "Active contributor to various open source projects on GitHub",
      achievements: ["50+ contributions", "3 featured projects", "Community recognition"]
    }
  ];

  const certifications = [
    {
      name: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services",
      date: "March 2024",
      credentialId: "AWS-CCP-2024-001"
    },
    {
      name: "Google Analytics Certified",
      issuer: "Google",
      date: "January 2024",
      credentialId: "GA-CERT-2024-001"
    },
    {
      name: "MongoDB Developer Certification",
      issuer: "MongoDB University",
      date: "February 2024",
      credentialId: "MDB-DEV-2024-001"
    },
    {
      name: "React Developer Certification",
      issuer: "Meta",
      date: "December 2023",
      credentialId: "META-REACT-2023-001"
    }
  ];

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
            Achievements & Recognition
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl">
            A comprehensive overview of my academic achievements, technical skills, 
            certifications, and extracurricular contributions during my university journey.
          </p>
        </div>

        {/* Achievement Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-dark-800 rounded-xl p-6 text-center border border-gray-700">
            <Award className="w-8 h-8 mx-auto mb-3 text-primary-400" />
            <div className="text-3xl font-bold text-white">{achievements.length}</div>
            <div className="text-sm text-gray-400">Total Achievements</div>
          </div>
          <div className="bg-dark-800 rounded-xl p-6 text-center border border-gray-700">
            <Trophy className="w-8 h-8 mx-auto mb-3 text-accent-400" />
            <div className="text-3xl font-bold text-white">3</div>
            <div className="text-sm text-gray-400">Competition Wins</div>
          </div>
          <div className="bg-dark-800 rounded-xl p-6 text-center border border-gray-700">
            <Star className="w-8 h-8 mx-auto mb-3 text-primary-400" />
            <div className="text-3xl font-bold text-white">4</div>
            <div className="text-sm text-gray-400">Certifications</div>
          </div>
          <div className="bg-dark-800 rounded-xl p-6 text-center border border-gray-700">
            <TrendingUp className="w-8 h-8 mx-auto mb-3 text-accent-400" />
            <div className="text-3xl font-bold text-white">--</div>
            <div className="text-sm text-gray-400">Current GPA</div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Achievements */}
          <div className="lg:col-span-2">
            <div className="bg-dark-800 rounded-xl p-8 mb-8 border border-gray-700">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center space-x-3">
                <Trophy className="text-primary-400" size={24} />
                <span>Major Achievements</span>
              </h2>
              
              <div className="space-y-6">
                {achievements.map((achievement, index) => {
                  const Icon = achievement.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-dark-700 rounded-lg p-6 border border-gray-600 hover:border-gray-500 transition-colors"
                    >
                      <div className="flex items-start space-x-4">
                        <div className={`p-3 rounded-lg bg-gradient-to-r ${achievement.color} shadow-lg`}>
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-start justify-between mb-2">
                            <h3 className="font-bold text-lg text-white">{achievement.title}</h3>
                            <span className="text-sm text-gray-400">{achievement.date}</span>
                          </div>
                          <div className="flex items-center space-x-4 mb-3">
                            <span className="px-3 py-1 bg-primary-500/20 text-primary-400 rounded-full text-sm border border-primary-500/30">
                              {achievement.category}
                            </span>
                            <span className="px-3 py-1 bg-accent-500/20 text-accent-400 rounded-full text-sm border border-accent-500/30">
                              {achievement.level}
                            </span>
                          </div>
                          <p className="text-gray-300 mb-3">{achievement.description}</p>
                          <div className="flex items-center space-x-2">
                            <Target className="w-4 h-4 text-accent-400" />
                            <span className="text-sm text-accent-400 font-medium">{achievement.impact}</span>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Skills Section */}
            <div className="bg-dark-800 rounded-xl p-8 border border-gray-700">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center space-x-3">
                <Star className="text-accent-400" size={24} />
                <span>Skills</span>
              </h2>
              
              <div className="space-y-8">
                {skills.map((skillCategory, index) => (
                  <div key={index}>
                    <h3 className="text-lg font-semibold text-white mb-4">{skillCategory.category}</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {skillCategory.items.map((skill, skillIndex) => (
                        <div key={skillIndex} className="bg-dark-700 rounded-lg p-4 border border-gray-600">
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-white font-medium">{skill.name}</span>
                            <span className="text-primary-400 text-sm">{skill.level}%</span>
                          </div>
                          <div className="w-full bg-gray-600 rounded-full h-2">
                            <motion.div
                              initial={{ width: 0 }}
                              animate={{ width: `${skill.level}%` }}
                              transition={{ delay: index * 0.1 + skillIndex * 0.05, duration: 0.8 }}
                              className="bg-gradient-to-r from-primary-500 to-accent-500 h-2 rounded-full"
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Certifications */}
            <div className="bg-dark-800 rounded-xl p-6 border border-gray-700">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center space-x-2">
                <Medal className="text-primary-400" size={20} />
                <span>Certifications</span>
              </h3>
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <div key={index} className="bg-dark-700 rounded-lg p-4 border border-gray-600">
                    <h4 className="font-medium text-white text-sm mb-1">{cert.name}</h4>
                    <p className="text-gray-300 text-xs mb-2">{cert.issuer}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400 text-xs">{cert.date}</span>
                      <span className="text-green-400 text-xs">✓ Verified</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Extracurricular Activities */}
            <div className="bg-dark-800 rounded-xl p-6 border border-gray-700">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center space-x-2">
                <Users className="text-accent-400" size={20} />
                <span>Leadership & Activities</span>
              </h3>
              <div className="space-y-4">
                {extracurricular.map((activity, index) => (
                  <div key={index} className="bg-dark-700 rounded-lg p-4 border border-gray-600">
                    <h4 className="font-medium text-white text-sm mb-1">{activity.title}</h4>
                    <p className="text-gray-400 text-xs mb-2">{activity.period}</p>
                    <p className="text-gray-300 text-xs mb-3">{activity.description}</p>
                    <div className="space-y-1">
                      {activity.achievements.map((achievement, achIndex) => (
                        <div key={achIndex} className="flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 bg-accent-400 rounded-full"></div>
                          <span className="text-gray-300 text-xs">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Stats */}
            <div className="bg-dark-800 rounded-xl p-6 border border-gray-700">
              <h3 className="text-xl font-bold text-white mb-4">Quick Stats</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">GitHub Contributions</span>
                  <span className="text-primary-400 font-bold">500+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Projects Completed</span>
                  <span className="text-accent-400 font-bold">15+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Students Mentored</span>
                  <span className="text-primary-400 font-bold">30+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Events Organized</span>
                  <span className="text-accent-400 font-bold">8</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default AchievementsPage;