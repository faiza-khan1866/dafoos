import React, { useState, useEffect } from "react";
import Navbar from "../components/app/Navbar";
import TopHeader from "../components/app/TopHeader";
import PageBanner from "../components/Common/PageBanner";
import Footer from "../components/app/Footer";
import SolutionList from "../components/Solutions/SolutionsList";
import { API } from "../http/API";
import { Helmet } from "react-helmet";

const Solutions = () => {
  const [SolutionsData, setSolutionsData] = useState();
  const [SolutionsMetaData, setSolutionsMetaData] = useState();

  useEffect(() => {
    API.get(`/pages`)
      .then((response) => {
        let currentPage = response.data.data.find(
          (x) => x.slug === "solution-page"
        );
        setSolutionsMetaData(currentPage);
      })
      .catch((err) => console.log(err));

    API.get(`/sections`)
      .then((res) => {
        let homepage = res.data.data.find((x) => x.slug === "solution-page");
        setSolutionsData(homepage);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{SolutionsMetaData?.meta_details?.meta_title}</title>
        <meta
          name="description"
          content={`${SolutionsMetaData?.meta_details?.meta_description}`}
        />
      </Helmet>
      <TopHeader />
      <Navbar />
      <PageBanner
        pageTitle={SolutionsData?.content?.banner?.title}
        homePageUrl="/"
        homePageText="Home"
        activePageText={SolutionsData?.content?.banner?.title}
        bannerImage={SolutionsData?.content?.banner?.background_image}
      />
      <SolutionList IntroSection={SolutionsData?.content?.introSection} />
      <Footer />
    </>
  );
};

export default Solutions;
