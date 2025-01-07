import React, { useState } from "react";
import Sidebar from "../components/Sidebar";

const Home = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar
        isOpen={isSidebarOpen}
        onToggle={() => setIsSidebarOpen(!isSidebarOpen)}
      />

      <main className="w-full lg:ml-64 p-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <img
              src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&q=80&w=200&h=200"
              alt="Profile"
              className="w-48 h-48 rounded-full mx-auto object-cover"
            />
          </div>

          <div className="space-y-6">
            <div>
              <h2 className="text-2xl text-gray-400 font-light">Hello I'm</h2>
              <h1 className="text-5xl font-bold mt-2">Prashant Singh</h1>
            </div>

            <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
              I'm a passionate Full Stack Developer who loves building dynamic,
              user-friendly web apps that can impact millions of lives.
              Specializing in full-stack web development using the MERN stack,
              my goal is to create seamless and intuitive user experiences while
              staying up-to-date with the latest tools and trends.
            </p>

            <p className="text-gray-600">
              If you are a recruiter or a fellow developer looking for a skilled
              developer, let's connect and create something impactful.
            </p>

            <button className="mt-8 px-6 py-3 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-colors">
              More About Me
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
