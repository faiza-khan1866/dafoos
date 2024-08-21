import React, { useState, useEffect } from "react";
import Navbar from "../components/app/Navbar";
import TopHeader from "../components/app/TopHeader";
import Footer from "../components/app/Footer";
import PageBanner from "../components/Common/PageBanner";
import AboutUsArea from "../components/AboutUs/AboutUsArea";
import AccreditationsMemberships from "../components/AboutUs/AccreditationsMemberships";
import Testimonials from "../components/Common/Testimonials";
import { API } from "../http/API";
import { Helmet } from "react-helmet";
import { useDispatch, useSelector } from "react-redux";
import { findpage, loadpages } from "../state/feature/pages";
import { findsection, loadsections } from "../state/feature/sections";

const AboutUs = () => {
  const [aboutData, setAboutData] = useState();
  const [aboutMetaData, setAboutMetaData] = useState();
  const allPages = useSelector((state) => state?.page?.list);
  const allSections = useSelector((state) => state?.section?.list);
  const dispatch = useDispatch();
  const loadedPages = () => dispatch(loadpages());
  const loadedSections = () => dispatch(loadsections());

  useEffect(() => {
    loadedPages();
    loadedSections();

    const currentPage = findpage(allPages, "about-us");
    setAboutMetaData(currentPage);

    const homepage = findsection(allSections, "about-us");
    setAboutData(homepage);
  }, [allPages, allSections]);

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{aboutMetaData?.meta_details?.meta_title}</title>
        <meta
          name="description"
          content={`${aboutMetaData?.meta_details?.meta_description}`}
        />
      </Helmet>
      <TopHeader />
      <Navbar />
      <PageBanner
        pageTitle={aboutData?.content?.banner?.title}
        homePageUrl="/"
        homePageText="Home"
        activePageText={aboutData?.content?.banner?.title}
        bannerImage={aboutData?.content?.banner?.banner_image}
      />
      {aboutData?.content?.introSection !== undefined &&
        aboutData?.content?.introSection !== 0 && (
          <AboutUsArea IntroSection={aboutData?.content?.introSection} />
        )}
      <AccreditationsMemberships />
      <Testimonials />
      <Footer />
    </>
  );
};

export default AboutUs;
