import React from "react";
import TabsContainer from "../../../components/TabsContainer/TabsContainer";
import avatar from "./../../../assets/images/about.jpeg";

function AboutMe() {
  return (
    <div className="container mx-auto py-20 text-gray-700 dark:text-white">
      <div className="grid grid-cols-12">
        <div className="col-span-5">
          <img src={avatar} alt="" className="rounded-xl h-full w-full object-cover shadow-2xl" />
        </div>
        <div className="col-span-7 px-8 font-semibold">
          <h1 className="text-5xl">About Me</h1>
          <p className="mt-4 font-light text-xl leading-relaxed">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered in some form, by injected humour, or
            randomised words which dont look even slightly believable. If you
            are going to use a passage of Lorem Ipsum.
          </p>
          <TabsContainer color="pink" />
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
