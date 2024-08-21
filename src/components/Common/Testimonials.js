import React, { useState, useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Testimonial01 from "../../assets/images/testimonial01.jpg";
import Testimonial02 from "../../assets/images/ceo.jpg";
import { API } from "../../http/API";

const Testimonials = () => {
  const [testimonialData, setTestimonialData] = useState();

  useEffect(() => {
    API.get(`/testimonials`)
      .then((response) => {
        setTestimonialData(response.data.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="client-area pt-100 bg-color">
      <div className="container">
        <div className="section-title">
          <span>Executives’ Quote</span>
          {/* <h2>Chairman’s message</h2> */}
        </div>

        <div className="client-wrap owl-carousel owl-theme pb-5">
          <Carousel>
            {testimonialData?.map((item, index) => (
              <div className="single-client-testimonial" key={index}>
                <h2>{item.title}</h2>
                <div className="row">
                  <div className="col-lg-4 col-sm-6">
                    <img src={item.featured_image} alt="img" />
                  </div>
                  <div className="col-lg-8 col-sm-6 testimonial_detail">
                    <div className="testimonial_box">
                      <div
                        dangerouslySetInnerHTML={{ __html: item.description }}
                      />
                      <h3>{item.name}</h3>
                      <span>{item.designation}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
