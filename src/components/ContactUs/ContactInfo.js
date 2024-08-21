import React from "react";

const ContactInfo = ({ contactInfo }) => {
  return (
    <div className="contact-area pt-100 pb-70 custom-contact-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-sm-6">
            <a
              href={`mailto:${contactInfo?.email}`}
              style={{ width: "100%", height: "100%" }}
            >
              <div className="single-contact">
                <div className="icon">
                  <i className="bx bx-envelope"></i>
                </div>
                <div className="content">
                  <h3>Email</h3>

                  <a href={`mailto:${contactInfo?.email}`}>
                    {contactInfo?.email}
                  </a>
                </div>
              </div>
            </a>
          </div>

          <div className="col-lg-4 col-sm-6">
            <div className="single-contact">
              <div className="icon">
                <i className="bx bx-location-plus"></i>
              </div>
              <div className="content">
                <h3>Location</h3>
                <p
                  dangerouslySetInnerHTML={{
                    __html: contactInfo?.company_address,
                  }}
                ></p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-sm-12">
            <a
              href={`tel:${contactInfo?.phone}`}
              style={{ width: "100%", height: "100%" }}
            >
              <div className="single-contact">
                <div className="icon">
                  <i className="bx bx-phone-call"></i>
                </div>
                <div className="content">
                  <h3>Phone</h3>
                  <a href={`tel:${contactInfo?.phone}`}>{contactInfo?.phone}</a>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
