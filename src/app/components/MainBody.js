import Image from "next/image";
import ProjectPage from "@/app/components/projects/ProjectPage";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faFacebook,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

export default function MainBody() {
  return (
    <div className="flex flex-grow overflow-y-hidden">
      <div className="flex flex-col w-2/3 pl-1/4.6 pt-1/4.6">
        <div className="h-1/3">
          <h2 className="text-2xl font-medium text-gray-700 -ml-4">
            my name is..
          </h2>
          <h1 className="text-5xl font-bold text-gray-900 mt-4">
            Prokopos. John Prokopos
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
              className="text-lg hover:text-xl"
            />
          </div>
          <div className=" shadow-lg  bg-gray-100 rounded-2xl">
            <ProjectPage />
          </div>

          <div className="flex h-full items-center justify-center absolute -right-5 ">
            <FontAwesomeIcon
              icon={faChevronRight}
              className="text-lg hover:text-xl"
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
            className="text-4xl px-6 text-gray-900 hover:text-blue-500 hover:text-5xl"
          />
          <FontAwesomeIcon
            icon={faLinkedin}
            className="text-4xl px-6 text-gray-900 hover:text-blue-500 hover:text-5xl"
          />
          <FontAwesomeIcon
            icon={faFacebook}
            className="text-4xl px-6 text-gray-900  hover:text-blue-500 hover:text-5xl"
          />
          <FontAwesomeIcon
            icon={faInstagram}
            className="text-4xl px-6 text-gray-900 hover:text-blue-500 hover:text-5xl"
          />
        </div>
      </div>
    </div>
  );
}
