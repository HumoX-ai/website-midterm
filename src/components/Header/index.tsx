import { useState } from "react";
import {
  FaRegHeart,
  FaShoppingBag,
  FaUserCircle,
  FaBars,
} from "react-icons/fa";
import { motion } from "framer-motion";
export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const sidebarVariants = {
    closed: {
      x: "-100%",
    },
    open: {
      x: 0,
    },
  };

  return (
    <div>
      <div className="flex justify-between gap-8 mt-4 items-center">
        <div className="sm:w-[140px] w-[70px]">
          <img src="/logo.webp" alt="Logo" className="w-full" />
        </div>

        <input
          type="text"
          placeholder="Search..."
          className="w-full py-2 pl-6 pr-4 text-gray-500 border rounded-md outline-none bg-gray-50 focus:bg-white focus:border-indigo-600 hidden sm:flex"
        />
        <div className="sm:flex items-center gap-2 hidden">
          <FaRegHeart
            style={{ fontSize: "20px" }}
            className="hover:text-green-500"
          />
          <FaUserCircle
            style={{ fontSize: "20px" }}
            className="hover:text-green-500"
          />
          <FaShoppingBag
            style={{ fontSize: "20px" }}
            className="hover:text-green-500"
          />
        </div>
        <div className="sm:hidden block">
          <FaBars style={{ fontSize: "20px" }} onClick={toggleMenu} />
        </div>

        {isMenuOpen && (
          <motion.div
            className="fixed inset-0 bg-gray-800 bg-opacity-75 z-50 block sm:hidden duration-300"
            initial="closed"
            animate={isMenuOpen ? "open" : "closed"}
            variants={{
              open: { opacity: 1 },
              closed: { opacity: 0 },
            }}
            transition={{ duration: 0.2 }}
            onClick={toggleMenu}
          ></motion.div>
        )}

        <motion.div
          className="fixed top-0 left-0 h-full bg-slate-500 z-50 block sm:hidden overflow-auto duration-300 transition-all"
          variants={sidebarVariants}
          initial="closed"
          animate={isMenuOpen ? "open" : "closed"}
          transition={{ duration: 0.2 }}
        >
          <div className="flex justify-end p-2">
            <button onClick={toggleMenu}>
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
          </div>
          <div className="p-2 transition-all">
            <div className="sm:hidden items-center justify-around gap-2 flex py-8">
              <FaRegHeart style={{ fontSize: "20px", color: "white" }} />
              <FaUserCircle style={{ fontSize: "20px", color: "white" }} />
              <FaShoppingBag style={{ fontSize: "20px", color: "white" }} />
            </div>
            <div className="flex flex-col gap-4 lg:gap-6 xl:gap-8 text-white justify-center mt-4 text-xs lg:text-sm xl:text-lg sm:hidden">
              {elements.map((element, index) => (
                <div
                  key={index}
                  className="hover:text-green-500 transition-all"
                >
                  <h1 className="cursor-pointer">{element.title}</h1>
                </div>
              ))}
            </div>
            <input
              type="text"
              placeholder="Search..."
              className="w-full py-1 pl-6 pr-4 text-gray-500 border rounded-md outline-none bg-gray-200 focus:bg-white focus:border-green-600 flex sm:hidden mt-8"
            />
          </div>
        </motion.div>
      </div>
      <div className="hidden gap-4 lg:gap-6 xl:gap-8 text-gray-500 justify-center mt-4 text-xs lg:text-sm xl:text-lg sm:flex">
        {elements.map((element, index) => (
          <h1 className="cursor-pointer hover:text-green-500 transition-all" key={index}>
            {element.title}
          </h1>
        ))}
      </div>
    </div>
  );
};

const elements = [
  {
    title: "NEW RELEASES",
  },
  {
    title: "PRE-ORDERS",
  },
  {
    title: "GENRES",
  },
  {
    title: "OFFERS",
  },
  {
    title: "TURNTABLES",
  },
  {
    title: "ABBEY ROAD STORE",
  },
  {
    title: "GIFTS",
  },
  {
    title: "REWARDS",
  },
  {
    title: "HELP",
  },
];
