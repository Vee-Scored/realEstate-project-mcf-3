import { lazy } from "react";
import BlogPage from "../features/public/pages/BlogPage";
import TermsAndConditionPage from "../features/public/pages/TermsAndConditionPage";

const AboutUsPage = lazy(() => import("../features/public/pages/AboutUsPage"));
const ContactUsPage = lazy(() => import("../features/public/pages/ContactUsPage"));
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
  path: "terms-and-conditions",
  element: <TermsAndConditionPage />,
},
];

export default publicRoute;
