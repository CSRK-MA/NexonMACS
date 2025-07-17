import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { User, FlaskConical, BookOpen, FileText, Code } from 'lucide-react';

const AcademicNav: React.FC = () => {
  const location = useLocation();

  const navItems = [
    { path: '/scientist', label: 'About', icon: User },
    { path: '/scientist/research', label: 'Research', icon: FlaskConical },
    { path: '/scientist/publications', label: 'Publications', icon: BookOpen },
    { path: '/scientist/cv', label: 'CV', icon: FileText },
  ];

  return (
    <div className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          <div className="flex space-x-8">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-md transition-colors ${
                    isActive
                      ? 'text-academic-primary bg-academic-light'
                      : 'text-gray-600 hover:text-academic-primary hover:bg-gray-100'
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
            className="flex items-center space-x-2 text-gray-500 hover:text-academic-primary transition-colors"
          >
            <Code size={16} />
            <span className="text-sm">View Developer Profile</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AcademicNav;