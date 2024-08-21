import React, { useState, useEffect } from "react";
import Navbar from "../components/app/Navbar";
import TopHeader from "../components/app/TopHeader";
import PageBanner from "../components/Common/PageBanner";
import Footer from "../components/app/Footer";
import SmartServices from "../components/Common/SmartServices";
import { API } from "../http/API";
import { Helmet } from "react-helmet";

const Product = () => {
  const [ProductData, setProductData] = useState();
  const [ProductMetaData, setProductMetaData] = useState();

  useEffect(() => {
    API.get(`/pages`)
      .then((response) => {
        let currentPage = response.data.data.find(
          (x) => x.slug === "product-page"
        );
        setProductMetaData(currentPage);
      })
      .catch((err) => console.log(err));

    API.get(`/sections`)
      .then((res) => {
        let homepage = res.data.data.find((x) => x.slug === "product-page");
        setProductData(homepage);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{ProductMetaData?.meta_details?.meta_title}</title>
        <meta
          name="description"
          content={`${ProductMetaData?.meta_details?.meta_description}`}
        />
      </Helmet>
      <TopHeader />
      <Navbar />
      <PageBanner
        pageTitle={ProductData?.content?.banner?.title}
        homePageUrl="/"
        homePageText="Home"
        activePageText={ProductData?.content?.banner?.title}
        bannerImage={ProductData?.content?.banner?.background_image}
      />
      <SmartServices productLimit="all" />
      <Footer />
    </>
  );
};

export default Product;
