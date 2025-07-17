import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Award, Calendar, TrendingUp, Download, ExternalLink, Atom, Microscope } from 'lucide-react';

const AcademicsPage: React.FC = () => {
  const semesters = [
    {
      semester: "Semester 1 (2024/07)",
      gpa: 0,
      courses: [
        { code: "NANO1112", name: "Elements of Nanoscience and Nanotechnology", grade: "", credits: 2 },
        { code: "ETCH1110", name: "English for Technology I", grade: "", credits: 0 },
        { code: "NANO1172", name: "Fundamentals of Physics I", grade: "", credits: 2 },
        { code: "NANO1142", name: "Cell Biology", grade: "", credits: 2 },
        { code: "NANO1132", name: "Basic Mathematics", grade: "", credits: 2 },
        { code: "NANO1123", name: "General Chemistry for Technology", grade: "", credits: 3 },
        { code: "NANO1152", name: "Fundamentals of Electronics", grade: "", credits: 2 },
        { code: "NANO1162", name: "Introduction to Computing", grade: "", credits: 2 }
      ]
    },
    {
      semester: "Semester 2 (2025/02) - Continue",
      gpa: 0,
      courses: [
        { code: "NANO1211", name: "Chemistry Laboratory I", grade: "", credits: 2 },
        { code: "NANO1222", name: "Chemical Concepts and Calculations", grade: "", credits: 2 },
        { code: "NANO1232", name: "Fundamentals of Physics II", grade: "", credits: 2 },
        { code: "NANO1242", name: "Computer Programming", grade: "", credits: 2 },
        { code: "NANO1252", name: "Analogue Electronics", grade: "", credits: 2 },
        { code: "NANO1261", name: "Basic Instrumental Techniques", grade: "", credits: 1 },
        { code: "NANO1273", name: "Introduction to Biotechnology", grade: "", credits: 3 },
        { code: "NANO1282", name: "Basic Statistics", grade: "", credits: 2 },
        { code: "ETCH1210", name: "English for Technology II", grade: "", credits: 0 },
        { code: "PDEV1210", name: "Career Development I", grade: "", credits: 2 }
      ]
    }

  ];

  const achievements = [
    
    {
      title: "Best Presentation",
      description: "Won first place for nanomaterials presentation",
      date: "June 2025",
      type: "project"
    },
    {
      title: "Wayamba Robotics Competition – Team DCRM",
      description: "Designed and built a precision line-following robot car; successfully competed representing Team DCRM at Wayamba University.",
      date: "April 2025",
      type: "competition"
    },
    {
      title: "Academic Excellence Scholarship",
      description: "Received merit-based scholarship for outstanding performance",
      date: "2024",
      type: "scholarship"
    },
    {
      title: "Technology Fair Winner",
      description: "First place in School Technology Fair 2023",
      date: "2023",
      type: "competition"
    }
    
  ];

  const certifications = [
  
    {
      name: "Web Development Certificate",
      issuer: "FreeCodeCamp",
      date: "December 2023",
      credentialId: "FCC-WD-2023-001",
      verified: true
    }
  ];

  const getGradeColor = (grade: string) => {
    if (grade.startsWith('A')) return 'text-green-400';
    if (grade.startsWith('B')) return 'text-blue-400';
    if (grade.startsWith('C')) return 'text-yellow-400';
    return 'text-gray-400';
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'academic': return '🎓';
      case 'project': return '🏆';
      case 'scholarship': return '💰';
      case 'competition': return '🥇';
      default: return '⭐';
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
            Academic Journey
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl">
            My academic progress in Material & Nano Science Technology at Wayamba University of Sri Lanka, 
            showcasing coursework, achievements, and continuous learning in nanoscience.
          </p>
        </div>

        {/* Academic Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-dark-800 rounded-xl p-6 text-center border border-gray-700">
            <TrendingUp className="w-8 h-8 mx-auto mb-3 text-primary-400" />
            <div className="text-3xl font-bold text-white">--</div>
            <div className="text-sm text-gray-400">Cumulative GPA</div>
          </div>
          <div className="bg-dark-800 rounded-xl p-6 text-center border border-gray-700">
            <BookOpen className="w-8 h-8 mx-auto mb-3 text-accent-400" />
            <div className="text-3xl font-bold text-white">25%</div>
            <div className="text-sm text-gray-400">Course Completion</div>
          </div>
          <div className="bg-dark-800 rounded-xl p-6 text-center border border-gray-700">
            <Calendar className="w-8 h-8 mx-auto mb-3 text-accent-400" />
            <div className="text-3xl font-bold text-white">2027</div>
            <div className="text-sm text-gray-400">Expected Graduation</div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Academic Timeline */}
          <div className="lg:col-span-2">
            <div className="bg-dark-800 rounded-xl p-8 mb-8 border border-gray-700">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center space-x-3">
                <BookOpen className="text-primary-400" size={24} />
                <span>Academic Timeline</span>
              </h2>
              
              <div className="space-y-8">
                {semesters.map((semester, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="border-l-2 border-primary-500 pl-6 relative"
                  >
                    <div className="absolute -left-3 top-2 w-6 h-6 bg-primary-500 rounded-full flex items-center justify-center">
                      <div className="w-3 h-3 bg-white rounded-full"></div>
                    </div>
                    
                    <div className="bg-dark-700 rounded-lg p-6 border border-gray-600">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="font-bold text-lg text-white">{semester.semester}</h3>
                        <span className="px-3 py-1 bg-primary-500/20 text-primary-400 rounded-full text-sm border border-primary-500/30">
                          GPA: {semester.gpa}
                        </span>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {semester.courses.map((course, courseIndex) => (
                          <div key={courseIndex} className="bg-dark-800 rounded-lg p-4 border border-gray-700">
                            <div className="flex justify-between items-start mb-2">
                              <div>
                                <p className="font-medium text-white text-sm">{course.code}</p>
                                <p className="text-gray-300 text-xs">{course.name}</p>
                              </div>
                              <div className="text-right">
                                <p className={`font-bold ${getGradeColor(course.grade)}`}>{course.grade}</p>
                                <p className="text-gray-400 text-xs">{course.credits} credits</p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Achievements */}
            <div className="bg-dark-800 rounded-xl p-6 border border-gray-700">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center space-x-2">
                <Award className="text-primary-400" size={20} />
                <span>Achievements</span>
              </h3>
              <div className="space-y-4">
                {achievements.map((achievement, index) => (
                  <div key={index} className="bg-dark-700 rounded-lg p-4 border border-gray-600">
                    <div className="flex items-start space-x-3">
                      <span className="text-2xl">{getTypeIcon(achievement.type)}</span>
                      <div className="flex-1">
                        <h4 className="font-medium text-white text-sm">{achievement.title}</h4>
                        <p className="text-gray-300 text-xs mt-1">{achievement.description}</p>
                        <p className="text-gray-400 text-xs mt-2">{achievement.date}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div className="bg-dark-800 rounded-xl p-6 border border-gray-700">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center space-x-2">
                <Award className="text-accent-400" size={20} />
                <span>Certifications</span>
              </h3>
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <div key={index} className="bg-dark-700 rounded-lg p-4 border border-gray-600">
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="font-medium text-white text-sm">{cert.name}</h4>
                      {cert.verified && (
                        <span className="text-green-400 text-xs">✓ Verified</span>
                      )}
                    </div>
                    <p className="text-gray-300 text-xs">{cert.issuer}</p>
                    <p className="text-gray-400 text-xs mt-1">{cert.date}</p>
                    <div className="flex items-center space-x-2 mt-2">
                      <button className="text-primary-400 hover:text-primary-300 text-xs flex items-center space-x-1">
                        <ExternalLink size={12} />
                        <span>View</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-dark-800 rounded-xl p-6 border border-gray-700">
              <h3 className="text-xl font-bold text-white mb-4">Academic Documents</h3>
              <div className="space-y-3">
                <a
                  href="/src/img/transcript.pdf" 
                  download
                  className="w-full flex items-center space-x-2 bg-primary-500/20 hover:bg-primary-500/30 text-primary-400 px-4 py-3 rounded-lg transition-colors border border-primary-500/30"
                >
                  <Download size={16} />
                  <span>Download Transcript</span>
                </a>
                <a
                  href="/src/img/Sample_My_CV.pdf"
                  download
                  className="w-full flex items-center space-x-2 bg-accent-500/20 hover:bg-accent-500/30 text-accent-400 px-4 py-3 rounded-lg transition-colors border border-accent-500/30"
                >
                  <Download size={16} />
                  <span>Download CV</span>
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center space-x-2 bg-gray-700/50 hover:bg-gray-700 text-gray-300 px-4 py-3 rounded-lg transition-colors border border-gray-600"
                >
                  <ExternalLink size={16} />
                  <span>University Portal</span>
                </a>
              </div>
            </div>

          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default AcademicsPage;