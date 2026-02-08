import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./ui/Layout";
import { Home } from "./pages/Home";
import { Dashboard } from "./pages/Dashboard";
import { Users } from "./pages/Users";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "dashboard", element: <Dashboard /> },
      { path: "usuarios", element: <Users /> },
    ],
  },
]);
