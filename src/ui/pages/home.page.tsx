import { NavLink } from "react-router-dom";
import { CardComponent, VideosProps } from "../components/card.component";
import { TopBarComponent } from "../components/top_bar.component";
import { routes } from "../../utils/constants";
import { useEffect } from "react";
import { useMenuStore } from "../state/menu.store";

export function HomePage() {
  const { setCollapsed } = useMenuStore();

  useEffect(() => {
    setCollapsed(false);
  }, []);

  const videos: VideosProps[] = [
    { image: "/public/video_none.jpg", url: "/01", title: "Test Video 01" },
    { image: "/public/video_none.jpg", url: "/02", title: "Test Video 02" },
    { image: "/public/video_none.jpg", url: "/03", title: "Test Video 03" },
    { image: "/public/video_none.jpg", url: "/04", title: "Test Video 04" },
    { image: "/public/video_none.jpg", url: "/05", title: "Test Video 05" },
    { image: "/public/video_none.jpg", url: "/06", title: "Test Video 06" },
    { image: "/public/video_none.jpg", url: "/07", title: "Test Video 07" },
    { image: "/public/video_none.jpg", url: "/08", title: "Test Video 08" },
    { image: "/public/video_none.jpg", url: "/09", title: "Test Video 09" },
    { image: "/public/video_none.jpg", url: "/010", title: "Test Video 010" },
  ];

  return (
    <div className="w-full flex flex-col overflow-y-auto ">
      <TopBarComponent />
      <h1 className="text-2xl font-medium text-slate-950 mt-10 ml-10">
        Resultados
      </h1>
      <div className="w-full h-full grid grid-cols-2 md:grid-cols-4 gap-6 items-center justify-center pb-10 mt-5 px-10">
        {videos.map((video, index) => (
          <NavLink
            key={index}
            to={routes.PLAYLIST + video.url}
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
