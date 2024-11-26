import React from "react";
import Container from "../../../components/Container";
import BreadCrumb from "../components/BreadCrumb";
import BlogDetailHeroSection from "../components/blog/BlogDetailHeroSection";
import BlogDetailCardGroup from "../components/blog/BlogDetailCardGroup";

const BlogDetailPage = () => {
  return (
    <Container>
      <BreadCrumb currentPage={"Blog Detail"} />
      <BlogDetailHeroSection />
      <BlogDetailCardGroup />
    </Container>
  );
};

export default BlogDetailPage;
