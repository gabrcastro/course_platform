import { CardComponent, VideosProps } from "../components/card.component";

export function VideoPage() {
  const videos: VideosProps[] = [
    { image: "/public/video_none.jpg", url: "#", title: "Test Video 01" },
  ];

  return (
    <div className="w-full flex flex-col overflow-y-auto ">
      <div className="w-full h-full flex items-center justify-center pb-10 mt-10 px-10">
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
