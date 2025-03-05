import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./src/style/index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./src/router.jsx";


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
    </StrictMode>,
)
