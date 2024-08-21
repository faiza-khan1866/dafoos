import React from 'react';
import Navbar from '../components/app/Navbar';
import TopHeader from '../components/app/TopHeader';
import PageBanner from '../components/Common/PageBanner';
import Footer from '../components/app/Footer';
import BlogBanner from '../assets/images/careers-banner.jpg';
import NewsDetail from '../components/News/NewsDetail';

const NewsDetails = ({solutions}) => {
    return (
        <>
            <TopHeader />
            <Navbar />
            <PageBanner
                pageTitle="Blog Details"
                homePageUrl="/"
                homePageText="Home"
                activePageText="Blog Details"
                bannerImage={BlogBanner}
            />
            <NewsDetail />
            <Footer />
        </>
    )
}

export default NewsDetails;