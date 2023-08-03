import HeaderOne from "@/components/Header/HeaderOne";
import MobileMenu from "@/components/Header/MobileMenu";
import Layout from "@/components/Layout/Layout";
import MainFooterThree from "@/components/MainFooter/MainFooterThree";
import ParallaxPage from "@/components/ParallaxSection/ParallaxPage";
import Style from "@/components/Reuseable/Style";
import React from "react";

const ParallaxHome = () => {
  return (
    <Layout pageTitle="Home 03">
      <Style />
      <HeaderOne
        logo={2}
        links={false}
        headerStyle="header-style-one header-style-four header-style-five"
      />
      <MobileMenu />
      <ParallaxPage />
      <MainFooterThree />
    </Layout>
  );
};

export default ParallaxHome;
