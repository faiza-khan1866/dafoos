import React, { useEffect, useState } from 'react';
import Navbar from '../components/app/Navbar';
import TopHeader from '../components/app/TopHeader';
import PageBanner from '../components/Common/PageBanner';
import Footer from '../components/app/Footer';
import { Helmet } from "react-helmet"
import { API } from "../http/API";


const PrivacyPolicy = ({solutions}) => {

    const [privacyData, setPrivacyData] = useState();
    const [PrivacyMetaData, setPrivacyMetaData] = useState();

    useEffect(() => {
        API.get(`/pages`)
            .then((response) => {

                let currentPage = response.data.data.find((x) => x.slug === "privacy-policy");
                setPrivacyMetaData(currentPage);

            })
            .catch((err) => console.log(err));

        API.get(`/sections`)
            .then((res) => {

                let homepage = res.data.data.find((x) => x.slug === "privacy-policy");
                setPrivacyData(homepage);

            })
            .catch((err) => console.log(err));

    }, []);


    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>{PrivacyMetaData?.meta_details?.meta_title}</title>
                <meta name="description" content={`${PrivacyMetaData?.meta_details?.meta_description}`} />
            </Helmet>
            <TopHeader />

            <Navbar />

            <PageBanner
                pageTitle={"Privacy Policy"}
                homePageUrl="/"
                homePageText="Home"
                activePageText={"Privacy Policy"}
                bannerImage={privacyData?.content?.banner?.banner_image}
            />

            <div className="privecy-area ptb-100">
                <div className="container">
                    <h2>
                        {privacyData?.content?.intro?.title}
                    </h2>
                    <p
                        style={{ textAlign: "justify" }}
                        dangerouslySetInnerHTML={{
                            __html: privacyData?.content?.intro?.content
                        }}
                    >
                    </p>
                </div>
            </div>

            <Footer/>
        </>
    )
}

export default PrivacyPolicy;