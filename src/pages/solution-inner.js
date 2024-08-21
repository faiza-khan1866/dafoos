import React, { useEffect, useState } from "react";
import Navbar from "../components/app/Navbar";
import TopHeader from "../components/app/TopHeader";
import PageBanner from "../components/Common/PageBanner";
import Footer from "../components/app/Footer";
import solutiontBanner from "../assets/images/solutionbanner.jpg";
import SolutionDetails from "../components/Solutions/Solutiondetail";
import Counter from "../components/Common/Counter";
import { Helmet } from "react-helmet";
import { API } from "../http/API";

const SolutionInner = () => {
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
      <div className="solution_counter">
        <Counter />
      </div>
      <SolutionDetails />
      <Footer />
    </>
  );
};

export default SolutionInner;
