import React from "react";
import { Menu, X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Resume from "./Resume";
import "./Sidebar.css";

function Sidebar({ isOpen, onToggle }) {
  const navigate = useNavigate();
  return (
    <>
      {/* Mobile menu Button */}
      <button
        onClick={onToggle}
        className="lg:hidden fixed top-4 right-4 z-50 p-2 rounded-md bg-gray-900 text-white"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar */}
      <aside
        className={`
  fixed left-0 top-0 h-screen w-64 md:static md:w-80 bg-[#f5f5f5] p-8 flex flex-col justify-between
  transform transition-transform duration-300 ease-in-out z-40
  lg:translate-x-0
  ${isOpen ? "translate-x-0" : "-translate-x-full"}
`}
      >
        <div>
          <h1 className="text-3xl font-bold mb-12 text-center">
            prashant<span className="text-gray-500 text-5xl">.</span>
          </h1>

          <nav className="space-y-4">
            <ul className="nav-links">
              <li onClick={() => navigate("/")}>Home</li>
              <li onClick={() => navigate("/projects")}>Projects</li>
              <li onClick={() => navigate("/blogs")}>Blogs</li>
              <li onClick={() => navigate("/about")}>About</li>
              <li onClick={() => navigate("/contact")}>Contact</li>
            </ul>

            <div className="pt-6 text-center">
              <h2 className="text-xl font-bold mb-4">
                socials<span className="text-gray-500 text-3xl">.</span>
              </h2>
              <div className="space-y-4">
                <ul className="nav-links">
                  <li>
                    <a
                      href="https://www.linkedin.com/in/prashant-singh-5a2b7128b/"
                      target="_blank"
                    >
                      LinkedIn
                    </a>
                  </li>
                  <li>
                    <a href="https://x.com/prshantto" target="_blank">
                      Twitter
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/prshantto" target="_blank">
                      Github
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>

        <div className="nav-footer text-sm text-gray-500 text-center">
          <button className="resume-button" onClick={() => navigate("/resume")}>
            resume<span className="text-gray-500 text-3xl">.</span>
          </button>
          <p>Copyright © 2025</p>
          <p>All rights reserved</p>
          <p>
            Made with <span className="text-red-500">♥</span> by prashant.
          </p>
        </div>
      </aside>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
          onClick={onToggle}
        />
      )}
    </>
  );
}

export default Sidebar;
