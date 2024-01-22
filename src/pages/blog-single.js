import PageBanner from "@/components/BannerSection/PageBanner";
import HeaderOne from "@/components/header/HeaderOne";
import MobileMenu from "@/components/header/MobileMenu";
import Layout from "@/components/Layout/Layout";
import MainFooter from "@/components/MainFooter/MainFooter";
import Style from "@/components/Reuseable/Style";
import SearchPopup from "@/components/SearchPopup/SearchPopup";
import SidebarPageContainerTwo from "@/components/SidebarPageContainerTwo/SidebarPageContainerTwo";
import React from "react";

const BlogSingle = () => {
  return (
    <Layout pageTitle="Blog Single">
      <Style />
      <HeaderOne />
      <MobileMenu />
      <SearchPopup />
      <PageBanner title="Blog Posts" page="Blog Single" />
      <SidebarPageContainerTwo isDetails />
      <MainFooter />
    </Layout>
  );
};

export default BlogSingle;
