import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Users, Award, ExternalLink } from 'lucide-react';

const ResearchPage: React.FC = () => {
  const projects = [
    {
      title: "Advanced Nanomaterials for Solar Energy Conversion",
      duration: "2022 - Present",
      status: "Ongoing",
      image: "https://images.pexels.com/photos/2023384/pexels-photo-2023384.jpeg?auto=compress&cs=tinysrgb&w=400",
      abstract: "Development of novel nanostructured materials for enhanced photovoltaic efficiency. This project focuses on synthesizing quantum dots and perovskite nanoparticles to improve light absorption and charge transport in solar cells.",
      methodology: "Hydrothermal synthesis, X-ray diffraction, UV-Vis spectroscopy, electrochemical characterization",
      findings: "Achieved 18% improvement in power conversion efficiency compared to conventional materials",
      collaborators: ["Dr. Jane Smith (University A)", "Prof. John Doe (Institute B)"],
      funding: "National Science Foundation Grant #12345",
      publications: 3
    },
    {
      title: "Biocompatible Nanoparticles for Drug Delivery",
      duration: "2021 - 2022",
      status: "Completed",
      image: "https://images.pexels.com/photos/3735747/pexels-photo-3735747.jpeg?auto=compress&cs=tinysrgb&w=400",
      abstract: "Investigation of biocompatible nanoparticles for targeted drug delivery in cancer treatment. Focus on surface functionalization and controlled release mechanisms.",
      methodology: "Emulsion polymerization, FTIR spectroscopy, cell viability assays, drug release kinetics",
      findings: "Developed nanoparticles with 95% drug encapsulation efficiency and controlled release over 72 hours",
      collaborators: ["Dr. Medical Researcher (Hospital C)", "Prof. Bio Engineer (University D)"],
      funding: "Medical Research Council Grant #67890",
      publications: 2
    },
    {
      title: "Surface-Modified Carbon Nanotubes for Environmental Applications",
      duration: "2020 - 2021",
      status: "Completed",
      image: "https://images.pexels.com/photos/2280545/pexels-photo-2280545.jpeg?auto=compress&cs=tinysrgb&w=400",
      abstract: "Synthesis and characterization of functionalized carbon nanotubes for water purification and air filtration applications.",
      methodology: "Chemical vapor deposition, surface functionalization, adsorption isotherms, filtration efficiency testing",
      findings: "Achieved 99.9% removal efficiency for heavy metals and organic pollutants",
      collaborators: ["Environmental Research Institute", "Water Treatment Company"],
      funding: "Environmental Protection Agency Grant #54321",
      publications: 4
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
          <h1 className="text-4xl font-playfair font-bold text-gray-800 mb-4">
            Research Projects
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl">
            Explore my research portfolio spanning advanced nanomaterials, biomedical applications, 
            and environmental solutions. Each project represents a commitment to pushing the boundaries 
            of nanotechnology.
          </p>
        </div>

        {/* Research Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-sm p-6 text-center">
            <div className="text-3xl font-bold text-academic-primary mb-2">8</div>
            <div className="text-gray-600">Active Projects</div>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-6 text-center">
            <div className="text-3xl font-bold text-academic-primary mb-2">$2.5M</div>
            <div className="text-gray-600">Total Funding</div>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-6 text-center">
            <div className="text-3xl font-bold text-academic-primary mb-2">12</div>
            <div className="text-gray-600">Collaborators</div>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-6 text-center">
            <div className="text-3xl font-bold text-academic-primary mb-2">5</div>
            <div className="text-gray-600">Countries</div>
          </div>
        </div>

        {/* Research Projects */}
        <div className="space-y-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-sm overflow-hidden"
            >
              <div className="flex flex-col lg:flex-row">
                <div className="lg:w-1/3">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-64 lg:h-full object-cover"
                  />
                </div>
                <div className="lg:w-2/3 p-8">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-2xl font-playfair font-semibold text-gray-800">
                      {project.title}
                    </h2>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      project.status === 'Ongoing' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-blue-100 text-blue-800'
                    }`}>
                      {project.status}
                    </span>
                  </div>

                  <div className="flex items-center space-x-6 text-gray-600 mb-6">
                    <div className="flex items-center space-x-2">
                      <Calendar size={16} />
                      <span>{project.duration}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Award size={16} />
                      <span>{project.publications} Publications</span>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-2">Abstract</h3>
                      <p className="text-gray-700 leading-relaxed">{project.abstract}</p>
                    </div>

                    <div>
                      <h3 className="font-semibold text-gray-800 mb-2">Methodology</h3>
                      <p className="text-gray-700">{project.methodology}</p>
                    </div>

                    <div>
                      <h3 className="font-semibold text-gray-800 mb-2">Key Findings</h3>
                      <p className="text-gray-700">{project.findings}</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h3 className="font-semibold text-gray-800 mb-2">Collaborators</h3>
                        <ul className="text-gray-700 text-sm space-y-1">
                          {project.collaborators.map((collaborator, idx) => (
                            <li key={idx} className="flex items-center space-x-2">
                              <Users size={14} />
                              <span>{collaborator}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-800 mb-2">Funding</h3>
                        <div className="flex items-center space-x-2 text-gray-700 text-sm">
                          <Award size={14} />
                          <span>{project.funding}</span>
                        </div>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-gray-200">
                      <button className="flex items-center space-x-2 text-academic-primary hover:text-academic-secondary transition-colors">
                        <ExternalLink size={16} />
                        <span>View Related Publications</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default ResearchPage;