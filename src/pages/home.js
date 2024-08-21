import React, { useState, useEffect } from "react";
import TopHeader from "../components/app/TopHeader";
import Navbar from "../components/app/Navbar";
import MainBanner from "../components/Home/MainBanner";
import Counter from "../components/Common/Counter";
import SmartServices from "../components/Common/SmartServices";
// import BlogPost from '../components/Common/BlogPost';
import ContactUs from "../components/Common/ContactUs";
import OurPartner from "../components/Common/OurPartner";
import Footer from "../components/app/Footer";
import Solutions from "../components/Common/Solutions";
import { API } from "../http/API";
import { Helmet } from "react-helmet";

import { useDispatch, useSelector } from "react-redux";
import { loadpages } from "../state/feature/pages";
import { loadsections } from "../state/feature/sections";

const Home = ({ solutions }) => {
  const [homeData, setHomeData] = useState();
  const [solutionsData, setSolutions] = useState();
  const [productData, setProductData] = useState();
  const [blogData, setBlogData] = useState();
  const [contactData, setContactData] = useState();
  const [homeMetaData, setHomeMetaData] = useState();
  const [solutionApiData, setSolutionApiData] = useState();
  const dispatch = useDispatch();
  const allPages = useSelector((state) => state?.page?.list);
  const allSections = useSelector((state) => state?.section?.list);

  const loadedPages = () => dispatch(loadpages());
  const loadedSections = () => dispatch(loadsections());

  const setupBeforeLoad = () => {
    let currentPage = allPages?.find((x) => x.slug === "home-page");
    setHomeMetaData(currentPage);

    let homepage = allSections?.find((x) => x.slug === "home-page");
    setHomeData(homepage);

    let solutionpage = allSections?.find((x) => x.slug === "solution-page");
    setSolutions(solutionpage);

    let productpage = allSections?.find((x) => x.slug === "product-page");
    setProductData(productpage);

    let blogpage = allSections?.find((x) => x.slug === "blog-page");
    setBlogData(blogpage);

    let contactpage = allSections?.find((x) => x.slug === "contact-us");
    setContactData(contactpage);
  };

  useEffect(() => {
    loadedPages();
    loadedSections();
    setupBeforeLoad();
  }, [allPages, allSections]);

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{homeMetaData?.meta_details?.meta_title}</title>
        <meta
          name="description"
          content={`${homeMetaData?.meta_details?.meta_description}`}
        />
      </Helmet>

      {!contactData ? (
        <div className="loader-container">
          <div className="spinner-grow text-primary" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      ) : (
        ""
      )}
      <TopHeader />
      <Navbar />
      {homeMetaData !== undefined && <MainBanner BannerData={homeData} />}

      <Counter />
      <Solutions SolutionsData={solutionsData?.content?.introSection} />
      <SmartServices
        ProductData={productData?.content?.introSection}
        productLimit="8"
      />
      {/* <BlogPost
				BlogData={blogData?.content?.introSection}
			/> */}
      <ContactUs ContactData={contactData?.content?.introSection} />
      <OurPartner />
      <Footer />
    </div>
  );
};

export default Home;
