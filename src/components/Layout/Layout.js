import Preloader from "@/components/Preloader/Preloader";
import useScroll from "@/hooks/useScroll";
import Head from "next/head";
import React, { useEffect, useState } from "react";
import { Link as ScrollLink } from "react-scroll";

const Layout = ({ children, pageTitle, preloader, mainClass, preloaderClass, thumbnail }) => {
  const [loading, setLoading] = useState(true);
  const { scrollTop } = useScroll(100);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLoading(false);
    }, 400);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Tales Of SuBa | {pageTitle}</title>
        <meta property="og:image" itemprop="image" content={thumbnail} />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="noindex,nofollow" />
        <meta charset="utf-8" />
        <meta name="description" content="Author: A.N. Author, Illustrator: P. Picture, Category: Books, Price:  £9.24, Length: 784 pages" />
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
