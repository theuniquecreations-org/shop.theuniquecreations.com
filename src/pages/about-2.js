import PageBanner from "@/components/BannerSection/PageBanner";
import FeaturedSection from "@/components/FeaturedSection/FeaturedSection";
import HeaderOne from "@/components/Header/HeaderOne";
import MobileMenu from "@/components/Header/MobileMenu";
import Layout from "@/components/Layout/Layout";
import MainFooter from "@/components/MainFooter/MainFooter";
import ParallaxSection from "@/components/ParallaxSection/ParallaxSection";
import Style from "@/components/Reuseable/Style";
import SearchPopup from "@/components/SearchPopup/SearchPopup";
import SponsorsSection from "@/components/SponsorsSection/SponsorsSection";
import TeamThree from "@/components/TeamSection/TeamThree";
import TestimonialsFour from "@/components/TestimonialsSection/TestimonialsFour";
import React from "react";

const About2 = () => {
  return (
    <Layout pageTitle="About Us">
      <Style />
      <HeaderOne />
      <MobileMenu />
      <SearchPopup />
      <PageBanner title="About Two" page="About" />
      <FeaturedSection className="featured-section__about-two" />
      <TeamThree className="team-three__about-two" />
      <ParallaxSection />
      <TestimonialsFour />
      <SponsorsSection className="sponsors-section__about-two" />
      <MainFooter />
    </Layout>
  );
};

export default About2;
