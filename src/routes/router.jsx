import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import AdminLayout from "../layouts/AdminLayout";
import Home from "../pages/Home";
import CatalogPage from "../pages/CatalogPage";
import ToolDetailPage from "../pages/ToolDetailPage";
import NotFoundPage from "../pages/NotFoundPage";
import DashboardPage from "../pages/admin/DashboardPage";
import AdminToolsPage from "../pages/admin/AdminToolsPage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import adminLoader from "../loaders/adminLoader";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <NotFoundPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "catalog",
        element: <CatalogPage />,
      },
      {
        path: "catalog/:id",
        element: <ToolDetailPage />,
      },
      {
        path: "auth/login",
        element: <LoginPage />,
      },
      {
        path: "auth/register",
        element: <RegisterPage />,
      },
    ],
  },
  {
    path: "/admin",
    element: <AdminLayout />,
    loader: adminLoader,
    children: [
      {
        index: true,
        element: <DashboardPage />,
      },
      {
        path: "tools",
        element: <AdminToolsPage />,
      },
    ],
  },
]);