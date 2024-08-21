import { RouteObject } from "react-router-dom";
import Layout from "./ui/layout";
import { HomePage } from "./ui/pages/home.page";
import LayoutPlay from "./ui/layout_play";
import { VideoPage } from "./ui/pages/video.page";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Layout />, // Layout principal
    children: [
      { path: "", element: <HomePage /> },
      { path: "/history", element: <HomePage /> },
    ],
  },
  {
    path: "/play/:playlistId",
    element: <LayoutPlay />, // Layout para reprodução de vídeos
    children: [{ path: "", element: <VideoPage /> }],
  },
];

export default routes;
