import Image from "next/image";
import ProjectsPage from "@/app/components/projects/ProjectsPage";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export default function MainBody() {
  return (
    <div className="flex overflow-y-hidden">
      <div className="flex flex-col w-2/3 pl-1/4.6 pt-1/4.6">
        <div className="h-1/3">
          <h2 className="text-2xl font-medium text-gray-700 -ml-4">
            my name is
          </h2>
          <h1 className="text-5xl font-bold text-gray-900 mt-4">
            Prokopos. John Prokopos
          </h1>
          <p className="max-w-lg ml-1 mt-2 text-gray-700">
            Front End JavaScript developer passionate about bringing my ideas to
            life through mobile applications, web apps, and websites.
          </p>
        </div>
        <div className="h-1/2.5">
          <div className="h-full overflow-hidden">
            <h1 className="font-medium  text-gray-700">My projects</h1>
            <ProjectsPage />
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center w-1/3">
        <Image
          src="/face.png"
          width={300}
          height={300}
          alt="Picture of the author"
        />
        <div className="flex w-full justify-center flex-grow items-center">
          <FontAwesomeIcon icon={faGithub} className="text-4xl pr-2" />
          <FontAwesomeIcon icon={faGithub} className="text-4xl pr-2" />
          <FontAwesomeIcon icon={faGithub} className="text-4xl pr-2" />
          <FontAwesomeIcon icon={faGithub} className="text-4xl pr-2" />
        </div>
      </div>
    </div>
  );
}
