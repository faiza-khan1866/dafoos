import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/home";
import AboutUs from "./pages/about-us";
import Careers from "./pages/careers";
import ContactUs from "./pages/contact-us";
import PrivacyPolicy from "./pages/privacy-policy";
import TermsConditions from "./pages/terms-conditions";
import Product from "./pages/product";
import ProductInner from "./pages/product-inner";
import Solutions from "./pages/solutions";
import SolutionInner from "./pages/solution-inner";
import Blog from "./pages/blog";
import BlogDetails from "./pages/blog-inner";
import News from "./pages/news";
import NewsDetails from "./pages/news-inner";
import References from "./pages/references";
import OurPartners from "./pages/our-partner";
import FAQs from "./pages/faqs";
import ScrollToTop from "./ScrollToTop";
import NotFound from "./pages/notfound";
import { loadpages } from "./state/feature/pages";
import { useDispatch } from "react-redux";

const App = () => {
  const dispatch = useDispatch();
  // dispatch(loadpages());

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-and-conditions" element={<TermsConditions />} />
        <Route path="/products" element={<Product />} />
        <Route exact path="/products/:id" element={<ProductInner />} />
        <Route path="/solutions" element={<Solutions />} />
        <Route exact path="/solution-details" element={<SolutionInner />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogDetails />} />
        <Route path="/news" element={<News />} />
        <Route path="/news/:id" element={<NewsDetails />} />
        <Route path="/references" element={<References />} />
        <Route path="/our-partners" element={<OurPartners />} />
        <Route path="/faqs" element={<FAQs />} />
        <Route path="/not-found" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/not-found" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
