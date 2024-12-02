"use client";

import Link from "next/link";
import Image from "next/image";
import { FiDownload } from "react-icons/fi";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi"; // Import icons for open/close

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to toggle menu visibility

  return (
    <div className="bg-white z-50 sticky top-0">
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex p-2 flex-row items-center justify-between">
          {/* Logo and Name on the left */}
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <Image
  src="/assests/pictures/logo.png"  
  width={100}
  height={100}
  alt="logo"
  className="w-12"
/>
            <span className="ml-3 text-xl">HassanJHR</span>
          </a>

          {/* Hamburger menu on the right (only visible on mobile) */}
          <button
            className="inline-flex md:hidden items-center text-gray-600 hover:text-blue-500"
            onClick={() => setIsMenuOpen(!isMenuOpen)} // Toggle menu visibility
          >
            {isMenuOpen ? <FiX className="text-3xl" /> : <FiMenu className="text-3xl" />}
          </button>

          {/* Navigation menu */}
          <nav
            className={`${
              isMenuOpen ? "block" : "hidden"
            } md:flex md:ml-auto flex-wrap items-center justify-center text-xl md:space-x-5 space-y-2 md:space-y-0 mt-4 md:mt-0 absolute md:static bg-white md:bg-transparent w-full md:w-auto top-full md:top-0 left-0 md:left-auto px-6 py-4 md:px-0`}
          >
            <Link href={"/"} className="mr-5 hover:text-blue-500">Home</Link>
            <Link href={"#about"} className="mr-5 hover:text-blue-500">About</Link>
            <Link href={"#skill"} className="mr-5 hover:text-blue-500">Skills</Link>
            <Link href={"#project"} className="mr-5 hover:text-blue-500">Projects</Link>
            <Link href={"#Contact"} className="mr-5 hover:text-blue-500">Contact</Link>

            {/* Download CV button inside the navbar */}
            <Link href="/assests/Resume/myResume.pdf">
              <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0 ml-5">
                Download CV <FiDownload className="ml-2 text-xl" />
              </button>
            </Link>
          </nav>
        </div>
      </header>
    </div>
  );
}
