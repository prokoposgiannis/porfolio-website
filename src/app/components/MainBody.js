"use client";
import Image from "next/image";
import ProjectPage from "@/app/components/projects/ProjectPage";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fetchProjectsFromFirestore } from "@/lib/fetchProjects";
import TopBarLayout from "@/app/components/TopBarLayout";
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
  const [transitioning, setTransitioning] = useState(false);
  const [projects, setProjects] = useState([]);
  const social = [
    {
      icon: faLinkedin,
      hoverColor: "hover:text-sky-600",
      url: "https://www.linkedin.com/in/john-prokopos",
    },
    {
      icon: faGithub,
      hoverColor: "hover:text-neutral-900",
      url: "https://github.com/prokoposgiannis",
    },
    {
      icon: faFacebook,
      hoverColor: "hover:text-blue-600",
      url: "https://www.facebook.com/prokoposgiannis",
    },
    {
      icon: faSquareInstagram,
      hoverColor: "hover:text-pink-600",
      url: "https://www.instagram.com/prokopos.giannis",
    },
  ];

  useEffect(() => {
    async function fetchData() {
      const data = await fetchProjectsFromFirestore();
      setProjects(data);
    }
    fetchData();
  }, []);

  const handlePreviousClick = () => {
    if (currentProject !== 0) {
      setTransitioning(true);
      setTimeout(() => {
        setCurrentProject((prev) => prev - 1);
        setTransitioning(false);
      }, 100);
    }
  };

  const handleNextClick = () => {
    if (currentProject !== projects.length - 1) {
      setTransitioning(true);
      setTimeout(() => {
        setCurrentProject((prev) => prev + 1);
        setTransitioning(false);
      }, 100);
    }
  };

  return (
    <TopBarLayout>
      <div className="flex flex-col md:flex-row flex-grow px-16 pt-1/4.7 pb-12">
        <div className="flex flex-col md:w-2/3">
          <div className="mb-4">
            <h2 className="-ml-4 text-2xl font-medium text-gray-700">
              my name is..
            </h2>
            <h1 className="text-5xl font-bold text-gray-900 mt-4">
              Prokópos. John Prokopos
            </h1>
            <p className="pl-1 max-w-lg mt-2 text-gray-700">
              I’m a front-end JavaScript developer who loves bringing ideas to
              life through mobile apps, web apps, and websites. Take a look at
              some of my work below!
            </p>
          </div>

          <div className="relative flex h-64 mt-5 md:h-2/3.5">
            <div className="absolute left-0 flex h-full items-center justify-center">
              <FontAwesomeIcon
                icon={faChevronLeft}
                className={`user-select-none text-xl ${
                  currentProject === 0
                    ? "text-gray-400"
                    : "transform transition-transform duration-50 hover:scale-150 text-black"
                }`}
                onClick={handlePreviousClick}
              />
            </div>

            <div
              className={`h-full shadow-lg bg-gray-100 rounded-2xl transition-opacity duration-100 w-full ${
                transitioning ? "opacity-0" : "opacity-100"
              }`}
            >
              <ProjectPage project={projects[currentProject]} />
            </div>

            <div className="absolute right-0 flex h-full items-center justify-center">
              <FontAwesomeIcon
                icon={faChevronRight}
                className={`user-select-none text-xl ${
                  currentProject === projects.length - 1
                    ? "text-gray-400"
                    : "transform transition-transform duration-50 hover:scale-150 text-black"
                }`}
                onClick={handleNextClick}
              />
            </div>
          </div>
        </div>
        <div className="md:pl-14 user-select-none flex flex-col items-center md:w-1/3">
          <Image
            src="/face.png"
            width={300}
            height={300}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority
            className="animate-float"
            alt="Picture of the author"
          />
          <div className="user-select-none flex w-full justify-center flex-grow items-end">
            {social.map((s, index) => (
              <a
                key={s.icon.iconName}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={s.icon}
                  className={`user-select-none text-3xl px-4 text-gray-600 transition-transform duration-50 transform hover:scale-150 ${s.hoverColor}`}
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </TopBarLayout>
  );
}
