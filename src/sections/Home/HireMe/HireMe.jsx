import React from "react";
import notepad from "./../../../assets/images/notepad.jpeg";

function HireMe(props) {
  return (
    <div className="container mx-auto py-20 text-gray-700 dark:text-white">
      <div className="grid grid-cols-12">
        <div className="col-span-6">
          <p
            className=" text-xl inline-block font-semibold bg-gradient-to-r from-blue-500 via-purple-500 to-red-500"
            style={{
              "-webkit-background-clip": "text",
              "-webkit-text-fill-color": "transparent",
            }}
          >
            Let's Say Hi
          </p>
          <h1 className="text-5xl font-semibold mb-4">Hire Me.</h1>
          <p className="text-xl">
            Call me directly:{" "}
            <a href="tel:+923206625492" className="font-bold">
              (+92) 320 6625492
            </a>
          </p>
          <p className="text-xl">
            Contact email:{" "}
            <a href="mailto:arslanshahab@gmail.com" className="font-bold">
              arslanshahab@gmail.com
            </a>
          </p>
          <form method="POST" className="mt-8">
            <div className="mb-6 pt-0">
              <input
                type="text"
                placeholder="Your Name"
                className="px-3 py-3 dark:text-gray-700 placeholder-blueGray-300 text-blueGray-600 relative bg-white rounded text-sm border-2 border-gray-200  outline-none focus:outline-none focus:ring w-full"
              />
            </div>
            <div className="mb-6 pt-0">
              <input
                type="email"
                placeholder="Your Email"
                className="px-3 py-3 dark:text-gray-700 placeholder-blueGray-300 text-blueGray-600 relative bg-white rounded text-sm border-2 border-gray-200  outline-none focus:outline-none focus:ring w-full"
              />
            </div>
            <div className="mb-6 pt-0">
              <input
                type="text"
                placeholder="Write a Subject"
                className="px-3 py-3 dark:text-gray-700 placeholder-blueGray-300 text-blueGray-600 relative bg-white rounded text-sm border-2 border-gray-200  outline-none focus:outline-none focus:ring w-full"
              />
            </div>
            <div className="mb-6 pt-0">
              <textarea
                type="textarea"
                placeholder="Your Message"
                className="px-3 py-3 dark:text-gray-700 placeholder-blueGray-300 text-blueGray-600 relative bg-white rounded text-sm border-2 border-gray-200  outline-none focus:outline-none focus:ring w-full resize-none"
                rows={6}
              />
            </div>
            <button
              class=" text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded-full shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              type="button"
              style={{
                backgroundColor: "#fd4766",
              }}
            >
              Submit Now
            </button>
          </form>
        </div>
        <div className="col-span-6">
          <div style={{ height: "600px" }}>
            <img
              src={notepad}
              alt=""
              className="rounded-xl ml-8 h-full w-full object-cover object-top shadow-sm"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HireMe;
