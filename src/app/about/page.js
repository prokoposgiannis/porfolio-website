import Link from "next/link";
import TopBarLayout from "@/app/components/TopBarLayout";

export default function ArticlesPage() {
  return (
    <TopBarLayout>
      <div className="flex flex-col flex-grow text-center mt-20 mx-12 md:mx-60">
        <h1 className="font-bold text-2xl pb-5">About this website</h1>
        <p className="pb-6">
          This website is an attempt to apply everything I have learned so far
          regarding mostly React and Next.js. As my background for the past few
          years was building mobile applications using React Native, what you’re
          seeing here is basically my first site, which is crafted with love,
          endless searching and mugs of coffee, not just by copying a tutorial's
          code.
        </p>
        <p className="pb-6">
          The goal for this portfolio is not only to showcase my projects but
          also, through it, on the Articles tab, to share my thoughts on what
          I’ve learned, the problems I’ve encountered and overcome, or just
          anything that I've found interesting in the process of building them.
        </p>
        <p className="pb-6">
          If you find my work or any of my projects interesting, if you’d like
          to share your thoughts with me or to discuss an idea, I’d be more than
          happy to talk, so feel free to contact me.
        </p>

        <Link
          className="w-fit mx-auto font-bold transition-transform duration-10 transform hover:scale-125"
          href={"/contact"}
        >
          Say hello (world)
        </Link>
      </div>
    </TopBarLayout>
  );
}
