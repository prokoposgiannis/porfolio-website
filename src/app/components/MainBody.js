import Image from "next/image";
import ProjectPage from "@/app/components/projects/ProjectPage";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faFacebook,
  faSquareInstagram,
} from "@fortawesome/free-brands-svg-icons";

import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

export default function MainBody() {
  const [currentProject, setCurrentProject] = useState(0);

  const handlePreviousClick = () => {
    if (currentProject !== 0) {
      setCurrentProject((prev) => prev - 1);
    }
  };

  const handleNextClick = () => {
    if (currentProject !== projects.length - 1) {
    }
  };

  const projects = [
    {
      title: "Smarter by Words",
      description:
        "This project features a minimal React website that presents a different, rare, or interesting Greek word with its definition each day. The word is then uploaded as a story on an Instagram account, which currently has over 170 active followers",
      image: "/smarter-by-words-image.jpg",
    },
    {
      title: "Chatty John",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, aboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      image: "/chatty-john-image.png",
    },
    {
      title: "devExpert",
      description:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      image: "/dev-expert-image.png",
    },
  ];

  return (
    <div className="flex flex-grow overflow-y-hidden">
      <div className="flex flex-col w-2/3 pl-1/4.6 pt-1/4.6">
        <div className="h-1/3">
          <h2 className="text-2xl font-medium text-gray-700 -ml-4">
            my name is..
          </h2>
          <h1 className="text-5xl font-bold text-gray-900 mt-4">
            Prokópos. John Prokopos
          </h1>
          <p className="max-w-lg ml-1 mt-2 text-gray-700">
            I’m a front-end JavaScript developer who loves bringing ideas to
            life through mobile apps, web apps, and websites. Take a look at
            some of my work below!
          </p>
        </div>

        <div className="relative flex h-1/2.5">
          <div className="absolute -left-5 flex h-full items-center justify-center ">
            <FontAwesomeIcon
              icon={faChevronLeft}
              className={`text-lg ${
                currentProject === 0
                  ? "text-gray-400"
                  : "hover:text-xl text-black"
              }`}
              onClick={handlePreviousClick}
            />
          </div>
          <div className=" shadow-lg  bg-gray-100 rounded-2xl">
            <ProjectPage project={projects[currentProject]} />
          </div>

          <div className="flex h-full items-center justify-center absolute -right-5 ">
            <FontAwesomeIcon
              icon={faChevronRight}
              className={`text-lg ${
                currentProject === projects.length - 1
                  ? "text-gray-400"
                  : "hover:text-xl text-black"
              }`}
              onClick={handleNextClick}
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center w-1/3 pt-1/4.6">
        <Image
          src="/face.png"
          width={300}
          height={300}
          alt="Picture of the author"
        />
        <div className="flex w-full justify-center flex-grow items-end pb-14 ">
          <FontAwesomeIcon
            icon={faGithub}
            className="text-4xl px-6 text-gray-600 hover:text-neutral-900 hover:text-5xl"
          />
          <FontAwesomeIcon
            icon={faLinkedin}
            className="text-4xl px-6 text-gray-600 hover:text-sky-600 hover:text-5xl"
          />
          <FontAwesomeIcon
            icon={faFacebook}
            className="text-4xl px-6 text-gray-600  hover:text-blue-600 hover:text-5xl"
          />
          <FontAwesomeIcon
            icon={faSquareInstagram}
            className="text-4xl px-6 text-gray-600 hover:text-pink-600 hover:text-5xl"
          />
        </div>
      </div>
    </div>
  );
}
