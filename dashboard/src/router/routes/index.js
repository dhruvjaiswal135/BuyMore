import { privateRoutes } from "./privateRoutes";
import MainLayout from "../../layout/MainLayout";
import ProtectedRoute from "./ProtectedRoute";
//import ProtectedRoute from "./ProtectedRoute";

export const getRoutes = () => {
  privateRoutes.map(r => {
    r.element = <ProtectedRoute route={r}>{r.element} </ProtectedRoute>
  })
  return {
    path: '/',
    element: <MainLayout />,
    children: privateRoutes // Ensure `privateRoutes` is a valid array of route objects.
  }
};