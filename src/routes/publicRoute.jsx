import { lazy } from "react";

const PrivacyPolicyPage = lazy(() =>
  import("../features/public/pages/PrivacyPolicyPage")
);

const PropertyPage = lazy(() =>
  import("../features/public/pages/PropertyPage")
);
const PropertyDetail = lazy(() =>
  import("../features/public/pages/PropertyDetail")
);

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
    element: <PropertyPage />,
  },
  {
    path: "properties/property-detail/:slug",
    element: <PropertyDetail />,
  },
  {
    path: "terms-and-conditions",
    element: <TermsAndConditionPage />,
  },
  {
    path: "privacy-policy",
    element: <PrivacyPolicyPage />,
  },
];

export default publicRoute;
