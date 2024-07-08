import Image from "next/image";
import TopBarLayout from "@/app/components/TopBarLayout";
import ContactForm from "@/app/components/ContactForm";
import SocialIcons from "@/app/components/SocialIcons";

export default function MainBody() {
  return (
    <TopBarLayout>
      <div className="flex flex-col md:flex-row flex-grow px-16 pt-1/4.7 pb-12">
        <div className="flex flex-col w-full md:w-2/3">
          <div className="mb-4">
            <h1 className="text-5xl font-bold text-gray-900 mt-4">
              Contact me
            </h1>
            <p className="pl-1 max-w-lg mt-2 text-gray-700">
              If none of the available social options suit you, feel free to use
              the traditional method below:
            </p>
          </div>
          <div className="relative flex h-64 mt-5 md:h-2/3.5">
            <ContactForm />
          </div>
        </div>
        <div className="md:pl-14 user-select-none flex flex-col items-center md:w-1/3">
          <div className="rounded-lg shadow-lg overflow-hidden">
            <Image
              src="/contact-image.jpg"
              width={300}
              height={300}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority
              alt="Picture of the developer"
            />
          </div>
          <div className="user-select-none flex w-full justify-center flex-grow items-end">
            <SocialIcons showEmail={true} />
          </div>
        </div>
      </div>
    </TopBarLayout>
  );
}
