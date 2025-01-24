import React from "react";
import Container from "../../../components/Container";
import BreadCrumb from "../components/BreadCrumb";
import BlogHeroSection from "../components/blog/BlogHeroSection";
import BlogCardGroup from "../components/blog/BlogCardGroup";
import SecBreadCrumb from "../../../components/SecBreadCrumb";

const BlogPage = () => {
  return (

    <div className="flex flex-col  mb-20 gap-24">
    <BreadCrumb className={'hidden md:block'} currentPage={"Blog"} />
      
    <Container>
    <SecBreadCrumb currentPageTitle={'blog'}  className={'md:hidden'} />
      <BlogHeroSection />
      <BlogCardGroup />
    </Container>
    </div>

  );
};

export default BlogPage;
