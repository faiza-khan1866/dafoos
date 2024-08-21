import React from 'react';
import Navbar from '../components/app/Navbar';
import TopHeader from '../components/app/TopHeader';
import PageBanner from '../components/Common/PageBanner';
import Footer from '../components/app/Footer';
import BlogBanner from '../assets/images/careers-banner.jpg';
import NewsList from '../components/News/NewsList';

const News = ({solutions}) => {
    return (
        <>
            <TopHeader />
            <Navbar />
            <PageBanner 
                pageTitle="News" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="News" 
                bannerImage= {BlogBanner}
            />
            <NewsList />        
            <Footer/>
        </>
    )
}

export default News;