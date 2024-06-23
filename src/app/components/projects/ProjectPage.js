import Image from "next/image";

export default function Project() {
  const title = "Smarter by Words";
  const description =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
  const image = "/image-place-holder.jpg";

  return (
    <div className="flex flex-col h-full w-full">
      <h1>{title}</h1>
      <div className="flex flex-row w-full">
        <div className="w-1/2">
          <Image
            src={image}
            width={400}
            height={400}
            layout="responsive"
            objectFit="cover"
            className="rounded-full"
            alt="Picture of a project"
          />
        </div>
        <div className="flex flex-col w-1/2 p-6">
          <p className="text-justify">{description}</p>
        </div>
      </div>
    </div>
  );
}
