import React from "react";
import Container from "../../../components/Container";
import BreadCrumb from "../components/BreadCrumb";
import BlogHeroSection from "../components/blog/BlogHeroSection";
import BlogCardGroup from "../components/blog/BlogCardGroup";

const BlogPage = () => {
  return (
    <>
    <BreadCrumb currentPage={"Blog"} />
    <Container>
      <BlogHeroSection />
      <BlogCardGroup />
    </Container>
    </>
  );
};

export default BlogPage;
