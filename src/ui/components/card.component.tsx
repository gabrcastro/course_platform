export interface VideosProps {
  image: string;
  url: string;
  title: string;
}
export function CardComponent(data: VideosProps) {
  const { image, url, title } = data;
  return (
    <div className="flex flex-col">
      <div className="rounded-md border-[.5px] border-slate-500">
        <img src={image} alt="video none image" />
      </div>
      <a
        href={url}
        className="mt-2 text-slate-800 font-semibold text-sm md:text-lg"
      >
        {title}
      </a>
    </div>
  );
}
