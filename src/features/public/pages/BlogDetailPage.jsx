import React from "react";
import Container from "../../../components/Container";
import BreadCrumb from "../components/BreadCrumb";
import BlogDetailHeroSection from "../components/blog/BlogDetailHeroSection";
import BlogDetailCardGroup from "../components/blog/BlogDetailCardGroup";
import SecBreadCrumb from "../../../components/SecBreadCrumb";

const BlogDetailPage = () => {
  return (
    <section className="flex flex-col mb-20 gap-24">
      <BreadCrumb currentPage={"Blog Detail"} className={"hidden md:block"} />
      <SecBreadCrumb
        className={"md:hidden"}
        currentPageTitle={"blog detail"}
        links={[{ title: "blog", path: "/blogs" }]}
      />
      <Container>
        <BlogDetailHeroSection />
        <BlogDetailCardGroup />
      </Container>
    </section>
  );
};

export default BlogDetailPage;
