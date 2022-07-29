import React from "react";
import notepad from "./../../../assets/images/notepad.jpeg";

function ProjectDetails(props) {
    return (
        <div className="container mx-auto py-24 text-gray-700 dark:text-white">
            <div className="grid grid-cols-12 gap-4">
                <div className="col-span-5">
                    <div style={{ height: "550px", width: '100%' }}>
                        <img
                            src={notepad}
                            alt=""
                            className="rounded-xl h-full w-full object-cover object-top shadow-sm"
                        />
                    </div>
                </div>
                <div className="col-span-7">
                    <h1 className="text-5xl font-bold">Pigeon Global</h1>
                    <p className="text-xl my-4">A Web Based Project for mothers and baby world</p>
                    <h6 className="text-2xl font-semibold">Short Description</h6>
                    <p className=" mt-2">
                        Lorem ipsum doler set amet. Lorem ipsum doler set amet. lorem ipsum doler set amet.
                        Lorem ipsum doler set amet. Lorem ipsum doler set amet. lorem ipsum doler set amet.
                        Lorem ipsum doler set amet. Lorem ipsum doler set amet. lorem ipsum doler set amet.
                        Lorem ipsum doler set amet. Lorem ipsum doler set amet. lorem ipsum doler set amet.
                        Lorem ipsum doler set amet. Lorem ipsum doler set amet. lorem ipsum doler set amet.
                        Lorem ipsum doler set amet. Lorem ipsum doler set amet. lorem ipsum doler set amet.
                    </p>

                    <div className="pt-8">
                        <h6 className="text-2xl font-semibold">Technologies Used</h6>
                        <ul className="mt-4">
                            <li>React JS</li>
                            <li>Redux</li>
                            <li>Redux Saga</li>
                            <li>Laravel</li>
                            <li>MongoDB</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProjectDetails;
