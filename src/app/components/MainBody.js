import Image from "next/image";
import TopBarLayout from "@/app/components/TopBarLayout";
import ProjectsNav from "@/app/components/ProjectsNav";
import SocialIcons from "@/app/components/SocialIcons";

export default function MainBody() {
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
            <ProjectsNav />
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
            <SocialIcons />
          </div>
        </div>
      </div>
    </TopBarLayout>
  );
}
