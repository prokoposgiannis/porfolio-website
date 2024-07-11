"use client";
import ProjectPage from "@/app/components/projects/ProjectPage";
import { useState, useEffect } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fetchProjectsFromFirestore } from "@/lib/fetchProjects";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

export default function ProjectsNav() {
  const [currentProject, setCurrentProject] = useState(0);
  const [transitioning, setTransitioning] = useState(false);
  const [projects, setProjects] = useState([]);

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
    <>
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

      <div className="h-full shadow-lg bg-gray-100 rounded-2xl w-full">
        <div
          className={`transition-opacity flex h-full duration-100 ${
            transitioning ? "opacity-0" : "opacity-100"
          }`}
        >
          <ProjectPage project={projects[currentProject]} />
        </div>
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
    </>
  );
}
