import React from "react";
import Container from "../../../components/Container";
import BreadCrumb from "../components/BreadCrumb";
import BlogHeroSection from "../components/blog/BlogHeroSection";
import BlogCardGroup from "../components/blog/BlogCardGroup";

const BlogPage = () => {
  return (
    <Container>
      <BreadCrumb currentPage={"Blog"} />
      <BlogHeroSection />
      <BlogCardGroup />
    </Container>
  );
};

export default BlogPage;
