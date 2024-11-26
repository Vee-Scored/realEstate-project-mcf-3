import { lazy } from "react";
import BlogPage from "../features/public/pages/BlogPage";
import Faq from "../features/public/components/FaqSection/Faq";

const AboutUsPage = lazy(() => import("../features/public/pages/AboutUsPage"));
const ContactUsPage = lazy(() =>
  import("../features/public/pages/ContactUsPage")
);
const HomePage = lazy(() => import("../features/public/pages/HomePage"));

const publicRoute = [
  {
    index: true,
    element: <HomePage />,
  },
  {
    path: "about-us",
    element: <AboutUsPage />,
  },
  {
    path: "contact-us",
    element: <ContactUsPage />,
  },
  {
    path: "blog",
    element: <BlogPage />,
  },
  {
    path: "property",
    element: <BlogPage />,
  },
  {
    path: "faq",
    element: <Faq />,
  },
];

export default publicRoute;
