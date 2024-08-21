import { NavLink } from "react-router-dom";
import { CardComponent, VideosProps } from "../components/card.component";
import { TopBarComponent } from "../components/top_bar.component";
import { routes } from "../../utils/constants";
import { useEffect } from "react";
import { useMenuStore } from "../state/menu.store";

export function HistoryPage() {
  const { setCollapsed } = useMenuStore();

  useEffect(() => {
    setCollapsed(false);
  }, []);

  const videos: VideosProps[] = [
    { image: "/public/video_none.jpg", url: "#", title: "Test Video 01" },
    { image: "/public/video_none.jpg", url: "#", title: "Test Video 02" },
    { image: "/public/video_none.jpg", url: "#", title: "Test Video 03" },
  ];

  return (
    <div className="w-full flex flex-col overflow-y-auto ">
      <TopBarComponent />
      <h1 className="text-2xl font-medium text-slate-950 mt-10 ml-10">
        Visualizados recentemente
      </h1>
      <div className="w-full h-full grid grid-cols-2 md:grid-cols-4 gap-6 items-center justify-center pb-10 mt-5 px-10">
        {videos.map((video, index) => (
          <NavLink
            key={index}
            to={routes.PLAYLIST + "123"}
            className={"hover:opacity-70 hover:cursor-pointer"}
          >
            <CardComponent
              image={video.image}
              url={video.url}
              title={video.title}
            />
          </NavLink>
        ))}
      </div>
    </div>
  );
}
