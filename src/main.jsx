import "./index.css";
import React from "react";
// import App from "./App";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Contact from "./components/Contact.jsx";
import HeroSection from "./components/HeroSection.jsx";
import AboutMe from "./components/AboutMe.jsx";
import Portfolio from "./components/Portfolio.jsx";
import Services from "./components/Services.jsx";
import App from "./App.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/herosection",
        element: <HeroSection />,
      },
      {
        path: "/aboutme",
        element: <AboutMe />,
      },
      {
        path: "/portfolio",
        element: <Portfolio />,
      },
      {
        path: "/services",
        element: <Services />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
