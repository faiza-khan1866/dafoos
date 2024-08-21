import React from 'react';
import TopHeader from '../components/app/TopHeader';
import Navbar from '../components/app/Navbar';
import OurPartner from '../components/Common/OurPartner';
import Footer from '../components/app/Footer';
import PageBanner from '../components/Common/PageBanner';
import PartnerBanner from '../assets/images/careers-banner.jpg';
import { Helmet } from "react-helmet"

class OurPartners extends React.Component {

	render() {
		return (
			<div>
				<Helmet>
					<meta charSet="utf-8" />
					<title>Our Partner</title>
					<meta name="description" content={"Our Partner"} />
				</Helmet>
				<TopHeader />
				<Navbar />
				<PageBanner
					pageTitle="Our Partners"
					homePageUrl="/"
					homePageText="Home"
					activePageText="Our Partners"
					bannerImage={PartnerBanner}
				/>
				<OurPartner />
				<Footer/>
			</div>
		);
	}

}

export default OurPartners;