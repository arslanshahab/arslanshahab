import React from "react";
import logo from "./../assets/images/logo.png";

export default function Navbar({ fixed }) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="fixed w-full flex flex-wrap items-center justify-between px-2 py-3 bg-white shadow-md mb-8 z-50 dark:bg-gray-800 dark:text-white">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <a
              className="text-sm font-bold leading-relaxed inline-block mr-4 whitespace-nowrap uppercase text-gray-700 dark:text-white"
              href="#pablo"
              style={{
                  width: '50px',
                  height: '50px'
              }}
            >
              <img
                src={logo}
                alt="Arslan Shahab"
                className="rounded p-1 object-cover w-full h-full"
                style={{
                //   border: "15px soild white",
                  boxShadow: "0 0 10px rgba(0,0,0,0.25)",
                }}
              />
            </a>
            <button
              className="text-gray-700 dark:text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-gray-700 dark:text-white hover:opacity-75"
                  href="#pablo"
                >
                  <span className="ml-2">About</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-gray-700 dark:text-white hover:opacity-75"
                  href="#pablo"
                >
                  <i className="fab fa-twitter text-lg leading-lg text-gray-700 dark:text-white opacity-75"></i>
                  <span className="ml-2">Portfolio</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-gray-700 dark:text-white hover:opacity-75"
                  href="#pablo"
                >
                  <i className="fab fa-pinterest text-lg leading-lg text-gray-700 dark:text-white opacity-75"></i>
                  <span className="ml-2">Contact</span>
                </a>
              </li>
              
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
