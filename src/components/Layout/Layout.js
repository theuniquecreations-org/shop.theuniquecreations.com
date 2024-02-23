import Preloader from "@/components/Preloader/Preloader";
import useScroll from "@/hooks/useScroll";
import Head from "next/head";
import React, { useEffect, useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import config from "../../config.json";

const Layout = ({ children, pageTitle, preloader, mainClass, preloaderClass, thumbnail, description }) => {
  const defaulttitle = "Tales of SuBa | Books Review | Blogs";
  const [loading, setLoading] = useState(true);
  const [title, setTitle] = useState(null);
  const [description1, setDescription] = useState(null);
  const { scrollTop } = useScroll(100);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLoading(false);
    }, 400);
    setTitle(pageTitle);
    setDescription(description);
    console.log("pagedescription", description1);
    return () => clearTimeout(timeoutId);
  }, [pageTitle, description1]);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{title === null || title === "" || title === undefined || title === "undefined" ? defaulttitle : title}</title>
        <meta property="og:title" content={pageTitle === null || pageTitle === "" || pageTitle === undefined || pageTitle === "undefined" ? defaulttitle : pageTitle} />
        <meta property="og:image" itemprop="image" content={thumbnail === null || thumbnail === "" || thumbnail === undefined ? config.favicon : thumbnail} />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="Tales of SuBa" />
        <meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index,follow" />
        <meta
          name="keywords"
          content="Book Review, Romance Books, Fiction 
          Books, Bookreview, Good Story books, top book review, tales of suba, talesofsuba, tales of suba blogs"
        />
        <meta charset="utf-8" />
        <meta name="description" content={description1 === null || description1 === "" || description1 === undefined ? config.sitedescription : description1} />
        <meta name="og:description" content={description1 === null || description1 === "" || description1 === undefined ? config.sitedescription : description1} />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-7F27M995N4"></script>
      </Head>
      <Preloader className={preloaderClass} loading={loading} bg={preloader} />
      <main id="wrapper" style={{ opacity: loading ? 0 : 1 }} className={`page-wrapper ${mainClass}`}>
        {children}
      </main>
      {scrollTop && (
        <ScrollLink to="wrapper" smooth={true} duration={500} id="backToTop" style={{ cursor: "pointer" }} className="scroll-to-target scroll-to-top d-inline-block fadeIn animated">
          <i className="fa fa-angle-up"></i>
        </ScrollLink>
      )}
    </>
  );
};

export default Layout;
// or Dynamic metadata
