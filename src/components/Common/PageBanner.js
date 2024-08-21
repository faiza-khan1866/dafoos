import React from 'react';
import { Link } from "react-router-dom";

const PageBanner = ({ pageTitle, homePageUrl, homePageText, activePageText, bannerImage }) => {
    return (
        <div className="page-title-area" style={{ backgroundImage: 'linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),url(' + bannerImage + ')', backgroundSize: "100%", backgroundRepeat: "no-repeat" }} >
            <div className="container">
                <div className="page-title-content">
                    <h2>{pageTitle}</h2>
                    <ul>
                        <li>
                            <Link to={homePageUrl}>
                                {homePageText}
                            </Link>
                        </li>
                        <li className="active">{activePageText}</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default PageBanner;