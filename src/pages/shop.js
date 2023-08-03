import PageBanner from "@/components/BannerSection/PageBanner";
import HeaderOne from "@/components/Header/HeaderOne";
import MobileMenu from "@/components/Header/MobileMenu";
import Layout from "@/components/Layout/Layout";
import MainFooter from "@/components/MainFooter/MainFooter";
import Style from "@/components/Reuseable/Style";
import SearchPopup from "@/components/SearchPopup/SearchPopup";
import ShopPage from "@/components/ShopPage/ShopPage";
import React from "react";

const Shop = () => {
  return (
    <Layout pageTitle="Shop Page">
      <Style />
      <HeaderOne />
      <MobileMenu />
      <SearchPopup />
      <PageBanner title="Products" page="Shop" />
      <ShopPage />
      <MainFooter />
    </Layout>
  );
};

export default Shop;
