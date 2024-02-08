import PageBanner from "@/components/BannerSection/PageBanner";
import HeaderOne from "@/components/header/HeaderOne";
import MobileMenu from "@/components/header/MobileMenu";
import Layout from "@/components/Layout/Layout";
import MainFooter from "@/components/MainFooter/MainFooter";
import Style from "@/components/Reuseable/Style";
import SearchPopup from "@/components/SearchPopup/SearchPopup";
import SidebarPageContainerTwo from "@/components/SidebarPageContainerTwo/SidebarPageContainerTwo";
import React, { useState, useEffect } from "react";
import axios from "axios";
import config from "../config.json";

const BookReviewDetails = () => {
  const [singleblog, setSingleblog] = useState([]);
  const [loading, setLoading] = useState(false);
  var response;
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = {};
    inputs.forEach(({ name }) => (data[name] = formData.get(name)));
    console.log(data);
  };
  useEffect(() => {
    const getbookDetails = async () => {
      const params = new URLSearchParams(window.location.search);
      const id = params.get("id");
      id === "undefined" ? "a" : id;
      try {
        setLoading(true);
        const response = await axios.get(config.service_url + "/items/" + id).then((response) => {
          let dataObject = response.data[0];
          setSingleblog(dataObject);
          console.log("bookreview dataObject", dataObject);
          console.log("bookreview singleblog", singleblog);
          console.log("bookreview image", dataObject.thumbnail);
          setLoading(false);
        });
      } catch {
        console.log("bookreview error");
      }
    };
    //getbookDetails();
  }, []);

  return (
    <Layout pageTitle="Book Reviews" thumbnail={config.bookreviewthumbnail}>
      <Style />
      <HeaderOne />
      <MobileMenu />
      <SearchPopup />
      <PageBanner title="Book Details" page="Book Details" />
      {!loading ? (
        <SidebarPageContainerTwo isDetails blog={singleblog} />
      ) : (
        <p className="p-5">
          <h5>Please wait while we are loading...</h5>
        </p>
      )}
      <div className="sponsors-section__about-two">
        <br />
        <br />
      </div>
      <MainFooter />
    </Layout>
  );
};

export default BookReviewDetails;
