import React from 'react';
import data from '../../data/data.json';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import icon1 from '../../assets/images/partner/honeywell-logo.png';
import icon2 from '../../assets/images/partner/ziton-icon.png';
import icon3 from '../../assets/images/partner/flame-icon.png';
import icon4 from '../../assets/images/partner/hochiki-icon.png';
import icon5 from '../../assets/images/partner/pyrochem-icon.png';
import icon6 from '../../assets/images/partner/ziton-icon.png';
import icon7 from '../../assets/images/partner/logo-echo.png';
import icon8 from '../../assets/images/partner/logo-firescape.png';




const partnersData = [
    {
        icon: icon1
    },
    {
        icon: icon2
    },
    {
        icon: icon3
    },
    {
        icon: icon4
    },
    {
        icon: icon5
    },
    {
        icon: icon6
    },
    {
        icon: icon7
    },
    {
        icon: icon8
    }
];

const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 6
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 6
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 4
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

const OurPartner = () => {

    return (
        <div className="home2-choose-area pt-70 pb-70">
            <div className="container">
                <div className="section-title">
                    <h2>Our partners</h2>
                </div>
                <div className="row">
                    <Carousel
                        responsive={responsive}
                        autoPlay={true}
                        autoPlaySpeed={4000}
                        transitionDuration={4000}
                        infinite={true}
                    >
                        {partnersData.map((item, index) => (
                            <div className="single-choose single-choose-padding-reudce" key={index}>
                                <div className="icon">
                                    <img src={item.icon} alt="" />
                                </div>
                            </div>
                        ))}
                    </Carousel>
                </div>
            </div>
        </div>
    )
}

export default OurPartner;