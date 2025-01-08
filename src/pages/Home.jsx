import React, { useState } from "react";
import profile from "../assets/images/profile.jpg";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="background w-full h-[105vh] lg:w-[79%] lg:h-screen  bg-[url(/src/assets/images/bg_1.jpg)] bg-cover bg-center relative">
      <div className="overlay absolute inset-0 bg-black/40">
        <div className="w-full p-8 max-w-[70rem] mx-auto text-center">
          <div className="mb-8">
            <img
              src={profile}
              alt="Profile"
              className="w-48 h-48 rounded-full mx-auto object-cover"
            />
          </div>

          <div className="space-y-6">
            <div>
              <h2 className="text-2xl text-gray-100 font-light">Hello I'm</h2>
              <h1 className="text-5xl font-bold mt-2">
                Prashant Singh<span className="text-gray-500 text-5xl">.</span>
              </h1>
            </div>
            <p className="text-gray-100 max-w-2xl mx-auto text-lg leading-relaxed">
              I'm a passionate Full Stack Developer who loves building dynamic,
              user-friendly web apps that can impact millions of lives.
              Specializing in full-stack web development using the MERN stack,
              my goal is to create seamless and intuitive user experiences while
              staying up-to-date with the latest tools and trends.
            </p>
            <p className="max-w-2xl mx-auto text-white text-lg font-[500]">
              If you are a recruiter or a fellow developer looking for a skilled
              developer, let's connect and create something impactful.
            </p>
            <button
              onClick={() => {
                navigate("/about");
              }}
              className="mt-8 px-6 py-3 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-colors"
            >
              More About Me
            </button>
            ;
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
