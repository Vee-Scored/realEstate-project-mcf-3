import React from "react";
import { Link, useNavigate } from "react-router-dom";
import useCookie from "react-use-cookie";
import Container from "../../../components/Container";
import logo from "../../../assets/HomeAssets/logo.png";
import themeToggle from "../../../assets/HomeAssets/themeToggle.png";
import userFavicon from "../../../assets/HomeAssets/user.png";
import globe from "../../../assets/HomeAssets/globeFavicon.svg";
import envelope from "../../../assets/HomeAssets/envelope.png"
const Links = ({ content, path }) => {
  const nav = useNavigate();
  return (
    <li>
      <button
        onClick={() => nav(path)}
        className="block py-2 pr-4 text-sm font-heading font-[500px] pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
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

  return (
    <header className=" sticky top-0 z-50 bg-white ">
     
      <nav className="flex flex-col justify-center dark:bg-gray-800">
        <Container className={"w-full"}>
        <div className="border-b text-neutral-700 border-neutral-200 mb-5 py-3 justify-end flex items-center">
           <div className="border-r border-neutral-700 px-3">
           +95034526313
           </div>
           <div className="border-l flex gap-2 items-center border-neutral-700 px-3">
           <img src={envelope} alt="envelope" /> estatela123@gmail.com
           </div>
           
          </div>
          <div className="flex h-20 flex-wrap justify-between items-center">
            <Link to="/" className="flex items-center">
              <img className="h-9" src={logo} alt="" />
            </Link>
            <div className="flex items-center gap-5 lg:order-2">
              {!user ? (
                <>
                 
                  <button>
                    <img className="size-[28px]" src={userFavicon} alt="" />
                  </button>
                  <button>
                    <img className="size-[28px]" src={globe} />
                  </button>
                </>
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
                data-collapse-toggle="mobile-menu-2"
                type="button"
                className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-controls="mobile-menu-2"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
                <svg
                  className="hidden w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
            <div
              className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
              id="mobile-menu-2"
            >
              <ul className=" text-sm leading-4  flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                {navs.map((n) => (
                  <Links key={n.id} path={n.path} content={n.content} />
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </nav>
    </header>
  );
};

export default Header;
