import TopBarLayout from "@/app/components/TopBarLayout";

export default function MainBody() {
  return (
    <TopBarLayout>
      <div className="flex flex-col flex-grow text-center mt-20 mx-12 md:mx-60">
        <h1 className="font-bold text-2xl pb-5">About the website</h1>
        <p className="pb-6">
          This website is an attempt to apply everything I have learned so far
          regarding mostly React and Next JS. As my background for years was
          bulding mobile applications using React Native, what you're seeing is
          basicaly my first site.
        </p>
        <p className="pb-6">
          The goal for this porfolio is not only showcase my projects, but also,
          through it and specifically the Articles tab, to share my thoughts on
          what I've learned, the problemes I've stumped into and overcome, or
          just found interesting in the process of building them.
        </p>
        <p className="pb-6">
          If you find my work or any of my projects interesting, If you'd like
          to share your thoughts with me or an idea, I'd be more than happy to
          talk, so feel free to contact me for anything you want.
        </p>
      </div>
    </TopBarLayout>
  );
}
