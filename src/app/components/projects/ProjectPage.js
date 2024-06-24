import Image from "next/image";

export default function Project() {
  const title = "Smarter by Words";
  const description =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
  const image = "/image-place-holder.jpg";

  return (
    <div className="flex flex-row w-full h-full p-6">
      <div className="relative flex px-3 flex-col w-1/2">
        <Image
          src={image}
          fill
          style={{
            objectFit: "contain",
          }}
          alt="Picture of a project"
        />
      </div>
      <div className="flex flex-col overflow-x-auto px-3 w-1/2">
        <h1 className="text-xl font-bold">{title}</h1>
        <p className="text-justify">{description}</p>
      </div>
    </div>
  );
}
