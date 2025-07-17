import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Briefcase, Wrench, FileText, Mail, Microscope } from 'lucide-react';

const DeveloperNav: React.FC = () => {
  const location = useLocation();

  const navItems = [
    { path: '/developer', label: 'Portfolio', icon: Briefcase },
    { path: '/developer/services', label: 'Services', icon: Wrench },
    { path: '/developer/case-studies', label: 'Case Studies', icon: FileText },
    { path: '/developer/contact', label: 'Contact', icon: Mail },
  ];

  return (
    <div className="bg-developer-card shadow-lg border-b border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          {/* Navigation Items */}
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
                      ? 'text-developer-accent bg-developer-accent/20'
                      : 'text-developer-text hover:text-developer-accent hover:bg-gray-700'
                  }`}
                >
                  <Icon size={18} />
                  <span className="font-medium">{item.label}</span>
                </Link>
              );
            })}
          </div>
          
          {/* Academic Profile Link */}
          <Link
            to="/student"
            className="hidden sm:flex items-center space-x-2 text-gray-400 hover:text-accent-400 transition-colors"
          >
            <Microscope size={16} />
            <span>View Academic Profile</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DeveloperNav;