import  React from "react"
import { NavLink } from "react-router-dom"

const Navigation = () => {
  const navItems = [
    { name: "HOME", path: "/" },
    { name: "PROPERTY", path: "/properties" },
    { name: "BLOG", path: "/blogs" },
    { name: "ABOUT", path: "/about-us" },
    { name: "CONTACT", path: "/contact-us" },
  ]

  return (
    <div className="hidden justify-between items-center w-full md:flex md:w-auto md:order-1" id="mobile-menu-2">
      <ul className="text-sm leading-4 flex flex-col font-medium md:flex-row lg:space-x-8 lg:mt-0">
        {navItems.map((item) => (
          <li key={item.name}>
            <NavLink
              to={item.path}
              className={({ isActive }) => `
                block py-2 pr-4 pl-3 text-sm font-heading font-medium transition-all duration-300 ease-in-out
                ${
                  isActive
                    ? "text-primary-700 lg:text-primary-700 scale-x-100"
                    : "text-gray-700 after:scale-x-0 hover:text-primary-700 dark:text-gray-400 dark:hover:text-white"
                }
                border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:p-0
                dark:hover:bg-gray-700 lg:dark:hover:bg-transparent dark:border-gray-700
                relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-primary-700
                after:transform after:transition-transform after:duration-300 after:ease-in-out
                hover:after:scale-x-100
              `}
            >
              {item.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Navigation

