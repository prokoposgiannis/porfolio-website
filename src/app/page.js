import SideBar from "@/app/components/SideBar";
import MainBody from "@/app/components/MainBody";

export default function Home() {
  return (
    <div className="flex items-center justify-center h-screen w-full">
      <div className="w-full">
        <div className="w-1/4 m-auto rounded-md p-4">
          <div className="flex-1 flex w-full justify-between"></div>
          <h1>Hello World</h1>
        </div>
      </div>

      {/* <SideBar />
      <MainBody /> */}
    </div>
  );
}
