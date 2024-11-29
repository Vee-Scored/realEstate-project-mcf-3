import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useCookie from "react-use-cookie";
import Container from "../../../components/Container";
import logo from "../../../assets/HomeAssets/logo.png";
import themeToggle from "../../../assets/HomeAssets/themeToggle.png";
import userFavicon from "../../../assets/HomeAssets/user.png";
import globe from "../../../assets/HomeAssets/globeFavicon.svg";
import envelope from "../../../assets/HomeAssets/envelope.png"
import { Menu, X } from "lucide-react";
const Links = ({ content, path }) => {
  const nav = useNavigate();
  const location = useLocation();
  const isActive = location.pathname === path

  
  return (
    <li>
      <button
        onClick={() => nav(path)}
        className={`block py-2 pr-4 pl-3 text-sm font-heading font-medium transition-all duration-300 ease-in-out
          ${isActive
            ? "text-primary-700 lg:text-primary-700 scale-x-100`"
            : "text-gray-700 after:scale-x-0 hover:text-primary-700 dark:text-gray-400 dark:hover:text-white"
          }
          border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:p-0
          dark:hover:bg-gray-700 lg:dark:hover:bg-transparent dark:border-gray-700
          relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-primary-700
          after:transform  after:transition-transform after:duration-300 after:ease-in-out
          hover:after:scale-x-100`}
      >
        {content}
      </button>
    </li>
  );
};

const navs = [
  {
    id: 1,
    content: "HOME",
    path: "/",
  },
  {
    id: 2,
    content: "PROPERTY",
    path: "/properties",
  },
  {
    id: 3,
    content: "ABOUT",
    path: "/about-us",
  },
  
  
  {
    id: 4,
    content: "CONTACT",
    path: "/contact-us",
  }
];

const Header = () => {
  const [user] = useCookie("user");
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  // Close the menu when a link is clicked
  const closeMenu = () => {
    setIsOpen(false)
  }

  return (
    <header className=" sticky top-0 z-50 bg-white ">
     
      <nav className="flex flex-col justify-center dark:bg-gray-800">
        <Container className={"w-full"}>
        <div className="border-b text-xs md:text-sm text-neutral-700 border-neutral-200 mb-5 py-3 justify-end flex items-center">
           <div className="border-r border-neutral-700 px-3">
           +95034526313
           </div>
           <div className="border-l flex gap-2 items-center border-neutral-700 px-3">
           <img src={envelope} alt="envelope" /> estatela123@gmail.com
           </div>

           <div className="flex gap-5 md:hidden ml-3">
                 
                 <button>
                   <img className="size-[25px]" src={userFavicon} alt="" />
                 </button>
                 <button>
                   <img className="size-[25px]" src={globe} />
                 </button>
               </div>
          </div>
          <div className="flex h-20 flex-wrap justify-between items-center">
            <Link to="/" className="flex items-center">
              <img className="h-9" src={logo} alt="" />
            </Link>
            <div className="flex items-center gap-5 md:order-2">
              {!user ? (
                <div className="hidden md:flex gap-3">
                 
                  <button>
                    <img className="size-[28px]" src={userFavicon} alt="" />
                  </button>
                  <button>
                    <img className="size-[28px]" src={globe} />
                  </button>
                </div>
              ) : (
                <>
                  <Link
                    to="/dashboard"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                  >
                    {`${JSON.parse(user).name}'s Dashboard`}
                  </Link>
                </>
              )}

              
<button
                className="relative h-10 w-10 text-gray-500 hover:text-gray-600 md:hidden"
                onClick={toggleMenu}
                aria-label={isOpen ? "Close Menu" : "Open Menu"}
                aria-expanded={isOpen}
                aria-controls="mobile-menu"
              >
                <span className="sr-only">Toggle menu</span>
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                  <Menu
                    className={`absolute left-1/2 top-1/2 size-9 -translate-x-1/2 -translate-y-1/2 transform transition-all duration-300 ${
                      isOpen ? "rotate-180 opacity-0" : "rotate-0 opacity-100"
                    }`}
                  />
                  <X
                    className={`absolute  left-1/2 top-1/2 h-5 w-5 -translate-x-1/2 -translate-y-1/2 transform transition-all duration-300 ${
                      isOpen ? "rotate-0 opacity-100" : "-rotate-180 opacity-0"
                    }`}
                  />
                </div>
              </button>
            </div>
            <div
              className="hidden justify-between items-center w-full md:flex md:w-auto md:order-1"
              id="mobile-menu-2"
            >
              <ul className=" text-sm leading-4  flex flex-col  font-medium md:flex-row lg:space-x-8 lg:mt-0">
                {navs.map((n) => (
                  <Links key={n.id} path={n.path} content={n.content} />
                ))}
              </ul>
            </div>

            <div
              className={`fixed inset-0 z-40 bg-black/50 backdrop-blur-sm transition-all duration-300 ${
                isOpen ? "opacity-100" : "pointer-events-none opacity-0"
              }`}
              aria-hidden="true"
              onClick={closeMenu}
            />

            {/* Mobile menu */}
            <div
              id="mobile-menu"
              className={`fixed inset-x-0 top-0 z-40 w-3/4 rounded-md mx-auto transform bg-white p-6 shadow-lg transition-transform duration-300 ease-in-out ${
                isOpen ? "translate-y-40" : "-translate-y-full"
              }`}
              role="dialog"
              aria-modal="true"
              aria-label="Navigation Menu"
            >
              
              <nav className="flex flex-col space-y-8 relative">
              <button onClick={()=>closeMenu()}
                    className={`absolute  top-0 right-0  `}
                  > <X className="size-9" /> </button>
                <ul className="flex flex-col items-center ">
                {navs.map((n,i) => (
                  <Links
                  key={i} path={n.path} content={n.content}
                    onClick={closeMenu}
                    className="text-lg font-medium text-gray-600 transition-colors hover:text-gray-900"
                  />
                   
                 
                ))}
                </ul>
              </nav>
            </div>
          </div>
        </Container>
      </nav>
    </header>
  );
};

export default Header