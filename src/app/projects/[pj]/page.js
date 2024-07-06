"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import TopBarLayout from "@/app/components/TopBarLayout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { fetchProjectFromFirestore } from "@/lib/fetchProjects";

export default function ProjectPage({ params }) {
  const [project, setProject] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedProject = await fetchProjectFromFirestore(params.pj);
        setProject(fetchedProject);
      } catch (error) {
        console.error("Error fetching project:", error);
      }
    };
    fetchData();
  }, [params.pj]);

  if (!project) {
    return <div>Loading...</div>;
  }

  return (
    <TopBarLayout>
      <div className="flex flex-grow flex-col lg:w-1/2 md:flex-row h-screen bg-gray-200 overflow-y-auto overflow-x-hidden px-16 pt-20 pb-12">
        <div className="flex w-full pr-4">
          <div className="relative w-full h-64 lg:h-full">
            <Image
              src={project.imageUrls[0]}
              fill
              priority
              style={{
                objectFit: "contain",
                objectPosition: "top",
              }}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              alt="Picture of the project"
            />
          </div>
        </div>
        <div className="relative pl-4 flex flex-col w-full">
          <h1 className="text-xl font-bold">{project.title}</h1>
          <div className="mt-4">
            {Array.isArray(project.fullDescription) ? (
              project.fullDescription.map((p, index) => (
                <p key={index} className="text-justify pb-6">
                  {p}
                </p>
              ))
            ) : (
              <p>{project.fullDescription}</p>
            )}
          </div>
          <p className="italic text-gray-700">
            <strong>Tools used:</strong> {project.tools}
          </p>
          <Link href="/">
            <FontAwesomeIcon
              className="absolute bottom-0 right-0 text-2xl px-4 text-black transition-transform duration-50 transform hover:scale-150"
              icon={faArrowLeft}
            />
          </Link>
        </div>
      </div>
    </TopBarLayout>
  );
}
