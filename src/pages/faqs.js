import PageBanner from "@/components/BannerSection/PageBanner";
import CallToSectionTwo from "@/components/CallToSection/CallToSectionTwo";
import FaqsSection from "@/components/FaqsSection/FaqsSection";
import GetQuoteThree from "@/components/GetQuote/GetQuoteThree";
import HeaderOne from "@/components/Header/HeaderOne";
import MobileMenu from "@/components/Header/MobileMenu";
import Layout from "@/components/Layout/Layout";
import MainFooter from "@/components/MainFooter/MainFooter";
import Style from "@/components/Reuseable/Style";
import SearchPopup from "@/components/SearchPopup/SearchPopup";
import React from "react";

const faqs = () => {
  return (
    <Layout pageTitle="FAQs">
      <Style />
      <HeaderOne />
      <MobileMenu />
      <SearchPopup />
      <PageBanner title="FAQs" />
      <FaqsSection />
      <GetQuoteThree />
      <CallToSectionTwo className="alternate" />
      <MainFooter />
    </Layout>
  );
};

export default faqs;
