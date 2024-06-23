import Image from "next/image";
import ProjectsPage from "@/app/components/ProjectsPage";

export default function MainBody() {
  return (
    <div>
      <section>
        <div className="absolute top-1/4.6 left-1/4.6">
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
        <div className="absolute top-1/4.5 right-1/4.6">
          <Image
            src="/face.png"
            width={300}
            height={300}
            alt="Picture of the author"
          />
        </div>
      </section>
      <section>
        <div className="absolute bottom-1/4.6 mb-5 left-1/4.6 bg-gray-100 shadow-md rounded-lg mt-10 w-2/4 h-2/4.5">
          <ProjectsPage />
        </div>
      </section>
    </div>
  );
}
