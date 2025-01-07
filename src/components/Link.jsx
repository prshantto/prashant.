import React from "react";

function Link({ href, children, icon, active }) {
  return (
    <a
      href={href}
      className={`flex items-center gap-3 text-lg transition-colors ${
        active ? "text-black font-medium" : "text-gray-500 hover:text-gray-800"
      }`}
    >
      {icon}
      {children}
    </a>
  );
}

export default Link;
