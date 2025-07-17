import React from 'react';
import { motion } from 'framer-motion';
import { Download, Award, GraduationCap, Briefcase, Users, BookOpen } from 'lucide-react';

const CVPage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-playfair font-bold text-gray-800 mb-4">
              Curriculum Vitae
            </h1>
            <p className="text-lg text-gray-600">
              Complete academic and professional background
            </p>
          </div>
          <button className="flex items-center space-x-2 bg-academic-primary text-white px-6 py-3 rounded-lg hover:bg-academic-secondary transition-colors">
            <Download size={20} />
            <span>Download PDF</span>
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Education */}
            <div className="bg-white rounded-lg shadow-sm p-8">
              <div className="flex items-center space-x-3 mb-6">
                <GraduationCap className="text-academic-primary" size={24} />
                <h2 className="text-2xl font-playfair font-semibold text-gray-800">Education</h2>
              </div>
              <div className="space-y-6">
                <div className="border-l-2 border-academic-light pl-6 relative">
                  <div className="absolute -left-2 top-2 w-4 h-4 bg-academic-primary rounded-full"></div>
                  <h3 className="font-semibold text-lg text-gray-800">Ph.D. in Nanotechnology</h3>
                  <p className="text-academic-primary font-medium">University of [Institution]</p>
                  <p className="text-gray-600">2018-2022</p>
                  <p className="text-gray-700 mt-2">
                    Thesis: "Advanced Nanomaterials for Energy Applications"<br/>
                    Supervisor: Prof. [Name]<br/>
                    GPA: 3.9/4.0
                  </p>
                </div>
                <div className="border-l-2 border-academic-light pl-6 relative">
                  <div className="absolute -left-2 top-2 w-4 h-4 bg-academic-primary rounded-full"></div>
                  <h3 className="font-semibold text-lg text-gray-800">M.Sc. in Materials Science</h3>
                  <p className="text-academic-primary font-medium">University of [Institution]</p>
                  <p className="text-gray-600">2016-2018</p>
                  <p className="text-gray-700 mt-2">
                    Specialization: Nanoscale Materials Characterization<br/>
                    GPA: 3.8/4.0
                  </p>
                </div>
                <div className="border-l-2 border-academic-light pl-6 relative">
                  <div className="absolute -left-2 top-2 w-4 h-4 bg-academic-primary rounded-full"></div>
                  <h3 className="font-semibold text-lg text-gray-800">B.Sc. in Physics</h3>
                  <p className="text-academic-primary font-medium">University of [Institution]</p>
                  <p className="text-gray-600">2012-2016</p>
                  <p className="text-gray-700 mt-2">
                    First Class Honours, Dean's List<br/>
                    GPA: 3.7/4.0
                  </p>
                </div>
              </div>
            </div>

            {/* Research Experience */}
            <div className="bg-white rounded-lg shadow-sm p-8">
              <div className="flex items-center space-x-3 mb-6">
                <Briefcase className="text-academic-primary" size={24} />
                <h2 className="text-2xl font-playfair font-semibold text-gray-800">Research Experience</h2>
              </div>
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-lg text-gray-800">Research Scientist</h3>
                  <p className="text-academic-primary font-medium">Nanotechnology Research Lab, University of [Institution]</p>
                  <p className="text-gray-600">2022 - Present</p>
                  <ul className="mt-2 text-gray-700 space-y-1">
                    <li>• Lead research on advanced nanomaterials for energy applications</li>
                    <li>• Supervise 3 graduate students and 2 postdoctoral researchers</li>
                    <li>• Secure and manage research funding exceeding $500,000</li>
                    <li>• Collaborate with international research teams</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-800">Postdoctoral Research Fellow</h3>
                  <p className="text-academic-primary font-medium">Advanced Materials Institute</p>
                  <p className="text-gray-600">2022 - 2023</p>
                  <ul className="mt-2 text-gray-700 space-y-1">
                    <li>• Developed novel synthesis methods for quantum dots</li>
                    <li>• Published 5 peer-reviewed articles in top-tier journals</li>
                    <li>• Presented research at 3 international conferences</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-800">Graduate Research Assistant</h3>
                  <p className="text-academic-primary font-medium">Materials Science Department</p>
                  <p className="text-gray-600">2018 - 2022</p>
                  <ul className="mt-2 text-gray-700 space-y-1">
                    <li>• Conducted research on nanomaterial synthesis and characterization</li>
                    <li>• Assisted in teaching undergraduate courses</li>
                    <li>• Co-authored 8 research publications</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Publications Summary */}
            <div className="bg-white rounded-lg shadow-sm p-8">
              <div className="flex items-center space-x-3 mb-6">
                <BookOpen className="text-academic-primary" size={24} />
                <h2 className="text-2xl font-playfair font-semibold text-gray-800">Publications Summary</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center p-4 bg-academic-light rounded-lg">
                  <div className="text-2xl font-bold text-academic-primary mb-2">15</div>
                  <div className="text-gray-600">Peer-reviewed Articles</div>
                </div>
                <div className="text-center p-4 bg-academic-light rounded-lg">
                  <div className="text-2xl font-bold text-academic-primary mb-2">8</div>
                  <div className="text-gray-600">Conference Papers</div>
                </div>
                <div className="text-center p-4 bg-academic-light rounded-lg">
                  <div className="text-2xl font-bold text-academic-primary mb-2">2</div>
                  <div className="text-gray-600">Book Chapters</div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Contact Information */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-xl font-playfair font-semibold mb-4 text-gray-800">Contact</h3>
              <div className="space-y-2 text-gray-700">
                <p>Email: researcher@university.edu</p>
                <p>Phone: +94 11 123 4567</p>
                <p>Office: Room 301, Science Building</p>
                <p>University of [Institution]</p>
                <p>Colombo, Sri Lanka</p>
              </div>
            </div>

            {/* Awards & Honors */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center space-x-2 mb-4">
                <Award className="text-academic-primary" size={20} />
                <h3 className="text-xl font-playfair font-semibold text-gray-800">Awards & Honors</h3>
              </div>
              <div className="space-y-3 text-gray-700">
                <div>
                  <p className="font-medium">Excellence in Research Award</p>
                  <p className="text-sm text-gray-600">University of [Institution], 2023</p>
                </div>
                <div>
                  <p className="font-medium">Best Paper Award</p>
                  <p className="text-sm text-gray-600">ICONN Conference, 2022</p>
                </div>
                <div>
                  <p className="font-medium">Outstanding Graduate Student</p>
                  <p className="text-sm text-gray-600">Materials Science Dept., 2022</p>
                </div>
                <div>
                  <p className="font-medium">Dean's List</p>
                  <p className="text-sm text-gray-600">2014-2016</p>
                </div>
              </div>
            </div>

            {/* Professional Memberships */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center space-x-2 mb-4">
                <Users className="text-academic-primary" size={20} />
                <h3 className="text-xl font-playfair font-semibold text-gray-800">Memberships</h3>
              </div>
              <div className="space-y-2 text-gray-700">
                <p>• American Chemical Society (ACS)</p>
                <p>• Materials Research Society (MRS)</p>
                <p>• IEEE Nanotechnology Society</p>
                <p>• Sri Lanka Association for Scientists</p>
              </div>
            </div>

            {/* Skills */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-xl font-playfair font-semibold mb-4 text-gray-800">Technical Skills</h3>
              <div className="space-y-3">
                <div>
                  <p className="font-medium text-gray-800">Synthesis Techniques</p>
                  <p className="text-sm text-gray-600">Hydrothermal, Sol-gel, CVD</p>
                </div>
                <div>
                  <p className="font-medium text-gray-800">Characterization</p>
                  <p className="text-sm text-gray-600">XRD, SEM, TEM, UV-Vis, FTIR</p>
                </div>
                <div>
                  <p className="font-medium text-gray-800">Software</p>
                  <p className="text-sm text-gray-600">Origin, ImageJ, ChemDraw</p>
                </div>
                <div>
                  <p className="font-medium text-gray-800">Programming</p>
                  <p className="text-sm text-gray-600">Python, MATLAB, R</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default CVPage;