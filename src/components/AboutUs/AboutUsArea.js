import React, { useState, useEffect } from "react";

const AboutUsArea = (props) => {
  const [aboutUsArea, setAboutUsArea] = useState();

  useEffect(() => {
    setAboutUsArea(props.IntroSection);
  }, []);

  return (
    <div className="home-company-area">
      <div className="container">
        {props?.IntroSection?.map((item, index) =>
          index % 2 ? (
            <div className="row align-items-center  pt-70 pb-70" key={index}>
              <div className="col-lg-6 col-md-12">
                <div className="company-img">
                  <img src={item.intro_image} alt="company" />
                </div>
              </div>
              <div className="col-lg-6 col-md-12">
                <div className="company-content">
                  <div className="company-tittle">
                    <span
                      style={{
                        color: "#333",
                        textTransform: "uppercase",
                        fontWeight: "bold",
                      }}
                    >
                      {item.subtitle}
                    </span>
                    <h2>{item.title}</h2>
                    <div
                      dangerouslySetInnerHTML={{ __html: item.description }}
                    />
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="row align-items-center pt-70 pb-70" key={index}>
              <div className="col-lg-6 col-md-12">
                <div className="company-content">
                  <div className="company-tittle">
                    <span
                      style={{
                        color: "#333",
                        textTransform: "uppercase",
                        fontWeight: "bold",
                      }}
                    >
                      {item.subtitle}
                    </span>
                    <h2>{item.title}</h2>
                    <div
                      dangerouslySetInnerHTML={{ __html: item.description }}
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-12">
                <div className="company-img">
                  <img src={item.intro_image} alt="company" />
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default AboutUsArea;
