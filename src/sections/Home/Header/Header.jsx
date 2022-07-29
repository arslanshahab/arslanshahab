import React, { useEffect, useState } from "react";
import ReactTextTransition, { presets } from "react-text-transition";
import avatar from "./../../../assets/images/dp.jpeg";
import resume from "./../../../assets/files/resume.pdf";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

function Header() {
  const texts = [
    "MERN Stack Developer.",
    "Web and Mobile Developer.",
    "UI/UX Designer.",
  ];
  const [textIndex, settextIndex] = useState(0);
  useEffect(() => {
    setInterval(() => {
      settextIndex(textIndex + 1);
    }, 4000);
  }, [textIndex]);
  return (
    <div className="header-section container mx-auto py-20 pt-28 text-gray-700 dark:text-white">
      <div className="main-avatar flex items-center">
        <div className="w-80 h-80">
          <img
            src={avatar}
            alt=""
            className="rounded-full border-8 p-0 object-cover w-full h-full"
            style={{
              border: "16px solid white",
              boxShadow: "0 0 50px rgba(0,0,0,0.1)",
            }}
          />
        </div>
        <div className="px-16">
          <p className="uppercase font-light">Welcome to my portfolio</p>
          <h1 className="text-6xl font-extrabold my-4">
            Hello, I'm Arslan Shahab
          </h1>
          <h1
            className="inline text-6xl font-extrabold"
            style={{ color: "#fd4766" }}
          >
            MERN Stack Developer.
          </h1>
          <section
            className="inline text-6xl font-extrabold"
            style={{ color: "#fd4766" }}
          >
            {/* <ReactTextTransition
              text={texts[textIndex % texts.length]}
              springConfig={presets.gentle}
              className="big"
              delay={300}
              inline
            /> */}
          </section>
          <h2 className="text-2xl font-bold my-4 dark:text-white">
            based in Pakistan.
          </h2>
          <button
            class=" text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded-full shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            type="button"
            style={{
              backgroundColor: "#fd4766",
            }}
            onClick={() => {
              window.open(resume, "_blank").focus();
            }}
          >
            <FontAwesomeIcon icon={faDownload} /> Download My CV
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
