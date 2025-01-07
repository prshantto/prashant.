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
  fixed left-0 top-0 h-screen w-64 md:static md:w-80 bg-white p-8 flex flex-col justify-between
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
              <li onClick={() => navigate("/")}>
                {" "}
                <Home size={20} /> Home
              </li>
              <li onClick={() => navigate("/about")}>
                {" "}
                <User size={20} /> About
              </li>
              <li onClick={() => navigate("/projects")}>
                {" "}
                <FolderKanban size={20} /> Projects
              </li>
              <li onClick={() => navigate("/articles")}>
                {" "}
                <FileText size={20} /> Articles
              </li>
              <li onClick={() => navigate("/contact")}>
                {" "}
                <Mail size={20} /> Contact
              </li>
            </ul>

            <div className="pt-6 text-center">
              <h2 className="text-md font-medium text-gray-400 mb-4">
                Socials
              </h2>
              <div className="space-y-4">
                <ul className="nav-links">
                  <li>
                    <Linkedin size={20} />
                    <a
                      href="https://www.linkedin.com/in/prashant-singh-5a2b7128b/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      LinkedIn
                    </a>
                  </li>
                  <li>
                    <Twitter size={20} />
                    <a
                      href="https://x.com/prshantto"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Twitter
                    </a>
                  </li>
                  <li>
                    <Github size={20} />
                    <a
                      href="https://github.com/prshantto"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Github
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>

        <div className="nav-footer text-sm text-gray-500 text-center">
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

// import React from "react";
// import { useNavigate } from "react-router-dom";
// import {
//   Home,
//   User,
//   FolderKanban,
//   FileText,
//   Mail,
//   Menu,
//   X,
//   Linkedin,
//   Twitter,
//   Github,
// } from "lucide-react";
// import "../styles/sidebar.css";

// const Sidebar = ({ isOpen, onToggle }) => {
//   const navigate = useNavigate();
//   return (
//     <>
//       {/* Mobile menu button */}
//       <button
//         onClick={onToggle}
//         className="lg:hidden fixed top-4 left-4 z-50 p-2 rounded-md bg-gray-900 text-white"
//       >
//         {isOpen ? <X size={24} /> : <Menu size={24} />}
//       </button>
//       <div
//         className={`fixed w-64 md:static md:w-80 h-screen bg-gray-800 text-white transform transition-transform duration-300 ease-in-out z-40 lg:translate-x-0 ${
//           isOpen ? "translate-x-0" : "-translate-x-full"
//         }`}
//       >
//         <h1 className="text-3xl font-bold my-12 text-center">
//           prashant<span className="text-gray-500 text-5xl">.</span>
//         </h1>

//         <nav className="space-y-4 grid gap-10 justify-around">
//           <ul className="nav-links">
//             <li onClick={() => navigate("/")}>
//               {" "}
//               <Home size={20} /> Home
//             </li>
//             <li onClick={() => navigate("/about")}>
//               {" "}
//               <User size={20} /> About
//             </li>
//             <li onClick={() => navigate("/projects")}>
//               {" "}
//               <FolderKanban size={20} /> Projects
//             </li>
//             <li onClick={() => navigate("/articles")}>
//               {" "}
//               <FileText size={20} /> Articles
//             </li>
//             <li onClick={() => navigate("/contact")}>
//               {" "}
//               <Mail size={20} /> Contact
//             </li>
//           </ul>
//           <div className="pt-6 text-center">
//             <h2 className="text-md font-medium text-gray-400 mb-4">Socials</h2>
//             <div className="space-y-4">
//               <ul className="nav-links">
//                 <li>
//                   <Linkedin size={20} />
//                   <a
//                     href="https://www.linkedin.com/in/prashant-singh-5a2b7128b/"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                   >
//                     LinkedIn
//                   </a>
//                 </li>
//                 <li>
//                   <Twitter size={20} />
//                   <a
//                     href="https://x.com/prshantto"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                   >
//                     Twitter
//                   </a>
//                 </li>
//                 <li>
//                   <Github size={20} />
//                   <a
//                     href="https://github.com/prshantto"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                   >
//                     Github
//                   </a>
//                 </li>
//               </ul>
//             </div>
//           </div>
//           <div className="text-sm text-gray-500 text-center">
//             <p>Copyright © 2025</p>
//             <p>All rights reserved</p>
//             <p>
//               Made with <span className="text-red-500">♥</span> by prashant.
//             </p>
//           </div>
//         </nav>
//       </div>
//     </>
//   );
// };

// export default Sidebar;
