import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Search, Filter, ExternalLink, Download, Quote } from 'lucide-react';

const PublicationsPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedYear, setSelectedYear] = useState('all');
  const [selectedType, setSelectedType] = useState('all');

  const publications = [
    {
      type: 'journal',
      title: 'Enhanced Photovoltaic Performance of Perovskite Solar Cells through Quantum Dot Integration',
      authors: 'Your Name, J. Smith, M. Johnson, K. Lee',
      journal: 'Nature Energy',
      year: 2023,
      volume: '8',
      pages: '234-245',
      doi: '10.1038/s41560-023-01234-5',
      citations: 45,
      abstract: 'This study demonstrates a novel approach to integrating quantum dots into perovskite solar cells, resulting in significant improvements in power conversion efficiency and stability.',
      pdfAvailable: true
    },
    {
      type: 'journal',
      title: 'Biocompatible Nanoparticles for Targeted Cancer Therapy: A Comprehensive Review',
      authors: 'Your Name, A. Medical, B. Research',
      journal: 'Advanced Drug Delivery Reviews',
      year: 2023,
      volume: '185',
      pages: '114-128',
      doi: '10.1016/j.addr.2023.114283',
      citations: 38,
      abstract: 'A comprehensive review of current developments in biocompatible nanoparticles for targeted cancer therapy applications.',
      pdfAvailable: true
    },
    {
      type: 'conference',
      title: 'Surface Functionalization of Carbon Nanotubes for Environmental Remediation',
      authors: 'Your Name, C. Environment, D. Green',
      conference: 'International Conference on Nanotechnology (ICONN)',
      year: 2022,
      location: 'Tokyo, Japan',
      pages: '456-461',
      citations: 12,
      abstract: 'Investigation of surface modification techniques for carbon nanotubes to enhance their effectiveness in environmental cleanup applications.',
      pdfAvailable: false
    },
    {
      type: 'journal',
      title: 'Synthesis and Characterization of Novel Nanomaterials for Energy Storage',
      authors: 'Your Name, E. Energy, F. Storage, G. Battery',
      journal: 'Journal of Materials Chemistry A',
      year: 2022,
      volume: '10',
      pages: '12345-12358',
      doi: '10.1039/D2TA03456B',
      citations: 67,
      abstract: 'Development of innovative nanomaterials with enhanced properties for next-generation energy storage devices.',
      pdfAvailable: true
    },
    {
      type: 'journal',
      title: 'Quantum Dots in Biomedical Imaging: Current Status and Future Prospects',
      authors: 'Your Name, H. Medical, I. Imaging',
      journal: 'Chemical Reviews',
      year: 2021,
      volume: '121',
      pages: '8976-9012',
      doi: '10.1021/acs.chemrev.1c00234',
      citations: 89,
      abstract: 'Comprehensive analysis of quantum dot applications in biomedical imaging with focus on recent advances and future directions.',
      pdfAvailable: true
    }
  ];

  const years = [...new Set(publications.map(pub => pub.year))].sort((a, b) => b - a);
  const types = [
    { value: 'all', label: 'All Types' },
    { value: 'journal', label: 'Journal Articles' },
    { value: 'conference', label: 'Conference Papers' },
    { value: 'patent', label: 'Patents' }
  ];

  const filteredPublications = publications.filter(pub => {
    const matchesSearch = pub.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         pub.authors.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesYear = selectedYear === 'all' || pub.year.toString() === selectedYear;
    const matchesType = selectedType === 'all' || pub.type === selectedType;
    return matchesSearch && matchesYear && matchesType;
  });

  const totalCitations = publications.reduce((sum, pub) => sum + pub.citations, 0);

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
            Publications
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl">
            A comprehensive collection of my research publications, including peer-reviewed journal articles, 
            conference papers, and patents in the field of nanotechnology.
          </p>
        </div>

        {/* Publication Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-sm p-6 text-center">
            <div className="text-3xl font-bold text-academic-primary mb-2">{publications.length}</div>
            <div className="text-gray-600">Total Publications</div>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-6 text-center">
            <div className="text-3xl font-bold text-academic-primary mb-2">{totalCitations}</div>
            <div className="text-gray-600">Total Citations</div>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-6 text-center">
            <div className="text-3xl font-bold text-academic-primary mb-2">5</div>
            <div className="text-gray-600">H-Index</div>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-6 text-center">
            <div className="text-3xl font-bold text-academic-primary mb-2">8</div>
            <div className="text-gray-600">i10-Index</div>
          </div>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search publications..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-academic-primary focus:border-transparent"
              />
            </div>
            <select
              value={selectedYear}
              onChange={(e) => setSelectedYear(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-academic-primary focus:border-transparent"
            >
              <option value="all">All Years</option>
              {years.map(year => (
                <option key={year} value={year.toString()}>{year}</option>
              ))}
            </select>
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-academic-primary focus:border-transparent"
            >
              {types.map(type => (
                <option key={type.value} value={type.value}>{type.label}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Publications List */}
        <div className="space-y-6">
          {filteredPublications.map((publication, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <BookOpen className="text-academic-primary" size={20} />
                  <span className={`px-2 py-1 rounded text-xs font-medium ${
                    publication.type === 'journal' 
                      ? 'bg-blue-100 text-blue-800'
                      : publication.type === 'conference'
                      ? 'bg-green-100 text-green-800'
                      : 'bg-purple-100 text-purple-800'
                  }`}>
                    {publication.type === 'journal' ? 'Journal Article' : 
                     publication.type === 'conference' ? 'Conference Paper' : 'Patent'}
                  </span>
                </div>
                <div className="flex items-center space-x-2 text-gray-500">
                  <Quote size={16} />
                  <span className="text-sm">{publication.citations} citations</span>
                </div>
              </div>

              <h3 className="text-xl font-playfair font-semibold text-gray-800 mb-3">
                {publication.title}
              </h3>

              <p className="text-gray-600 mb-3">{publication.authors}</p>

              <div className="text-gray-700 mb-4">
                {publication.type === 'journal' ? (
                  <span>
                    <em>{publication.journal}</em>, {publication.year}, Vol. {publication.volume}, 
                    pp. {publication.pages}
                  </span>
                ) : (
                  <span>
                    <em>{publication.conference}</em>, {publication.year}, {publication.location}
                  </span>
                )}
              </div>

              <p className="text-gray-700 mb-4 leading-relaxed">
                {publication.abstract}
              </p>

              <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                <div className="flex items-center space-x-4">
                  {publication.doi && (
                    <a
                      href={`https://doi.org/${publication.doi}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-academic-primary hover:text-academic-secondary transition-colors"
                    >
                      <ExternalLink size={16} />
                      <span>DOI</span>
                    </a>
                  )}
                  {publication.pdfAvailable && (
                    <button className="flex items-center space-x-2 text-academic-primary hover:text-academic-secondary transition-colors">
                      <Download size={16} />
                      <span>PDF</span>
                    </button>
                  )}
                </div>
                <span className="text-sm text-gray-500">{publication.year}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredPublications.length === 0 && (
          <div className="text-center py-12">
            <BookOpen className="mx-auto text-gray-400 mb-4" size={48} />
            <p className="text-gray-500">No publications found matching your criteria.</p>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default PublicationsPage;