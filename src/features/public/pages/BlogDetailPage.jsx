import React from "react";
import Container from "../../../components/Container";
import BreadCrumb from "../components/BreadCrumb";
import BlogDetailHeroSection from "../components/blog/BlogDetailHeroSection";
import BlogDetailCardGroup from "../components/blog/BlogDetailCardGroup";

const BlogDetailPage = () => {
  return (
    <Container>
      <div className="flex flex-col mb-20 gap-24">
      <BreadCrumb currentPage={"Blog Detail"} />
      <BlogDetailHeroSection />
      <BlogDetailCardGroup />
      </div>
    </Container>
  );
};

export default BlogDetailPage;
