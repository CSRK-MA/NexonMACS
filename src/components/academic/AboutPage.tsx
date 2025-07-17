import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Mail, ExternalLink, Award } from 'lucide-react';

const AboutPage: React.FC = () => {
  const education = [
    {
      degree: "Ph.D. in Nanotechnology",
      institution: "University of [Institution]",
      year: "2018-2022",
      description: "Thesis: Advanced Nanomaterials for Energy Applications"
    },
    {
      degree: "M.Sc. in Materials Science",
      institution: "University of [Institution]",
      year: "2016-2018",
      description: "Specialization in Nanoscale Materials Characterization"
    },
    {
      degree: "B.Sc. in Physics",
      institution: "University of [Institution]",
      year: "2012-2016",
      description: "First Class Honours, Dean's List"
    }
  ];

  const researchInterests = [
    "Nanomaterials synthesis and characterization",
    "Applications in renewable energy systems",
    "Surface modification techniques",
    "Quantum dots and nanoparticles",
    "Biomedical applications of nanomaterials"
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Header Section */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <div className="flex flex-col lg:flex-row items-start space-y-6 lg:space-y-0 lg:space-x-8">
            <div className="w-48 h-48 bg-gradient-to-br from-academic-primary to-academic-secondary rounded-lg flex items-center justify-center text-white">
              <span className="text-sm text-center">Professional<br/>Academic Photo</span>
            </div>
            
            <div className="flex-1">
              <h1 className="text-4xl font-playfair font-bold text-gray-800 mb-4">
                Dr. [Your Name]
              </h1>
              <p className="text-xl text-gray-600 mb-4">
                Nanotechnology Researcher & Principal Investigator
              </p>
              
              <div className="flex flex-wrap gap-4 text-gray-600">
                <div className="flex items-center space-x-2">
                  <MapPin size={16} />
                  <span>University of [Institution], Colombo</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail size={16} />
                  <span>researcher@university.edu</span>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <a href="#" className="flex items-center space-x-2 text-academic-primary hover:text-academic-secondary transition-colors">
                  <ExternalLink size={16} />
                  <span>Google Scholar</span>
                </a>
                <a href="#" className="flex items-center space-x-2 text-academic-primary hover:text-academic-secondary transition-colors">
                  <ExternalLink size={16} />
                  <span>ResearchGate</span>
                </a>
                <a href="#" className="flex items-center space-x-2 text-academic-primary hover:text-academic-secondary transition-colors">
                  <ExternalLink size={16} />
                  <span>ORCID</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bio Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
              <h2 className="text-2xl font-playfair font-semibold mb-6 text-gray-800">
                About My Research
              </h2>
              <div className="prose prose-lg text-gray-700 leading-relaxed">
                <p className="mb-4">
                  I am a dedicated nanotechnology researcher with over 5 years of experience in the synthesis, 
                  characterization, and application of advanced nanomaterials. My work focuses on developing 
                  innovative solutions for renewable energy systems and biomedical applications.
                </p>
                <p className="mb-4">
                  Throughout my career, I have published extensively in peer-reviewed journals and presented 
                  my research at international conferences. My interdisciplinary approach combines theoretical 
                  understanding with practical applications, bridging the gap between fundamental science and 
                  real-world solutions.
                </p>
                <p>
                  I am passionate about mentoring the next generation of researchers and actively collaborate 
                  with international research groups to advance the field of nanotechnology.
                </p>
              </div>
            </div>

            {/* Education Timeline */}
            <div className="bg-white rounded-lg shadow-sm p-8">
              <h2 className="text-2xl font-playfair font-semibold mb-6 text-gray-800">
                Education
              </h2>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex space-x-4 border-l-2 border-academic-light pl-6 relative"
                  >
                    <div className="absolute -left-2 top-2 w-4 h-4 bg-academic-primary rounded-full"></div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <GraduationCap className="text-academic-primary" size={20} />
                        <h3 className="font-semibold text-lg text-gray-800">{edu.degree}</h3>
                      </div>
                      <p className="text-academic-primary font-medium">{edu.institution}</p>
                      <p className="text-gray-600 text-sm">{edu.year}</p>
                      <p className="text-gray-700 mt-2">{edu.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Research Interests */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-xl font-playfair font-semibold mb-4 text-gray-800">
                Research Interests
              </h3>
              <ul className="space-y-2">
                {researchInterests.map((interest, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-academic-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">{interest}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Stats */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-xl font-playfair font-semibold mb-4 text-gray-800">
                Research Impact
              </h3>
              <div className="space-y-4">
                <div className="text-center p-4 bg-academic-light rounded-lg">
                  <div className="text-2xl font-bold text-academic-primary">15+</div>
                  <div className="text-sm text-gray-600">Publications</div>
                </div>
                <div className="text-center p-4 bg-academic-light rounded-lg">
                  <div className="text-2xl font-bold text-academic-primary">200+</div>
                  <div className="text-sm text-gray-600">Citations</div>
                </div>
                <div className="text-center p-4 bg-academic-light rounded-lg">
                  <div className="text-2xl font-bold text-academic-primary">5</div>
                  <div className="text-sm text-gray-600">H-Index</div>
                </div>
              </div>
            </div>

            {/* Current Position */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-xl font-playfair font-semibold mb-4 text-gray-800">
                Current Position
              </h3>
              <div className="space-y-3">
                <div className="flex items-start space-x-2">
                  <Award className="text-academic-primary mt-1" size={16} />
                  <div>
                    <p className="font-medium text-gray-800">Research Scientist</p>
                    <p className="text-sm text-gray-600">Nanotechnology Research Lab</p>
                    <p className="text-sm text-gray-600">University of [Institution]</p>
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