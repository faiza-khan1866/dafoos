import React from 'react';
import icon1 from '../../assets/images/logo/FPA.png';
import icon2 from '../../assets/images/logo/nfpa.png';
import icon3 from '../../assets/images/logo/TUV_iso.png';
import icon4 from '../../assets/images/logo/TUV_iso-1.png';
import icon5 from '../../assets/images/logo/TUV_iso-2.png';

const AccreditationsMemberships = () => {
    return (
        <div className="about-accreditations-memberships pt-100 pb-70">
            <div className="container">
                <div className="section-title">
                    <h2>Accreditations & Memberships</h2>
                </div>
                <div className="accreditations-memberships">
                    <div className="single-choose">
                        <div className="icon">
                            <img src={icon1} alt="" />
                            <h3>NFPA Member</h3>
                        </div>
                    </div>
                    <div className="single-choose">
                        <div className="icon">
                            <img src={icon2} alt="" />
                            <h3>FPA Member </h3>
                        </div>
                    </div>
                    <div className="single-choose">
                        <div className="icon">
                            <img src={icon3} alt="" />
                            <h3>TUV ISO 45001</h3>
                        </div>
                    </div>
                    <div className="single-choose">
                        <div className="icon">
                            <img src={icon4} alt="" />
                            <h3>TUV ISO 45001</h3>
                        </div>
                    </div>
                    <div className="single-choose">
                        <div className="icon">
                            <img src={icon5} alt="" />
                            <h3>TUV ISO 45001</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AccreditationsMemberships;