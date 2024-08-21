import { HiMenuAlt3 } from "react-icons/hi";
import { CardComponent, VideosProps } from "../components/card.component";
import { useMenuPlayStore } from "../state/menu_play.store";
import { useEffect } from "react";

export function VideoPage() {
  const { setCollapsed } = useMenuPlayStore();

  useEffect(() => {
    setCollapsed(false);
  }, []);

  const videos: VideosProps[] = [
    { image: "/public/video_none.jpg", url: "#", title: "Test Video 01" },
  ];

  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center overflow-y-auto">
      <button
        onClick={() => setCollapsed(true)}
        className="block md:hidden absolute top-0 right-0 mt-5 mr-5"
      >
        <HiMenuAlt3 className="size-10 text-slate-900" />
      </button>

      <div className="w-full h-full flex items-center justify-center pb-10 mt-10 px-5 md:px-10">
        {videos.map((video, index) => (
          <div key={index} className={"hover:opacity-70 hover:cursor-pointer"}>
            <CardComponent
              image={video.image}
              url={video.url}
              title={video.title}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
