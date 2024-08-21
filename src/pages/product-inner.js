import React, { useState, useEffect } from "react";
// import { useHistory } from "react-router";
import Navbar from "../components/app/Navbar";
import TopHeader from "../components/app/TopHeader";
import PageBanner from "../components/Common/PageBanner";
import Footer from "../components/app/Footer";
import ProductDetails from "../components/ProductInner/ProductDetails";
import { API } from "../http/API";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useSelector, useDispatch } from "react-redux";
import { findProduct } from "../state/feature/products";

const ProductInner = ({ solutions }) => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const allProducts = useSelector((state) => state.product.list);

  // product details api
  const [productDetails, setProductDetails] = useState([]);

  const getProductDetail = () => {
    let currentPageDetails = allProducts.find((product) => product.slug === id);

    setProductDetails(currentPageDetails);
  };

  useEffect(() => {
    getProductDetail();
  });

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{productDetails?.meta_details?.title}</title>
        <meta
          name="description"
          content={`${productDetails?.meta_details?.meta_description}`}
        />
      </Helmet>
      <TopHeader />
      <Navbar />
      <PageBanner
        pageTitle={productDetails?.title}
        homePageUrl="/"
        homePageText="Home"
        activePageText={productDetails?.title}
        bannerImage={productDetails?.backgroundImage}
      />
      <ProductDetails ProductInnerData={productDetails} />
      <Footer />
    </>
  );
};

export default ProductInner;
