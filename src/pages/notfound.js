import React from "react";
import TopHeader from "../components/app/TopHeader";
import Navbar from "../components/app/Navbar";
import Footer from "../components/app/Footer";
function NotFound(props) {
  return (
    <div>
      <div style={{ background: "#273D95", height: "135px" }}>
        <TopHeader />
        <Navbar />
      </div>
      <div className="container" >
        <div className="row">
          <h3 style={{ margin: "10rem auto" }}>404 - Not Found</h3>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default NotFound;
