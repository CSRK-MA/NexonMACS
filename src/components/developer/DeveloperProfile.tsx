import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import DeveloperNav from './DeveloperNav';
import PortfolioPage from './PortfolioPage';
import ServicesPage from './ServicesPage';
import CaseStudiesPage from './CaseStudiesPage';
import ContactPage from './ContactPage';

const DeveloperProfile: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-developer-primary text-developer-text pt-16"
    >
      <DeveloperNav />
      <div className="w-full overflow-x-hidden">
        <Routes>
          <Route path="/" element={<PortfolioPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/case-studies" element={<CaseStudiesPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </div>
    </motion.div>
  );
};

export default DeveloperProfile;