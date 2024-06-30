import Image from "next/image";
import TopBarLayout from "@/app/components/TopBarLayout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export default function ProjectPage({ project }) {
  const projects = [
    {
      title: "Smarter by Words",
      description: [
        "This project features a minimal React website that presents a different, rare, or interesting Greek word with its definition each day. The word is then uploaded as a story on an Instagram account, which currently has over 170 active followers (https://www.instagram.com/smarter_bywords/).",
        "The key process is fully automated and server-side, using a Node.js engine. Every day at 05:00 AM, a scheduled function is triggered. This function selects the next word in line, fetches the necessary components (word details and a background image stored in Firebase), creates the final image using Node-Canvas, and uploads it to Instagram via the instagram-private-api library.",
      ],
      tools:
        "Tools used: React, Node.js, Node-Canvas, instagram-private-api, Firebase's tools (Firestore, Firebase storage, scheduled functions and Firebase hosting)",
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
    <TopBarLayout>
      <div className="flex flex-grow flex-col lg:w-1/2 md:flex-row h-screen bg-gray-200 overflow-y-auto overflow-x-hidden px-16 pt-1/4.7 pb-12">
        <div className="flex w-full">
          <div className="relative w-full h-64 lg:h-full">
            <Image
              src={projects[0].image}
              fill
              style={{
                objectFit: "contain",
              }}
              sizes="100vw"
              alt="Picture of a project"
            />
          </div>
        </div>
        <div className="relative flex flex-col w-full">
          <h1 className="text-xl font-bold">{projects[0].title}</h1>
          <div className="mt-4">
            {projects[0].description.map((p, index) => (
              <p key={index} className="text-justify pb-6">
                {p}
              </p>
            ))}
          </div>
          <p className="italic text-gray-700">{projects[0].tools}</p>
          <Link href="/">
            <FontAwesomeIcon
              className="absolute bottom-0 right-0 text-2xl px-4 text-black transition-transform duration-50 transform hover:scale-150"
              icon={faHouse}
            />
          </Link>
        </div>
      </div>
    </TopBarLayout>
  );
}
