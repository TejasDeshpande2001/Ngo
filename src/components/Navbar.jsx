import React, { useState } from "react";

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleSelectChange = (e) => {
    const selectedValue = e.target.value;
    if (selectedValue) {
      window.location.href = selectedValue;
    }
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="sticky top-0 z-50 bg-blue-500 bg-gradient-to-r px-4 py-3 shadow-lg">
      <div className="flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center">
          <img
            src="https://static.wixstatic.com/media/d13d6f_4a9df4b698e14afb94b36c3cebb2f95e~mv2.png/v1/fill/w_136,h_136,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/MH14%20Animal%20Hospital%20Logo%20Official-06_edited.png"
            alt="Logo"
            className="h-14 w-auto rounded-full border-2 border-white shadow-md"
          />
          <span className="ml-3 text-lg font-bold text-white">
            <span className="font-mono">MH14</span> NGO
          </span>
        </div>

        {/* Navigation Links for Desktop */}
        <nav className="z-30 hidden items-center space-x-6 font-medium text-white md:flex">
          <a href="/Ngo/" className="transition hover:text-gray-200">
            Home
          </a>
          <a href="/Ngo/about" className="transition hover:text-gray-200">
            About
          </a>
          <a href="/Ngo/contactus" className="transition hover:text-gray-200">
            Contact Us
          </a>
          <a href="/Ngo/report" className="transition hover:text-gray-200">
            Report A Case
          </a>
          <a href="/Ngo/whatwedo" className="transition hover:text-gray-200">
            What We Do
          </a>
          <a
            href="/Ngo/videogallery"
            className="text-white transition hover:text-gray-200"
          >
            Video Gallery
          </a>

          {/* Dropdown Menu */}
          <div className="relative inline-block w-60">
            <select
              id="helpOptions"
              name="helpOptions"
              className="block h-8 w-full rounded-md border border-gray-300 bg-white text-gray-800 shadow-md focus:border-green-400 focus:ring-2 focus:ring-green-400"
              onChange={handleSelectChange}
            >
              <option value="" disabled selected>
                How to Help
              </option>
              <option value="/Ngo/feedingdrive">🍲 Feeding Drives</option>
              <option value="/Ngo/vaccination">💉 Vaccination Drives</option>
              <option value="/Ngo/animaladoption">🐾 Animal Adoption</option>
              <option value="/Ngo/onedaymeal">🍛 One Day Meals</option>
              <option value="/Ngo/sponsortreatment">
                🩺 Sponsor Treatments
              </option>
              <option value="/Ngo/virtualadoption">🌐 Virtual Adoption</option>
            </select>
          </div>

          {/* Donate Button */}
          <a
            href="https://pages.razorpay.com/mh14animalhospital"
            target="_blank"
            className="rounded-md bg-white px-4 py-2 text-green-500 shadow-md transition hover:bg-gray-100"
          >
            Donate
          </a>
        </nav>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button
            className="text-white focus:outline-none"
            onClick={toggleMobileMenu}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden flex flex-col space-y-4 mt-4">
          <a href="/Ngo/" className="text-white transition hover:text-gray-200">
            Home
          </a>
          <a
            href="/Ngo/about"
            className="text-white transition hover:text-gray-200"
          >
            About
          </a>
          <a
            href="/Ngo/contactus"
            className="text-white transition hover:text-gray-200"
          >
            Contact Us
          </a>
          <a
            href="/Ngo/report"
            className="text-white transition hover:text-gray-200"
          >
            Report A Case
          </a>
          <a
            href="/Ngo/whatwedo"
            className="text-white transition hover:text-gray-200"
          >
            What We Do
          </a>
          <a
            href="/Ngo/videogallery"
            className="text-white transition hover:text-gray-200"
          >
            Video Gallery
          </a>
          {/* Dropdown Menu */}
          <div className="relative inline-block w-full">
            <select
              id="helpOptionsMobile"
              name="helpOptionsMobile"
              className="block h-8 w-full rounded-md border border-gray-300 bg-white text-gray-800 shadow-md focus:border-green-400 focus:ring-2 focus:ring-green-400"
              onChange={handleSelectChange}
            >
              <option value="" selected>
                How To Get Involved
              </option>
              <option value="/Ngo/feedingdrive">🍲 Feeding Drives</option>
              <option value="/Ngo/vaccination">💉 Vaccination Drives</option>
              <option value="/Ngo/animaladoption">🐾 Animal Adoption</option>
              <option value="/Ngo/onedaymeal">🍛 One Day Meals</option>
              <option value="/Ngo/sponsortreatment">
                🩺 Sponsor Treatments
              </option>
              <option value="/Ngo/virtualadoption">🌐 Virtual Adoption</option>
            </select>
          </div>

          {/* Donate Button */}
          <a
            href="https://pages.razorpay.com/mh14animalhospital"
            target="_blank"
            className="rounded-md bg-white px-4 py-2 text-green-500 shadow-md transition hover:bg-gray-100"
          >
            Donate
          </a>
        </div>
      )}
    </div>
  );
};

export default Navbar;
