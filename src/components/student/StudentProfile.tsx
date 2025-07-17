import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import StudentNav from './StudentNav';
import AboutPage from './AboutPage';
import AcademicsPage from './AcademicsPage';
import ProjectsPage from './ProjectsPage';
import AchievementsPage from './AchievementsPage';

const StudentProfile: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-dark-900 text-gray-100 pt-16"
    >
      <StudentNav />
      <Routes>
        <Route path="/" element={<AboutPage />} />
        <Route path="/academics" element={<AcademicsPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/achievements" element={<AchievementsPage />} />
      </Routes>
    </motion.div>
  );
};

export default StudentProfile;