import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import icon1 from "../../assets/images/logo/FPA.png";
import icon2 from "../../assets/images/logo/nfpa.png";
import icon3 from "../../assets/images/logo/TUV_iso.png";
import icon4 from "../../assets/images/logo/TUV_iso-1.png";
import icon5 from "../../assets/images/logo/TUV_iso-2.png";
import { API } from "../../http/API";
import { Alert } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

const Footer = (props) => {
  const currentYear = new Date().getFullYear();
  // const dispatch = useDispatch();
  const solutionFetched = useSelector((state) => state.solution.list);

  const [email, setEmail] = useState("");
  const [alertData, setAlertData] = useState({
    varient: "success",
    alertText: "",
    show: false,
  });

  const sendEmail = () => {
    if (
      !email.match(
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
    ) {
      setAlertData({
        varient: "danger",
        alertText: "Email is required",
        show: true,
      });
      return false;
    }

    let data = {
      email: email,
      type: "subscription_form",
    };

    API.post("/enquiry", data)
      .then((res) => {
        setAlertData({
          varient: "success",
          show: true,
          alertText: "Thank you for subscribing to our newsletter.",
          permission: false,
        });
        setEmail("");
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <footer className="footer-area pt-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 col-md-12">
              <div className="content">
                <div className="logo">
                  <Link to="/">
                    <img src="/images/logo.png" alt="logo" />
                  </Link>
                </div>
                <p>
                  After three decades, we are glad to announce the launch of our
                  new DAFOOS logo as part of the ongoing evolution of our
                  company’s brand. We believe the new look matches what we have
                  become since 1988; DAFOOS as the most dependable and growing
                  fire contractor in UAE & Qatar.
                </p>
                <div className="subscribe">
                  <form className="newsletter-form">
                    <input
                      type="email"
                      name="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="form-control"
                      placeholder="Your Email"
                    />
                    <button
                      className="box-btn"
                      type="button"
                      onClick={sendEmail}
                    >
                      Subscribe
                    </button>
                  </form>
                  <Alert
                    variant={alertData.varient}
                    show={alertData.show}
                    onClose={() => setAlertData({ ...alertData, show: false })}
                    dismissible
                  >
                    {alertData.alertText}
                  </Alert>
                </div>
              </div>
            </div>

            <div className="col-lg-1 col-md-12"></div>

            <div className="col-lg-2 col-md-4">
              <div className="content ml-15">
                <h3>Quick links</h3>
                <ul className="footer-list">
                  <li>
                    <Link to="/about-us">About us</Link>
                  </li>
                  <li>
                    <Link to="/products">Our Products</Link>
                  </li>
                  <li>
                    <Link to="/references">References</Link>
                  </li>
                  <li>
                    <Link to="/our-partners">Our Partners</Link>
                  </li>
                  <li>
                    <Link to="/careers">Careers</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-2 col-md-4">
              <div className="content">
                <h3>Solutions</h3>
                <ul className="footer-list">
                  {solutionFetched?.map((x, i) => (
                    <li key={i}>
                      <Link
                        to={`/solution-details/#${x.slug}`}
                        onClick={() => {
                          setTimeout(() => {
                            document
                              .getElementById(`${x.slug}`)
                              .scrollIntoView();
                          }, 1000);
                        }}
                      >
                        {x?.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="col-lg-2 col-md-4">
              <div className="content contacts">
                <h3 className="ml-40">Help Centre</h3>
                <ul className="footer-list">
                  {/* <li>
                    <Link to="/privacy-policy">Help</Link>
                  </li> */}
                  {/* <li>
                    <Link to="/faqs">FAQs</Link>
                  </li> */}
                  <li>
                    <Link to="/contact-us">Contact Us</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="copy-area">
          <div className="row">
            <div className="col-lg-3">
              <ul className="menu">
                <li>
                  <Link to="/">
                    <img src={icon1} alt="" />
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <img src={icon2} alt="" />
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <img src={icon3} alt="" />
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <img src={icon4} alt="" />
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <img src={icon5} alt="" />
                  </Link>
                </li>
              </ul>
            </div>

            <div className="col-lg-7">
              <p className="right">
                Copyright &copy; {currentYear} DAFOOS fire & Security •{" "}
                <Link to="/terms-and-conditions">Terms of service</Link>{" "}
                {/* •{" "} */}
                {/* <Link to="/privacy-policy">Privacy Policy</Link> */}•
                Designed & Managed by{" "}
                <a href="http://prismdigital.ae/" target="_blank">
                  Prism Digital
                </a>
              </p>
            </div>

            <div className="col-lg-2">
              <div className="footer_social">
                <ul className="social">
                  <li>
                    <a
                      href="https://www.linkedin.com/company/dafoos-group"
                      target="_blank"
                    >
                      <i className="bx bxl-linkedin"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
