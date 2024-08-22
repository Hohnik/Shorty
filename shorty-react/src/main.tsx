import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Shorty from "./shorty.tsx";
import "./index.css";
import LandingPage from "./pages/landing_page.tsx";
import ToolDetailPage from "./pages/tool_detail_page.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Shorty />,
    children: [
      { path: "", element: <LandingPage /> },
      // { path: "tools", element: <ToolsPage /> },
      { path: ":tool", element: <ToolDetailPage /> },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
