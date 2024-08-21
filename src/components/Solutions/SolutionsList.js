import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import EnquireForm from "../Common/EnquireForm";
import { API } from "../../http/API";
import { useSelector } from "react-redux";

const SolutionList = (props) => {
  const [isOpen, setOpen] = useState(false);
  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  const [SolutionsIntro, setSolutionsIntro] = useState();
  const [solutionsList, setSolutionsList] = useState([]);
  const solutionFetched = useSelector((state) => state.solution.list);
  useEffect(() => {
    setSolutionsIntro(props?.IntroSection);
  }, []);

  return (
    <div className="home-service-area solution-list-area pt-100 pb-70">
      <div className="container">
        <div className="section-title">
          <h2>{SolutionsIntro?.title}</h2>
          <div dangerouslySetInnerHTML={{ __html: SolutionsIntro?.content }} />
        </div>

        <div className="row solution-list-row pb-70">
          {solutionFetched?.map((item, index) => (
            <div className="col-lg-4 col-sm-6" key={index}>
              <Link
                to={`/solution-details/#${item?.slug}`}
                style={{ color: "#333" }}
                onClick={() => {
                  setTimeout(() => {
                    document.getElementById(`${item?.slug}`).scrollIntoView();
                  }, 1000);
                }}
              >
                <div
                  className="single-service"
                  style={{ margin: " 0px 0px 50px 0px" }}
                >
                  <div className="service-img">
                    <img src={item?.icon} alt="service" />
                  </div>
                  <div className="service-content">
                    <h3>{item.title}</h3>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: item?.short_description?.substr(0, 109),
                      }}
                    />
                    <Link
                      to={`/solution-details/#${item?.slug}`}
                      className="line-bnt"
                      onClick={() => {
                        setTimeout(() => {
                          document
                            .getElementById(`${item?.slug}`)
                            .scrollIntoView();
                        }, "smooth");
                      }}
                    >
                      {" "}
                      Read More{" "}
                    </Link>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
        <div className="pb-70 solution-enquire">
          <button onClick={onOpenModal} className="btn btn-enquire">
            ENquire now
          </button>
        </div>
      </div>
      <Modal open={isOpen} onClose={onCloseModal} center>
        <EnquireForm />
      </Modal>
    </div>
  );
};

export default SolutionList;
