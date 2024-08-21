import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import bannerLogo from '../../assets/images/logo/DafoosLogoWhite.png';

const MainBanner = (props) => {
    const [display, setDisplay] = useState(false);
    const [BannerData, setBannerData] = useState([]);

    useEffect(() => {
        setDisplay(true);
    }, [])
    useEffect(() => {
        setBannerData(props?.BannerData?.content?.sliderSection[0]);
    }, [props.BannerData]);
    return (
        <div className="slider-area-2">
            < div className="home-slider" >
                <div className="single-slider single-slider-bg-1"
                    style={{ backgroundImage: `url(${BannerData?.background_image})` }}
                >
                    <div className="d-table">
                        <div className="d-table-cell">
                            <div className="container">
                                <div className="row align-items-center">
                                    <div className="col-lg-12 text-center">
                                        <div className="slider-content one">
                                            <img src={BannerData?.logo_image} alt="logo" />
                                            <div dangerouslySetInnerHTML={{ __html: BannerData?.description }} />
                                            <div className="slider-btn text-center">
                                                <Link to="/contact-us">
                                                    <a className="box-btn">Contact Us</a>
                                                </Link>
                                                <Link to="/about-us">
                                                    <a className="box-btn border-btn">About us</a>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
            {/* </OwlCarousel> : ''} */}
        </div >

    )
}

export default MainBanner;