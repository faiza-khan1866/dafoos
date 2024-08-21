import React, { useEffect, useState } from "react";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import EnquireForm from "../Common/EnquireForm";
import { API } from "../../http/API";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const SolutionDetails = (props) => {
  const [isOpen, setOpen] = useState(false);
  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);
  const solutionFetched = useSelector((state) => state.solution.list);
  const { id } = useParams();
  return (
    <>
      <div className="product-details-area pt-60 pb-70">
        {solutionFetched?.map((x, i) =>
          i % 2 === 0 ? (
            <div className="container" key={i} id={`services-container-${i}`}>
              <div className="product-detail-boxes odd-services" id={x?.slug}>
                <div className="row align-items-center pb-70">
                  <div className="col-lg-6 col-md-6">
                    <div className="company-content">
                      <div className="company-tittle">
                        <h2>
                          {x?.title}
                          {/* Turnkey Solutions */}
                        </h2>
                        <p
                          dangerouslySetInnerHTML={{
                            __html: x?.long_description,
                          }}
                        ></p>
                        {/* <p>Our team consists of highly trained and experienced engineers and technicians with many having been with us for over 25 years. We pride ourselves in the quality of our workmanship and ability of our workforce.</p>
                                                <p>We provide custom-built and specific Fire & Security Systems solutions for all sectors that require detailed engineering and timely cost-effective Project Management. Our team works closely with clients, consultants, contractors, product partners, Civil Defense, and other related stakeholders to achieve this successfully.</p>
                                                <p>Since our inception in 1988, DAFOOS has gathered up a vast number of project references, ranging from Oil & Gas, Commercial, Government, Malls, Hospitals, Educational Institutions, Hospitality, and Energy to name a few. Their trust in our services is our honor and pride.</p> */}
                        <button
                          onClick={onOpenModal}
                          className="btn btn-enquire"
                        >
                          ENquire now
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <div className="product-img">
                      <img src={x?.backgroundImage} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="container" key={i}>
              <div className="product-detail-boxes even-services" id={x?.slug}>
                <div className="row align-items-center pb-70">
                  <div className="col-lg-6 col-md-6">
                    <div className="product-img">
                      <img src={x?.backgroundImage} alt="" />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <div className="company-content">
                      <div className="company-tittle">
                        <h2>{x?.title}</h2>
                        <p
                          dangerouslySetInnerHTML={{
                            __html: x?.long_description,
                          }}
                        ></p>
                        <button
                          onClick={onOpenModal}
                          className="btn btn-enquire"
                        >
                          ENquire now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        )}

        {/* <div className="container">
                    <div className="product-detail-boxes" id="maintenance">
                        <div className="row align-items-center pb-70">
                            <div className="col-lg-6 col-md-6">
                                <div className="product-img">
                                    <img src="/images/svsystems.jpg" alt="" />
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                                <div className="company-content">
                                    <div className="company-tittle">
                                        <h2>Maintenance</h2>
                                        <p>We have a dedicated team that cater to our customers’ Fire & Security Systems asset maintenance. We render our services across the Emirates and to all types of premises such as Towers, Residences, Offices, Factories & Plants, Storage and Warehouses, Libraries, Museums, Theatres, Schools, Data Centers, and Infrastructure to list a few.</p>
                                        <p>We undertake complete Comprehensive Maintenance Contracts that covers existing system functionality with spares and replacement under our scope as well and Service Contracts that provide reports based on periodic preventive maintenance and breakdown calls with detailed findings for rectifications and recommendations to comply with the AHJ requirements.</p>
                                        <p>Our team works 24/7 to ensure the customers’ Fire & Security Systems are healthy so that in case of an emergency, the systems work as required and lives and property are safe.</p>
                                        <button onClick={onOpenModal} className="btn btn-enquire">ENquire now</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
        {/* <div className="container">
                    <div className="product-detail-boxes" id="trading">
                        <div className="row align-items-center pb-70">
                            <div className="col-lg-6 col-md-6">
                                <div className="company-content">
                                    <div className="company-tittle">
                                        <h2>Trading</h2>
                                        <p>We are stockists and traders of Fire & Security Systems and have a growing number of new agreements with partners from all over the world.</p>
                                        <p>Having an exhaustive range of products readily available ex stock, our Trading Division caters to the product requirements of the industry. Apart from that, we import tailormade systems to suit our customer requirements.</p>
                                        <p>Relevant products have been approved by the respective Civil Defense Authority and listed with Consultant and Client project vendor list. We maintain stock in 4 main storage facilities in different Emirates to ensure convenient logistics for our customers.</p>
                                        <button onClick={onOpenModal} className="btn btn-enquire">ENquire now</button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                                <div className="product-img">
                                    <img src="/images/hochiki.jpg" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
        {/* <div className="container">
                    <div className="product-detail-boxes" id="design">
                        <div className="row align-items-center pb-70">
                            <div className="col-lg-6 col-md-6">
                                <div className="product-img">
                                    <img src="/images/svsystems.jpg" alt="" />
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                                <div className="company-content">
                                    <div className="company-tittle">
                                        <h2>Design</h2>
                                        <p>Our Design Department comprises of well-trained Engineers mastered in working with state of the art software made available to them. We are capable in designing projects of any volume.</p>
                                        <button onClick={onOpenModal} className="btn btn-enquire">ENquire now</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
        {/* <div className="container">
                    <div className="product-detail-boxes" id="civil-defence-certification">
                        <div className="row align-items-center pb-70">
                            <div className="col-lg-6 col-md-6">
                                <div className="company-content">
                                    <div className="company-tittle">
                                        <h2>Civil Defence Certification</h2>
                                        <p>All our products hold the mandatory Civil Defense approvals. Apart from having certification from reputed worldwide product testing & certifying bodies - as a prerequisite for Civil Defense approval- we are insistent in sourcing them from reputed manufacturers as well.</p>
                                        <button onClick={onOpenModal} className="btn btn-enquire">ENquire now</button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                                <div className="product-img">
                                    <img src="/images/hochiki.jpg" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
      </div>
      <Modal open={isOpen} onClose={onCloseModal} center>
        <EnquireForm />
      </Modal>
    </>
  );
};

export default SolutionDetails;
