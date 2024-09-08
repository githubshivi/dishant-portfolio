import { createBrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import BrandCampaign from "./components/BrandCampaign";
import Layout from "./components/layout/Layout";
import Logos from "./components/Logos";
import Posters from "./components/Posters";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/home", element: <Home /> },
      {
        path: "/brand-campaign",
        element: <BrandCampaign />,
      },
      {
        path: "/logos",
        element: <Logos />,
      },
      {
        path: "/posters",
        element: <Posters />,
      },
    ],
  },
]);

export default router;
