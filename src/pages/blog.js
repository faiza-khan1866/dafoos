import React, { useState, useEffect } from 'react';
import Navbar from '../components/app/Navbar';
import TopHeader from '../components/app/TopHeader';
import PageBanner from '../components/Common/PageBanner';
import Footer from '../components/app/Footer';
import BlogBanner from '../assets/images/careers-banner.jpg';
import BlogList from '../components/Blog/BlogList';
import { API } from "../http/API";
import { Helmet } from "react-helmet"

const Blog = ({solutions}) => {

    const [BlogData, setBlogData] = useState();
    const [BlogMetaData, setBlogMetaData] = useState();

    useEffect(() => {
        API.get(`/pages`)
            .then((response) => {

                let currentPage = response.data.data.find((x) => x.slug === "blog-page");
                setBlogMetaData(currentPage);

            })
            .catch((err) => console.log(err));

        API.get(`/sections`)
            .then((res) => {

                let homepage = res.data.data.find((x) => x.slug === "blog-page");
                setBlogData(homepage);

            })
            .catch((err) => console.log(err));

    }, []);


    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>{BlogMetaData?.meta_details?.meta_title}</title>
                <meta name="description" content={`${BlogMetaData?.meta_details?.meta_description}`} />
            </Helmet>
            <TopHeader />
            <Navbar  />
            <PageBanner
                pageTitle={BlogData?.content?.banner?.title}
                homePageUrl="/"
                homePageText="Home"
                activePageText={BlogData?.content?.banner?.title}
                bannerImage={BlogData?.content?.banner?.background_image}
            />
            {BlogData?.content?.introSection !== undefined && BlogData?.content?.introSection !== 0 &&
                <BlogList
                    introSection={BlogData?.content?.introSection}
                />
            }
            <Footer />
        </>
    )
}

export default Blog;