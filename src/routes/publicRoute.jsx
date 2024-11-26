import { lazy } from "react";
import PropertyPage from "../features/public/pages/PropertyPage";
const BlogPage = lazy(() => import("../features/public/pages/BlogPage"));
const BlogDetailPage = lazy(() =>
  import("../features/public/pages/BlogDetailPage")
);
const Faq = lazy(() => import("../features/public/components/FaqSection/Faq"));
const TermsAndConditionPage = lazy(() =>
  import("../features/public/pages/TermsAndConditionPage")
);
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
    path: "blogs",
    element: <BlogPage />,
  },
  {
    path: "blogs/estate/:slug-name",
    element: <BlogDetailPage />,
  },

  {
    path: "faq",
    element: <Faq />,
  },

  { 
    path: "properties",
     element: <PropertyPage /> },
  {
    path: "terms-and-conditions",
    element: <TermsAndConditionPage />,
  },
];

export default publicRoute;
