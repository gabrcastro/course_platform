import { useRoutes } from "react-router-dom";
import routes from "../routes";

export default function App() {
  const element = useRoutes(routes);

  return (
    <div className="w-screen h-screen flex items-center justify-center overflow-hidden">
      {element}
    </div>
  );
}
