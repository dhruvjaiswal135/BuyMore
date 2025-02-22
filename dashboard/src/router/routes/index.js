import { privateRoutes } from "./privateRoutes";
import MainLayout from "../../layout/MainLayout";
 
export const getRoutes = () => [
  {
    path: "/",
    element: <MainLayout />,
    children: privateRoutes, // Ensure `privateRoutes` is a valid array of route objects.
  },
];