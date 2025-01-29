import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 py-10 text-white">
      <div className="container mx-auto grid grid-cols-1 gap-8 px-4 md:grid-cols-4 md:px-10">
        {/* <!-- About Section --> */}
        <div>
          <img
            src="https://static.wixstatic.com/media/d13d6f_4a9df4b698e14afb94b36c3cebb2f95e~mv2.png/v1/fill/w_136,h_136,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/MH14%20Animal%20Hospital%20Logo%20Official-06_edited.png"
            alt="Logo"
            className="mb-4 h-16"
          />
          <h3 className="mb-4 text-lg font-semibold">About</h3>
          <p className="text-sm leading-relaxed">
            Our mission at MH14 Animal Hospital is to build a clean, hygiene and
            affordable Animal Health Care center in PCMC and around. Also, to
            protect and advocate for companion animals in need, and to build a
            humane community that promotes compassion and seeks to strengthen
            the human-animal bond. .
          </p>
          <div className="mt-4">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3781.532298735622!2d73.7576292!3d18.5951129!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b9663d6aaaab%3A0xd8eb4467c3a2cd0b!2sMH14%20Animal%20Hospital!5e0!3m2!1sen!2sin!4v1736576483524!5m2!1sen!2sin"
              style={{ border: 0 }}
              allowfullscreen=""
              className="sm:w-96 w-72 h-72 rounded-md"
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
        {/* <!-- Contact Section --> */}
        <div>
          <h3 className="mb-4 text-lg font-semibold">Contact</h3>
          <p className="text-sm">
            Rajneegandha Society, Sector No. 32,
            <br />
            Nigdi, Pimpri-Chinchwad, Maharashtra 411033
          </p>
          <p className="mt-2 text-sm">
            Email:{" "}
            <a
              href="mailto:mh14animalhospital@gmail.com"
              className="text-yellow-400"
            >
              mh14animalhospital@gmail.com
            </a>
          </p>
          <p className="mt-2 text-sm">
            Phone:{" "}
            <a href="tel:+919028214343" className="text-yellow-400">
              +91 9028214343
            </a>
          </p>
        </div>
        {/* <!-- Links Section --> */}
        <div>
          <h3 className="mb-4 text-lg font-semibold">Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="/" className="hover:text-yellow-400">
                Home
              </a>
            </li>
            <li>
              <a href="/aboutus" className="hover:text-yellow-400">
                About Us
              </a>
            </li>
            <li>
              <a href="/vaccinationdrive" className="hover:text-yellow-400">
                Volunteering
              </a>
            </li>
            {/* <li>
              <a href="#" className="hover:text-yellow-400">
                Blogs
              </a>
            </li> */}
            <li>
              <a href="/contactus" className="hover:text-yellow-400">
                Contact Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-400">
                Privacy Policy
              </a>
            </li>
            <li>
              <img
                src="https://img.freepik.com/free-vector/gradient-ornamental-certificate_23-2149381899.jpg?t=st=1737643029~exp=1737646629~hmac=d4403c80e55d84ffcfdfe1ffa4db6f9073531e1d9f5474511b2c63c4d549830f&w=1060"
                alt=""
                className=" w-72  object-cover rounded-lg"
              />
            </li>
          </ul>
        </div>
        {/* <!-- Our Campaigns Section --> */}
        <div>
          <h3 className="mb-4 text-lg font-semibold">Our Campaigns</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="/feedingdrive" className="hover:text-yellow-400">
                Feeding Drives
              </a>
            </li>
            <li>
              <a href="/vaccination" className="hover:text-yellow-400">
                Vaccination Drives
              </a>
            </li>
            {/* <li>
              <a href="#" className="hover:text-yellow-400">
                Rescue Operations
              </a>
            </li> */}
            {/* <li>
              <a href="#" className="hover:text-yellow-400">
                Awareness Campaigns
              </a>
            </li> */}
            <li>
              <a href="/animaladoption" className="hover:text-yellow-400">
                Animal Adoption
              </a>
            </li>
            <li>
              <a href="/onedaymeal" className="hover:text-yellow-400">
                One Day Meals
              </a>
            </li>

            <img
              src="https://img.freepik.com/free-vector/gradient-ornamental-certificate_23-2149381899.jpg?t=st=1737643029~exp=1737646629~hmac=d4403c80e55d84ffcfdfe1ffa4db6f9073531e1d9f5474511b2c63c4d549830f&w=1060"
              alt=""
              className=" w-72  object-cover rounded-lg"
            />
          </ul>
        </div>
      </div>

      <div className="mt-10 border-t border-gray-700 pt-6 text-center">
        <p className="text-sm">
          Copyright © 2021 MH14 Animal Hospital | Developed with love by{" "}
          <a href="#" className="text-yellow-400">
            Tejas , Amey ,Rutvik ,Siddhika{" "}
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;






