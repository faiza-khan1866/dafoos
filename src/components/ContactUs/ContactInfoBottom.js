import React from "react";

const ContactInfoBottom = ({ locationInfo }) => {
  return (
    <div className="contact-area  custom-contact-area">
      <div className="row">
        {locationInfo?.map((x, i) => (
          <div className="col-lg-6 col-sm-6" key={i}>
            <div className="single-contact custom-single-contact">
              <div className="icon custom-location-design">
                {/* <a href={x?.maplink} target="_blank" style={{ color: "white" }}> */}
                  <i className="bx bx-location-plus"></i>
                {/* </a> */}
              </div>
              <div className="content custom-content-design">
                <iframe
                  src={x?.maplink}
                  width="100%"
                  height="100%"
                  style={{ border: "0" }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
                <h3>{x?.title}</h3>
                <p
                  dangerouslySetInnerHTML={{
                    __html: x?.address,
                  }}
                ></p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactInfoBottom;
