import React from 'react';
import { Briefcase } from 'lucide-react'; 

function Header() {
    return (
        <div className="bg-black text-white w-screen">
            
           
            <div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">

                <div className="flex items-center gap-2" style={{cursor: 'pointer'}}>
                    <Briefcase color="white" size={24} />
                    <span style={{ fontSize: '20px', fontWeight: 'bold' }}>Job Portal</span>
                </div>

                <div className="hidden md:flex gap-10 text-gray-400 font-medium text-sm">
                    <a href="#" className="hover:text-white">Home</a>
                    <a href="#" className="hover:text-white">Jobs</a>
                    <a href="#" className="hover:text-white">About Us</a>
                    {/* active link */}
                    <a href="#" style={{ color: 'white' }}>Contact Us</a>
                </div>
                <div className="flex items-center gap-6">
                    {/* Login Button: Added 'hover:text-[#00a79d]' */}
                    <button className="text-sm font-bold text-white hover:text-[#00a79d] transition-colors">
                        Login
                    </button>
                    
                    {/* Register Button: Moved color to className and added 'hover:bg-[#008d85]' */}
                    <button className="bg-[#00a79d] hover:bg-[#008d85] text-white px-6 py-2 rounded-md text-sm font-bold shadow-md transition-all">
                        Register
                    </button>
                </div>

            </div>

            {/* title section */}
            <br />
            <div className="text-center pb-20 pt-10">
                <h1 className="text-5xl font-bold">
                    Contact Us
                </h1>
            </div>

        </div>
    );
}

export default Header;