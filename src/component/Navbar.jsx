// File: Navbar.jsx located in root-directory/src/component/
import React from "react";

function Navbar() {
  return (
    <div>
      {/* Navbar Container */}
      <nav className="bg-black p-4">
        <a href="/" className="px-3 hover:text-red-500 text-white">
          Home
        </a>
        <a href="/diary" className="px-3 hover:text-red-500 text-white">
          Diary
        </a>
        <a href="/register-user" className="px-3 hover:text-red-500 text-white">
          Register
        </a>
        <a href="/login-user" className="px-3 hover:text-red-500 text-white">
          Login
        </a>
        <a href="/logout" className="px-3 hover:text-red-500 text-white">
          Logout
        </a>
      </nav>
    </div>
  );
}

export default Navbar;
