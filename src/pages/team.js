import PageBanner from "@/components/BannerSection/PageBanner";
import HeaderOne from "@/components/Header/HeaderOne";
import MobileMenu from "@/components/Header/MobileMenu";
import Layout from "@/components/Layout/Layout";
import MainFooter from "@/components/MainFooter/MainFooter";
import Style from "@/components/Reuseable/Style";
import SearchPopup from "@/components/SearchPopup/SearchPopup";
import TeamPage from "@/components/TeamSection/TeamPage";
import React from "react";

const Team = () => {
  return (
    <Layout pageTitle="Team">
      <Style />
      <HeaderOne />
      <MobileMenu />
      <SearchPopup />
      <PageBanner title="Team Members" parent="Page" />
      <TeamPage />
      <MainFooter />
    </Layout>
  );
};

export default Team;
