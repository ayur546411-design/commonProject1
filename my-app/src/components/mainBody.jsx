import React, { useState } from 'react';
import { Phone, Mail, Clock, MapPin, Flame } from 'lucide-react';

const ContactCard = ({ icon, title, detail }) => (
  <div className="flex flex-col items-center group cursor-pointer">
    <div className="mb-4 p-4 bg-teal-50 rounded-full text-teal-600 transition-colors group-hover:bg-teal-600 group-hover:text-white">
      {icon}
    </div>
    <h4 className="font-bold text-lg text-gray-800">{title}</h4>
    <p className="text-gray-500 text-sm whitespace-pre-line mt-1">{detail}</p>
  </div>
);

const InputGroup = ({ label, type = "text", placeholder }) => (
  <div className="flex flex-col text-left gap-2">
    <label className="text-sm font-bold text-gray-700">{label}</label>
    <input
      type={type}
      placeholder={placeholder}
      className="w-full p-4 rounded-xl border border-gray-200 bg-white focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-all shadow-sm"
    />
  </div>
);

function App() {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted successfully");
  };

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      <main className="max-w-5xl mx-auto px-6 py-16">
        <section className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-6 leading-tight">
            You Will Grow, You Will Succeed.<br className="hidden md:block" /> We Promise That
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed max-w-3x.7 mx-auto">
            We believe that a job is more than just a paycheck; it is where you spend a significant part of your life. That is why we are dedicated to connecting talent with culture, not just resumes with requirements. Our mission is to humanize the hiring process, ensuring that every match we make empowers you to grow, succeed, and love what you do.
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-24 text-center">
          <ContactCard
            icon={<Phone size={24} />}
            title="Call for inquiry"
            detail="NXX-NXXX-XXXX"
          />
          <ContactCard
            icon={<Mail size={24} />}
            title="Send us email"
            detail="kramulous@sbcglobal.net"
          />
          <ContactCard
            icon={<Clock size={24} />}
            title="Opening hours"
            detail="Mon - Fri: 10AM - 10PM"
          />
          <ContactCard
            icon={<MapPin size={24} />}
            title="Office"
            detail="19 North Road Piscataway, NY 08854"
          />
        </section>

        <section className="bg-[#f0f9f8] rounded-[40px] p-8 md:p-16 mb-20 shadow-sm">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold mb-2">Contact Info</h3>
            <p className="text-gray-400">Nibh dis faucibus proin lacus tristique</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 max-w-3xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              <InputGroup label="First Name" placeholder="Your first name" />
              <InputGroup label="Last Name" placeholder="Your last name" />
            </div>

            <InputGroup label="Email Address" type="email" placeholder="you@example.com" />

            <div className="flex flex-col gap-2">
              <label className="text-sm font-bold text-gray-700">Message</label>
              <textarea
                className="w-full p-4 rounded-xl border border-gray-200 bg-white h-40 focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-all shadow-sm resize-none"
                placeholder="Write your message..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-[#00a88f] text-white font-bold text-lg py-4 rounded-xl hover:bg-[#008d77] hover:shadow-lg transition-all transform active:scale-[0.98]"
            >
              Send Message
            </button>
          </form>
        </section>






                     {/* Map section */}
        <section className="w-full h-[400px] md:h-[500px] rounded-[40px] overflow-hidden relative mb-20 shadow-lg group">
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
            style={{ backgroundImage: "url('https://www.google.com/maps/@22.0749392,81.8262189,8.04z?entry=ttu&g_ep=EgoyMDI2MDExMy4wIKXMDSoASAFQAw%3D%3D')" }}
          ></div>
          <div className="absolute inset-0 bg-white/10"></div>
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="relative -mt-8 hover:-translate-y-2 transition-transform duration-300">

              {/* The Pin Icon */}
              <svg
                width="80"
                height="80"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="drop-shadow-2xl"
              >
                {/* The Teal Body */}
                <path
                  d="M12 2C7.58172 2 4 5.58172 4 10C4 14.4183 12 22 12 22C12 22 20 14.4183 20 10C20 5.58172 16.4183 2 12 2Z"
                  fill="#2d8b7e"
                />
                <circle cx="12" cy="10" r="3.5" fill="white" />
              </svg>
              <div className="w-8 h-2 bg-black/30 rounded-[100%] blur-sm mx-auto mt-[-5px]"></div>
            </div>
          </div>
        </section>


        <section className="py-10 border-t border-gray-100 mt-10">
          <div className="flex flex-wrap justify-center md:justify-between items-center gap-8 md:gap-12 px-4 opacity-50 grayscale hover:grayscale-0 transition-all duration-500 cursor-pointer">

            <h3 className="text-4xl font-black tracking-tight text-[#2D8CFF]">zoom</h3>

            <div className="flex items-center gap-1">
              <div className="bg-gradient-to-tr from-[#fd267a] to-[#ff6036] rounded-full p-1">
                <Flame className="text-white fill-current" size={24} />
              </div>
              <h3 className="text-3xl font-bold tracking-tighter text-[#424242] italic">tinder</h3>
            </div>

            <h3
              className="text-4xl text-[#ea4c89]"
              style={{ fontFamily: '"Grand Hotel", cursive' }} // This applies the font
            >
              dribbble
            </h3>

            <h3 className="text-2xl font-extrabold uppercase tracking-[0.2em] text-black">UBER</h3>

            <h3 className="text-2xl font-bold flex items-center gap-2 text-[#0668E1]">
              <span className="text-3xl">∞</span> meta
            </h3>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;