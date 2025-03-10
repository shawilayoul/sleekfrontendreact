import { IoNotificationsOutline } from "react-icons/io5";
import { FaRegMoon } from "react-icons/fa";
import useAuthStore from "../../store/authStore";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const { user, logout } = useAuthStore(); 
  const [isOpen, setIsOpen] = useState(false);

    const navigate = useNavigate();
  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    logout(); 
    setIsOpen(false); 
    navigate('/')
  };

  return (
    <div className="mt-[60px]">
      <header className="flex items-center bg-gray-800 text-white fixed w-full top-0 z-50">
        {/* Logo */}
        <a href="#" className="text-xl ml-12 font-bold text-white">
          AdminDash
        </a>
        <div className="w-[90%] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            {/* Left Section: Logo and Menu Button */}
            <div className="flex items-center ml-6 space-x-4">
              {/* Search Input (if needed) */}
            </div>

            {/* Right Section: User Profile and Actions */}
            <div className="flex items-center gap-8 space-x-4">
              {/* Dark/Light Mode */}
              <button className="text-white hover:text-blue-500 focus:outline-none">
                <FaRegMoon />
              </button>

              {/* Notifications */}
              <button className="text-white hover:text-blue-500 relative focus:outline-none">
                <IoNotificationsOutline />
                <span className="absolute top-0 right-0 inline-block w-2.5 h-2.5 bg-red-500 rounded-full"></span>
              </button>

              {/* Admin Name and Logout Button */}
              <div className="relative">
                <button
                  onClick={toggleMenu}
                  className="text-white hover:text-blue-500 focus:outline-none flex items-center space-x-2"
                >
                  <span className="px-2">
                    {user && user?.username ? (
                      <span>{user.username}</span>
                    ) : (
                      <p>Admin</p>
                    )}
                  </span>
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    ></path>
                  </svg>
                </button>

                {/* Dropdown Menu */}
                {isOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-20">
                    <button
                      onClick={handleLogout}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default NavBar;