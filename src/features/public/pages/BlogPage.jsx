import React from "react";
import Container from "../../../components/Container";
import BreadCrumb from "../components/BreadCrumb";
import BlogHeroSection from "../components/blog/BlogHeroSection";
import BlogCardGroup from "../components/blog/BlogCardGroup";

const BlogPage = () => {
  return (
    <div className="flex flex-col  mb-20 gap-24">
    <BreadCrumb currentPage={"Blog"} />
    <Container>
      <BlogHeroSection />
      <BlogCardGroup />
    </Container>
    </div>
  );
};

export default BlogPage;
