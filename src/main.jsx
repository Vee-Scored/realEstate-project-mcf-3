import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./styles/app.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes/router.jsx";
import "react-multi-carousel/lib/styles.css";
createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
