import React, { useState, useEffect } from 'react';
import Navbar from '../components/app/Navbar';
import TopHeader from '../components/app/TopHeader';
import PageBanner from '../components/Common/PageBanner';
import ContactBanner from '../assets/images/contact-us-banner.jpg';
import ContactInfo from '../components/ContactUs/ContactInfo';
import ContactForm from '../components/ContactUs/ContactForm';
// import ContactInfoBottom from '../components/ContactUs/ContactInfoBottom';
import Footer from '../components/app/Footer';
import { Helmet } from "react-helmet"
import { API } from "../http/API";

const ContactUs = ({solutions}) => {

    const [contactData, setContactData] = useState();
    const [contactMetaData, setContactMetaData] = useState();

    useEffect(() => {
        API.get(`/pages`)
            .then((response) => {

                let currentPage = response.data.data.find((x) => x.slug === "contact-us");
                setContactMetaData(currentPage);

            })
            .catch((err) => console.log(err));

        API.get(`/sections`)
            .then((res) => {

                let homepage = res.data.data.find((x) => x.slug === "contact-us");
                setContactData(homepage);

            })
            .catch((err) => console.log(err));

    }, []);

    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>{contactMetaData?.meta_details?.meta_title}</title>
                <meta name="description" content={`${contactMetaData?.meta_details?.meta_description}`} />
            </Helmet>
            <TopHeader />

            <Navbar />

            <PageBanner
                pageTitle={contactData?.content?.banner?.title}
                homePageUrl="/"
                homePageText="Home"
                activePageText={contactData?.content?.banner?.title}
                bannerImage={contactData?.content?.banner?.background_image}
            />

            <ContactInfo
                contactInfo={contactData?.content?.companyContactDetails}
            />

            <ContactForm
                introSec={contactData?.content?.introSection}
                locationInfo={contactData?.content?.addressListSection}
            />

            {/* <ContactInfoBottom /> */}

            <Footer  />

        </>
    )
}

export default ContactUs;