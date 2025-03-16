import { Link } from "react-router-dom";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b dark:from-black dark:to-gray-900 from-white to-gray-300 h-100">
      <div className="container mx-auto px-4 py-12 border-t-2">
        <div className="flex flex-col gap-8 lg:flex-row justify-between items-start p-8">
          {/* Technical Club Section */}
          <div className="w-full lg:w-1/3">
            <h2 className="text-2xl font-bold mb-4">
            ANNAMACHARYA TIRUPATI
            </h2>
            <p className="mb-6 text-justify">
              We are here to help you and guide you in an easy way. Our IETE Student Chapter is dedicated to fostering
              innovation and technical skills among students. Join us to be a
              part of a vibrant community focused on learning and growth.
            </p>
            <div className="flex gap-4">
              <Link
                to="#"
                className="bg-purple-500 p-3 rounded-md hover:opacity-80 transition-opacity"
                target="_blank"
              >
                <FaGithub size={24} />
              </Link>
              <Link
                to="https://www.instagram.com/codeathon2k25/profilecard/?igsh=MWNnMzRzZTJsbG9hMQ==/"
                className="bg-purple-500 p-3 rounded-md hover:opacity-80 transition-opacity"
                target="_blank"
              >
                <FaInstagram size={24} />
              </Link>
              <Link
                to="https://www.linkedin.com/company/annamacharya-group/"
                className="bg-purple-500 p-3 rounded-md hover:opacity-80 transition-opacity"
                target="_blank"
              >
                <FaLinkedin size={24} />
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:w-2/3">
            
            {/* Useful Links Section */}
            <div className="w-full">
              <h2 className="text-2xl font-bold mb-4">Codeathon 2k25</h2>
              <nav className="flex flex-col gap-3">
                
                <Link to="/Schedule" className="hover:underline">
                  Schedule
                </Link>
                <Link to="/Gallery" className="hover:underline">
                  Gallery
                </Link>
                <Link to="/Payment" className="hover:underline">
                  Payment
                </Link>
                <Link to="/Contact" className="hover:underline">
                  Contact
                </Link>
              </nav>
            </div>

            {/* Contact Info Section */}
            <div className="w-full">
              <h2 className="text-2xl font-bold mb-4">Contact Info</h2>
              <div className="flex items-center gap-3 mb-4">
                <FaLocationDot />{" "}
                <p>Annamacharya Institute of Technology & Sciences, TIRUPATI</p>
              </div>
              <div className="w-full h-34">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3883.7564039487633!2d79.4969104!3d13.6638794!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4d49b8ccc17129%3A0x52ac31398b7897eb!2sAnnamacharya%20Institute%20of%20Technology%20%26%20Sciences%2C%20Tirupati!5e0!3m2!1sen!2sin!4v1715818319683!5m2!1sen!2sin" 

                  className="w-full h-full"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gradient-to-r from-purple-900 to-gray-900 text-white py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm md:text-base font-medium">
              &copy; {new Date().getFullYear()} ANNAMACHARYA CODEATHON . All
              rights reserved.
            </p>
            <div className="text-sm md:text-base text-gray-300">
              Crafted  by : {" "} 
              <a
                href="#"
                className="font-medium hover:text-purple-400 transition-colors duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                Guru Gangadhar Reddy - IV B.TECH, ECE
              </a>{" "}
             
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
