import PageBanner from "@/components/BannerSection/PageBanner";
import AdminExpenseTracker from "@/components/AdminExpenseTracker/AdminExpenseTracker";
import HeaderOne from "@/components/header/HeaderOne";
import MobileMenu from "@/components/header/MobileMenu";
import Layout from "@/components/Layout/Layout";
import MainFooter from "@/components/MainFooter/MainFooter";
import Style from "@/components/Reuseable/Style";
import SearchPopup from "@/components/SearchPopup/SearchPopup";
import React from "react";

const AdminHome = () => {
  return (
    <Layout pageTitle="Tales of SuBa Admin">
      <Style />
      <HeaderOne />
      <MobileMenu />
      <SearchPopup />
      {/* <PageBanner title="Admin Expense Tracker" page="adminhome" parent="" parentHref="/" /> */}
      <div className="p-5 bg-dark"></div>
      <div className="p-2"></div>
      <AdminExpenseTracker />
      <MainFooter />
    </Layout>
  );
};

export default AdminHome;
