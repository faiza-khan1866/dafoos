import React, { useState, useEffect } from "react";
import { API } from "../../http/API";

const MaintenanceArea = ({ maintenance }) => {
  const [maintenanceSectionData, setMaintenanceSectionData] = useState();

//   useEffect(() => {
//     // setMaintenanceSectionData(props?.ProjectsData)
//     API.get(`/sections`)
//       .then((res) => {
//         let homepage = res.data.data.find((x) => x.slug === "references-page");
//         setMaintenanceSectionData(homepage?.content?.maintenanceSection);
//       })
//       .catch((err) => console.log(err));
//   }, []);

  return (
    <div className="home-company-area">
      <div className="container">
        {maintenance?.map((item, index) =>
          index % 2 ? (
            <div
              className="row align-items-center  pt-100 pb-70 even-maintenance"
              key={index}
            >
              <div className="col-lg-6 col-md-6">
                <div className="company-img">
                  <img src={item.project_image} alt="company" />
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="company-content">
                  <div className="company-tittle">
                    <h2>{item.title}</h2>
                    {/* <p style={{ fontWeight: 'bold' }}>{item.bold_description}</p>
                                        <p>{item.description}</p> */}
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div
              className="row align-items-center pb-70 odd-maintenance"
              key={index}
            >
              <div className="col-lg-6 col-md-6">
                <div className="company-content">
                  <div className="company-tittle">
                    <h2>{item.title}</h2>
                    {/* <p style={{ fontWeight: 'bold' }}>{item.bold_description}</p>
                                        <p>{item.description}</p> */}
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="company-img">
                  <img src={item.project_image} alt="company" />
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default MaintenanceArea;
