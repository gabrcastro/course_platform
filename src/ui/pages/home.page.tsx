import { CardComponent, VideosProps } from "../components/card.component";
import { TopBarComponent } from "../components/top_bar.component";

export function HomePage() {
  const videos: VideosProps[] = [
    { image: "/public/video_none.jpg", url: "#", title: "Test Video 01" },
    { image: "/public/video_none.jpg", url: "#", title: "Test Video 02" },
    { image: "/public/video_none.jpg", url: "#", title: "Test Video 03" },
    { image: "/public/video_none.jpg", url: "#", title: "Test Video 04" },
    { image: "/public/video_none.jpg", url: "#", title: "Test Video 05" },
    { image: "/public/video_none.jpg", url: "#", title: "Test Video 06" },
    { image: "/public/video_none.jpg", url: "#", title: "Test Video 07" },
    { image: "/public/video_none.jpg", url: "#", title: "Test Video 08" },
    { image: "/public/video_none.jpg", url: "#", title: "Test Video 09" },
    { image: "/public/video_none.jpg", url: "#", title: "Test Video 010" },
  ];

  return (
    <div className="w-full flex flex-col overflow-y-auto ">
      <TopBarComponent />
      <div className="w-full h-full grid grid-cols-4 gap-6 items-center justify-center pb-10 mt-10 px-10">
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
