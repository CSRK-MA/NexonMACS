import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import AcademicNav from './AcademicNav';
import AboutPage from './AboutPage';
import ResearchPage from './ResearchPage';
import PublicationsPage from './PublicationsPage';
import CVPage from './CVPage';

const AcademicProfile: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gray-50 pt-16"
    >
      <AcademicNav />
      <Routes>
        <Route path="/" element={<AboutPage />} />
        <Route path="/research" element={<ResearchPage />} />
        <Route path="/publications" element={<PublicationsPage />} />
        <Route path="/cv" element={<CVPage />} />
      </Routes>
    </motion.div>
  );
};

export default AcademicProfile;