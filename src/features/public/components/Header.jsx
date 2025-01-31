import React, { useEffect, useState } from "react";

import { Link, useLocation, useNavigate } from "react-router-dom";
import useCookie from "react-use-cookie";
import Container from "../../../components/Container";
import logo from "../../../assets/HomeAssets/logo.png";
import themeToggle from "../../../assets/HomeAssets/themeToggle.png";
import userFavicon from "../../../assets/HomeAssets/user.png";
import globe from "../../../assets/HomeAssets/globeFavicon.svg";
import envelope from "../../../assets/HomeAssets/envelope.png";
import { Menu, MenuIcon, X, XIcon } from "lucide-react";

import RegisterModal from "../../auth/components/RegisterModal";
import LoginModal from "../../auth/components/LoginModal";
import Navigation from "./Navigation";

const Links = ({ content, path, close = null }) => {
  const nav = useNavigate();
  const location = useLocation();

  const isActive = location.pathname == path;

  return (
    <li>
      <button
        onClick={() => {
          nav(path);
          close && close();
        }}
        className={`block py-2 pr-4 pl-3 text-sm font-heading font-medium transition-all duration-300 ease-in-out
          ${
            isActive
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
    content: "BLOG",
    path: "/blogs",
  },
  {
    id: 4,
    content: "ABOUT",
    path: "/about-us",
  },

  {
    id: 5,
    content: "CONTACT",
    path: "/contact-us",
  },
];

const Header = () => {
  const [user] = useCookie("user");
  const [isOpen, setIsOpen] = useState(false);
  const [isAuthOpen, setAuthOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [registerModal, setRegisterModal] = useState(false);
  const [loginModal, setLoginModal] = useState(false);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY && currentScrollY > 100) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }

    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);
  const nav = useNavigate();
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleAuth = () => {
    setAuthOpen(!isAuthOpen);
  };

  // Close the menu when a link is clicked
  const closeMenu = () => {
    setIsOpen(false);
  };

  return (

    <header
      className={`sticky top-0 z-50 transition-all duration-300 bg-white ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      } `}
    >
      <nav className="flex flex-col  justify-center dark:bg-gray-800">
        <Container className={"w-full relative overflow-visible"}>
        <div>
          <div
            className={`w-[110px] md:right-16 right-10 lg:right-20 ${
              isAuthOpen
                ? "md:-bottom-12 bottom-8 opacity-100"
                : "md:bottom-14 -bottom-10  opacity-0"
            } transition-all duration-300 absolute grid grid-rows-2  rounded-sm h-[70px] border-2 cursor-pointer bg-white`}
          >
            <button
              onClick={() => nav("/login")}
              className="hover:text-gray-500"
            >
              Sign in
            </button>
            <button
              onClick={() => nav("/register")}
              className="hover:text-gray-500"
            >
              Sign up
            </button>
          </div>
          <div className="border-b text-xs    md:text-sm text-neutral-700 border-neutral-200 mb-5 py-3 justify-end flex items-center">
            <div className="border-r border-neutral-700 px-3">+95034526313</div>
            <div className="border-l flex gap-2 items-center border-neutral-700 px-3">
              <img src={envelope} alt="envelope" /> estatela123@gmail.com
            </div>

            <div className="flex  gap-5 md:hidden ml-3">
              <button onClick={toggleAuth}>
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

            <Navigation/>
            <div className="flex items-center gap-5 md:order-2">
              {!user ? (
                <div className="hidden md:flex gap-3">
                  <button onClick={() => toggleAuth()}>
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
                aria-controls>
                  <MenuIcon/>
                </button>
            </div>
            


            <div
              className={`fixed inset-0 z-40 bg-black/50 backdrop-blur-sm transition-all duration-300 ${
                isOpen
                  ? "opacity-100 h-[1000px] "
                  : "pointer-events-none opacity-0 "
              }`}
              aria-hidden="true"
              onClick={closeMenu}
            >X</div>

            

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
                  <button
                    onClick={() => closeMenu()}
                    className={`absolute  top-0 right-0  `}
                  >
                    {" "}
                    <X className="size-9" />{" "}
                  </button>
                  <ul className="flex flex-col items-center ">
                    {navs.map((n, i) => (
                      <Links
                        close={closeMenu}
                        key={i}
                        path={n.path}
                        content={n.content}
                        className="text-lg font-medium text-gray-600 transition-colors hover:text-gray-900"
                      />
                    ))}
                  </ul>
                </nav>
              </div>
            </div>
                 
          </div>
        </Container>
      </nav>
    </header>

  );
};

export default Header;
