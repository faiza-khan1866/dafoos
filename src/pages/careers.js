import React, { useState, useEffect } from 'react';
import { API } from "../http/API";
import Navbar from '../components/app/Navbar';
import TopHeader from '../components/app/TopHeader';
import PageBanner from '../components/Common/PageBanner';
import Footer from '../components/app/Footer';
import CareerPosition from '../components/Careers/CareerPosition';
import { Helmet } from "react-helmet"

const Careers = ({solutions}) => {

    const [CareersData, setCareersData] = useState();
    const [CareersMetaData, setCareersMetaData] = useState();

    useEffect(() => {

        API.get(`/pages`)
            .then((response) => {

                let currentPage = response.data.data.find((x) => x.slug === "careers-page");
                setCareersMetaData(currentPage);

            })
            .catch((err) => console.log(err));

        API.get(`/sections`)
            .then((res) => {

                let homepage = res.data.data.find((x) => x.slug === "careers-page");
                setCareersData(homepage);

            })
            .catch((err) => console.log(err));

    }, []);

    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>{CareersMetaData?.meta_details?.meta_title}</title>
                <meta name="description" content={`${CareersMetaData?.meta_details?.meta_description}`} />
            </Helmet>
            <TopHeader />
            <Navbar />
            <PageBanner
                pageTitle={CareersData?.content?.banner?.title}
                homePageUrl="/"
                homePageText="Home"
                activePageText={CareersData?.content?.banner?.title}
                bannerImage={CareersData?.content?.banner?.background_image}
            />

            <div className="container text-center">
                <h2 className="pt-100 intro-page">{CareersData?.content?.introSection?.title}</h2>
                <div dangerouslySetInnerHTML={{ __html: CareersData?.content?.introSection?.content }} />
                <div className="contact-area pt-100 pb-70">
                    <div className="container">
                        <div className="row">
                            <CareerPosition />
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
}

export default Careers;