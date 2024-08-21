import React, { useState, useEffect } from "react";
import { API } from "../../http/API";
import { Link } from "react-router-dom";
import { loadSolutions } from "../../state/feature/solutions";

import { useDispatch ,useSelector } from "react-redux";

const Solutions = (props) => {
  const [solutionsData, setSolutionsData] = useState([]);
  const dispatch = useDispatch();
  const solutionFetched = useSelector((state) => state.solution.list);


  const fetchSolutions = () => dispatch(loadSolutions());

  return (
    <div className="home-solution-area home-solution-area1  pt-70 pb-70">
      <div className="container">
        <div className="section-title">
          <h2>{solutionsData?.title}</h2>
          <div dangerouslySetInnerHTML={{ __html: solutionsData?.content }} />
        </div>
        <div className="row">
          {/* <div className="solutions-row"> */}
          {solutionFetched?.map((item, index) => (
            // <div className="solutions-service" key={index}>
            <div className="col" key={index}>
              <Link
                to={`/solution-details/#${item?.slug}`}
                onClick={() => {
                  setTimeout(() => {
                    document.getElementById(`${item?.slug}`).scrollIntoView();
                  }, 1000);
                }}
              >
                <div className="serviceArea-img">
                  <img src={item?.icon} />
                </div>
                <div className="service-content">
                  <h3>{item.title}</h3>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: item?.short_description,
                    }}
                  />
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Solutions;
