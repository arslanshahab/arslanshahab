import React from "react";

function SkillProgress({ title, progress }) {
  return (
    <div className="pt-1">
      <p className="mb-2"> {title} </p>
      <div className="overflow-hidden h-1 mb-4 text-xs flex rounded bg-blue-50 ">
        <div
          style={{ width: `${progress}%` }}
          className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-gradient-to-r from-pink-500 via-red-500 to-purple-500"
        ></div>
      </div>
    </div>
  );
}

export default SkillProgress;
