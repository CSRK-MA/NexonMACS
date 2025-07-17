import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { User, BookOpen, FolderOpen, Award, Code } from 'lucide-react';

const StudentNav: React.FC = () => {
  const location = useLocation();

  const navItems = [
    { path: '/student', label: 'About', icon: User },
    { path: '/student/academics', label: 'Academics', icon: BookOpen },
    { path: '/student/projects', label: 'Projects', icon: FolderOpen },
    { path: '/student/achievements', label: 'Achievements', icon: Award },
  ];

  return (
    <div className="bg-dark-800 shadow-lg border-b border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          <div className="flex space-x-8 overflow-x-auto">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200 whitespace-nowrap ${
                    isActive
                      ? 'text-primary-400 bg-primary-500/20 border border-primary-500/30'
                      : 'text-gray-300 hover:text-primary-400 hover:bg-gray-700/50'
                  }`}
                >
                  <Icon size={18} />
                  <span className="font-medium">{item.label}</span>
                </Link>
              );
            })}
          </div>
          
          <Link
            to="/developer"
            className="hidden sm:flex items-center space-x-2 text-gray-400 hover:text-accent-400 transition-colors"
          >
            <Code size={16} />
            <span className="text-sm">View Developer Profile</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default StudentNav;