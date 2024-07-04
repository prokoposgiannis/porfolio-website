import Image from "next/image";
import Link from "next/link";

export default function Project({ project }) {
  if (!project) {
    return <div>No project data available</div>;
  }

  return (
    <div className="flex flex-row w-full h-full p-6">
      <div className="relative flex px-3 flex-col w-1/2">
        <Image
          src={project.imageLocalPath}
          fill
          style={{
            objectFit: "contain",
          }}
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          alt="Picture of a project"
        />
      </div>
      <div className="relative overflow-x-hidden flex flex-col px-3 w-1/2">
        <h1 className="text-xl font-bold">{project.title}</h1>
        <p className="text-justify">{project.summary}</p>
      </div>
      <div className="justify-center items-center absolute bottom-1 right-6 flex flex-col user-select-none hover:underline text-gray-800 text-md transform transition-transform duration-50 hover:scale-110">
        <Link
          href={`/projects/${project.title.toLowerCase().replace(/ /g, "-")}`}
        >
          details
        </Link>
      </div>
    </div>
  );
}
