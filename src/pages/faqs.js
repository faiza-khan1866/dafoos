import React, { useState, useEffect } from 'react';
import Navbar from '../components/app/Navbar';
import TopHeader from '../components/app/TopHeader';
import PageBanner from '../components/Common/PageBanner';
import Footer from '../components/app/Footer';
import BlogBanner from '../assets/images/careers-banner.jpg';
import FaqContent from '../components/Faqs/FaqContent';
import { Helmet } from "react-helmet"
import { API } from "../http/API";


const FAQs = ({solutions}) => {
    const [faqData, setFaqData] = useState();
    const [faqMetaData, setFaqMetaData] = useState();

    useEffect(() => {
        API.get(`/pages`)
            .then((response) => {

                let currentPage = response.data.data.find((x) => x.slug === "faq");
                setFaqMetaData(currentPage);

            })
            .catch((err) => console.log(err));

        API.get(`/sections`)
            .then((res) => {

                let homepage = res.data.data.find((x) => x.slug === "faq");
                setFaqData(homepage);

            })
            .catch((err) => console.log(err));

    }, []);
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>{faqMetaData?.meta_details?.meta_title}</title>
                <meta name="description" content={`${faqMetaData?.meta_details?.meta_description}`} />
            </Helmet>
            <TopHeader />
            <Navbar/>
            <PageBanner
                pageTitle="FAQ"
                homePageUrl="/"
                homePageText="Home"
                activePageText="FAQ"
                bannerImage={faqData?.content?.banner?.banner_image}
            />
            <FaqContent
                introData={faqData?.content?.intro}
                faqData={faqData?.content?.faq}
            />
            <Footer  />
        </>
    )
}

export default FAQs;