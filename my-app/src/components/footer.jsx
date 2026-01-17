import React from 'react';
import { Briefcase } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-20 pb-10 border-t border-gray-900 font-sans">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          
          {/* 1. Brand Section */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-2">
               <Briefcase className="text-white" size={24} strokeWidth={1.5} />
               <span className="text-xl font-bold tracking-wide">Job</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Quis enim pellentesque viverra tellus eget malesuada facilisis. 
              Congue nibh vivamus aliquet nunc mauris dui nullam et.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6">Company</h4>
            <ul className="space-y-4 text-gray-400 text-sm font-medium">
              <li><a href="#" className="hover:text-teal-400">About Us</a></li>
              <li><a href="#" className="hover:text-teal-400">Our Team</a></li>
              <li><a href="#" className="hover:text-teal-400">Partners</a></li>
              <li><a href="#" className="hover:text-teal-400">For Candidates</a></li>
              <li><a href="#" className="hover:text-teal-400">For Employers</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-6">Job Categories</h4>
            <ul className="space-y-4 text-gray-400 text-sm font-medium">
              <li><a href="#" className="hover:text-teal-400">Telecommunications</a></li>
              <li><a href="#" className="hover:text-teal-400">Hotels & Tourism</a></li>
              <li><a href="#" className="hover:text-teal-400">Construction</a></li>
              <li><a href="#" className="hover:text-teal-400">Education</a></li>
              <li><a href="#" className="hover:text-teal-400">Financial Services</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-6">Newsletter</h4>
            <p className="text-gray-400 text-xs mb-6">
              Eu nunc pretium vitae platea. Non netus elementum vulputate.
            </p>
            <form className="flex flex-col gap-4">
              <input 
                type="email" 
                placeholder="Email Address" 
                className="w-full bg-[#1C1C1C] border border-gray-800 text-white text-sm rounded-lg p-4 focus:outline-none focus:border-teal-500"
              />
              <button 
                type="button" 
                className="w-full bg-[#00a79d] hover:bg-[#008d85] text-white font-bold py-4 rounded-lg shadow-md hover:shadow-lg transition-all"
              >
                Subscribe now
              </button>
            </form>
          </div>

        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>© Copyright Job Portal 2024. Designed by Figma.guru</p>
          <div className="flex gap-8 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms & Conditions</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;