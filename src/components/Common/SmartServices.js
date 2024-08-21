import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { API } from "../../http/API";
import { loadproducts } from "../../state/feature/products";

const SmartServices = (props) => {
  const [ProductData, setProductData] = useState([]);
  const [productsList, setProductsList] = useState([]);
  const [visible, setvisibleData] = useState();
  const productFetched = useSelector((state) => state.product.list);
  const allSections = useSelector((state) => state?.section?.list);

  useEffect(() => {
    setProductData(props?.ProductData);
      let productpage = allSections?.find((x) => x.slug === "product-page");
      setProductData(productpage?.content?.introSection);
    
  }, [props]);

  const filteredData =
    props?.productLimit === "all" ? productFetched : productFetched.slice(0, 8);

  return (
    <div className="home-service-area pt-70 pb-70">
      <div className="container">
        <div className="section-title">
          <h2>{ProductData?.title}</h2>
          <div dangerouslySetInnerHTML={{ __html: ProductData?.content }} />
          <br />
          <br />
        </div>

        <div className="row">
          {filteredData.map((item, index) => (
            <div className="col-lg-3 col-sm-6" key={index}>
              <Link to={`/products/${item?.slug}`} style={{ color: "#333" }}>
                <div className="single-service" id={`product-margin-bottom`}>
                  <div className="service-img">
                    <img src={item?.icon} alt="service" />
                  </div>
                  <div className="service-content">
                    <h3>{item.title}</h3>
                    <div
                      dangerouslySetInnerHTML={{
                        __html:
                          item?.short_description?.length > 150
                            ? `${item?.short_description?.substr(0, 150)}...`
                            : item.short_description,
                      }}
                    />
                    {}
                    <Link to={`/products/${item?.slug}`} className="line-bnt">
                      {" "}
                      Read More{" "}
                    </Link>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SmartServices;
