import PageBanner from "@/components/BannerSection/PageBanner";
import ContactInfoTwo from "@/components/ContactSection/ContactInfoTwo";
import ContactSectionTwo from "@/components/ContactSection/ContactSectionTwo";
import HeaderOne from "@/components/Header/HeaderOne";
import MobileMenu from "@/components/Header/MobileMenu";
import Layout from "@/components/Layout/Layout";
import FooterNine from "@/components/MainFooter/FooterNine";
import MapBox from "@/components/MapSection/MapBox";
import Style from "@/components/Reuseable/Style";
import SearchPopup from "@/components/SearchPopup/SearchPopup";
import React from "react";

const Contact2 = () => {
  return (
    <Layout pageTitle="Contact">
      <Style />
      <HeaderOne />
      <MobileMenu />
      <SearchPopup />
      <PageBanner title="Contact" />
      <ContactSectionTwo />
      <ContactInfoTwo />
      <MapBox />
      <FooterNine />
    </Layout>
  );
};

export default Contact2;
