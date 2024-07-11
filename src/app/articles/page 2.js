import TopBarLayout from "@/app/components/TopBarLayout";

export default function Articles() {
  return (
    <TopBarLayout>
      <div className="flex flex-col flex-grow text-center mt-20 mx-12 md:mx-60">
        <h1 className="font-bold text-2xl pb-5">Articles</h1>
        <p className="pb-6">No articles, yet 🤓</p>
      </div>
    </TopBarLayout>
  );
}
