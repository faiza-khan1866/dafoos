import React, { useState, useEffect } from "react";
import Navbar from "../components/app/Navbar";
import TopHeader from "../components/app/TopHeader";
import PageBanner from "../components/Common/PageBanner";
import Footer from "../components/app/Footer";
import ProjectsArea from "../components/References/Projects";
import MaintenanceArea from "../components/References/Maintenance";
import { API } from "../http/API";
import { Helmet } from "react-helmet";
import { loadsections } from "../state/feature/sections";
import { loadpages } from "../state/feature/pages";
import { useDispatch, useSelector } from "react-redux";

const References = ({ solutions }) => {
  const [isProjectOpen, setProjectOpen] = useState(true);
  const [isMaintenanceOpen, setMaintenanceOpen] = useState(false);
  const [ReferencesData, setReferencesData] = useState();
  const [MaintainanceData, setMaintainanceData] = useState();
  const [ReferencesMetaData, setReferencesMetaData] = useState();
  const [ bannerData , setBannerData] = useState();

  const allPages = useSelector((state) => state?.page?.list);
  const allSections = useSelector((state) => state?.section?.list);
  const dispatch = useDispatch();
  const loadedPages = () => dispatch(loadpages());
  const loadedSections = () => dispatch(loadsections());

  const onOpenProject = () => {
    setProjectOpen(true);
    setMaintenanceOpen(false);
  };

  const onOpenMaintenance = () => {
    setProjectOpen(false);
    setMaintenanceOpen(true);
  };

  useEffect(() => {
    loadedPages();
    loadedSections();

    let currentPage = allPages.find((x) => x.slug === "references-page");
    setReferencesMetaData(currentPage);

    let references = allSections.find((x) => x.slug === "references-page");
    setReferencesData(references?.content?.projectSection);
    setMaintainanceData(references?.content?.maintenanceSection);
    setBannerData(references?.content.banner);

  }, [allPages, allSections]);

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{ReferencesMetaData?.meta_details?.meta_title}</title>
        <meta
          name="description"
          content={`${ReferencesMetaData?.meta_details?.meta_description}`}
        />
      </Helmet>
      <TopHeader />
      <Navbar />
      <PageBanner
        pageTitle={bannerData?.title}
        homePageUrl="/"
        homePageText="Home"
        activePageText={bannerData?.title}
        bannerImage={bannerData?.background_image}
      />
      <div className="references-tab-area pt-100">
        <div className="container">
          <ul>
            <li
              onClick={onOpenProject}
              className={`references-tab-btn ${isProjectOpen ? "active" : ""} `}
            >
              Projects
            </li>
            <li
              onClick={onOpenMaintenance}
              className={`references-tab-btn ${
                isMaintenanceOpen ? "active" : ""
              } `}
            >
              Maintenance
            </li>
          </ul>
        </div>
      </div>
      {isProjectOpen && <ProjectsArea projects={ReferencesData} />}
      {isMaintenanceOpen && <MaintenanceArea  maintenance={MaintainanceData} />}
      <Footer />
    </>
  );
};

export default References;
