import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

export default function Project({ project }) {
  if (!project) {
    return <div>No project data available</div>;
  }

  return (
    <div className="flex flex-row w-full h-full p-6">
      <div className="relative flex px-3 flex-col w-1/2">
        <Image
          src={project.image}
          fill
          style={{
            objectFit: "contain",
          }}
          sizes="100vw"
          alt="Picture of a project"
        />
      </div>
      <div className="relative flex flex-col overflow-x-auto px-3 w-1/2">
        <h1 className="text-xl font-bold">{project.title}</h1>
        <p className="text-justify">{project.description}</p>
        <FontAwesomeIcon
          icon={faArrowUpRightFromSquare}
          className="absolute bottom-0 right-0 text-2xl px-6 text-gray-800 hover:text-3xl"
        />
      </div>
    </div>
  );
}
