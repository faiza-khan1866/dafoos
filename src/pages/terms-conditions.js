import React, { useState, useEffect } from "react";
import Navbar from "../components/app/Navbar";
import TopHeader from "../components/app/TopHeader";
import PageBanner from "../components/Common/PageBanner";
import Footer from "../components/app/Footer";
import { Helmet } from "react-helmet";
import { API } from "../http/API";

const TermsConditions = ({ solutions }) => {
  const [termsData, setTermsData] = useState();
  const [termsMetaData, setTermsMetaData] = useState();

  useEffect(() => {
    API.get(`/pages`)
      .then((response) => {
        let currentPage = response.data.data.find(
          (x) => x.slug === "terms-and-condition"
        );
        setTermsMetaData(currentPage);
      })
      .catch((err) => console.log(err));

    API.get(`/sections`)
      .then((res) => {
        let homepage = res.data.data.find(
          (x) => x.slug === "terms-and-condition"
        );
        setTermsData(homepage);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{termsMetaData?.meta_details?.meta_title}</title>
        <meta
          name="description"
          content={`${termsMetaData?.meta_details?.meta_description}`}
        />
      </Helmet>
      <TopHeader />

      <Navbar />

      <PageBanner
        pageTitle="Terms & Conditions"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Terms & Conditions"
        bannerImage={termsData?.content?.banner?.banner_image}
      />

      <div className="privecy-area ptb-100">
        <div className="container">
          <h2>{termsData?.content?.intro?.title}</h2>
          <p
            style={{ textAlign: "justify" }}
            dangerouslySetInnerHTML={{
              __html: termsData?.content?.intro?.content,
            }}
          ></p>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default TermsConditions;
