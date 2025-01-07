import React from "react";
import {
  Home,
  User,
  FolderKanban,
  FileText,
  Mail,
  Twitter,
  Linkedin,
  Github,
  Menu,
  X,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import "../styles/sidebar.css";

function Sidebar({ isOpen, onToggle }) {
  const navigate = useNavigate();
  return (
    <>
      {/* Mobile menu button */}
      <button
        onClick={onToggle}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 rounded-md bg-gray-900 text-white"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar */}
      <aside
        className={`
        fixed left-0 top-0 h-screen w-64 bg-white p-8 flex flex-col justify-between
        transform transition-transform duration-300 ease-in-out z-40
        lg:translate-x-0
        ${isOpen ? "translate-x-0" : "-translate-x-full"}
      `}
      >
        <div>
          <h1 className="text-2xl font-bold mb-12 text-center">prashant.</h1>

          <nav className="space-y-4">
            {/* <Link href="#" active icon={}>
              Home
            </Link>
            <Link href="#" icon={<User size={20} />}>
              About
            </Link>
            <Link href="#" icon={<FolderKanban size={20} />}>
              Projects
            </Link>
            <Link href="#" icon={<FileText size={20} />}>
              Articles
            </Link>
            <Link href="#" icon={<Mail size={20} />}>
              Contact
            </Link> */}

            <ul className="nav-links">
              <li onClick={() => navigate("/")}>Home</li>
              <li onClick={() => navigate("/about")}>About</li>
              <li onClick={() => navigate("/projects")}>Projects</li>
              <li onClick={() => navigate("/articles")}>Articles</li>
              <li onClick={() => navigate("/contact")}>Contact</li>
            </ul>

            <div className="pt-6 text-center">
              <h2 className="text-md font-medium text-gray-400 mb-4">
                Socials
              </h2>
              <div className="space-y-4">
                {/* <Link href="#" icon={<Twitter size={20} />}>
                  Twitter
                </Link>
                <Link href="#" icon={<Linkedin size={20} />}>
                  LinkedIn
                </Link>
                <Link href="#" icon={<Github size={20} />}>
                  Github
                </Link> */}
                <ul className="nav-links">
                  <li>Twitter</li>
                  <li>LinkedIn</li>
                  <li>Github</li>
                </ul>
              </div>
            </div>
          </nav>
        </div>

        <div className="text-sm text-gray-500 text-center">
          <p>
            Copyright © 2025 All rights reserved | Made with{" "}
            <span className="text-red-500">♥</span> by prashant.
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
