import PageBanner from "@/components/BannerSection/PageBanner";
import AdminExpenseTracker from "@/components/AdminAppHome/AdminAppHome";
import HeaderOne from "@/components/header/HeaderOne";
import MobileMenu from "@/components/header/MobileMenu";
import Layout from "@/components/Layout/Layout";
import MainFooter from "@/components/MainFooter/MainFooter";
import Style from "@/components/Reuseable/Style";
import SearchPopup from "@/components/SearchPopup/SearchPopup";
import React from "react";
import image from "@/images/pr_source.png";
import icon from "@/images/subaapplogo.jpg";

const AdminHome = () => {
  return (
    <Layout pageTitle="Tales of SuBa - App Home" thumbnail={image.src} icon={icon.src} themecolor="#ffffff">
      {/* <Style /> */}
      {/* <HeaderOne /> */}
      {/* <MobileMenu /> */}
      {/* <SearchPopup /> */}
      {/* <PageBanner title="Admin Expense Tracker" page="adminhome" parent="" parentHref="/" /> */}
      {/* <MainFooter /> */}
    </Layout>
  );
};

export default AdminHome;
