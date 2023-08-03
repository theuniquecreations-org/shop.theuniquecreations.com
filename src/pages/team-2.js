import PageBanner from "@/components/BannerSection/PageBanner";
import HeaderOne from "@/components/Header/HeaderOne";
import MobileMenu from "@/components/Header/MobileMenu";
import Layout from "@/components/Layout/Layout";
import MainFooter from "@/components/MainFooter/MainFooter";
import Style from "@/components/Reuseable/Style";
import SearchPopup from "@/components/SearchPopup/SearchPopup";
import TeamThree from "@/components/TeamSection/TeamThree";
import React from "react";

const Team2 = () => {
  return (
    <Layout pageTitle="Team">
      <Style />
      <HeaderOne />
      <MobileMenu />
      <SearchPopup />
      <PageBanner title="Team Members" parent="Page" />
      <TeamThree showTitle={false} items={8} />
      <MainFooter />
    </Layout>
  );
};

export default Team2;
