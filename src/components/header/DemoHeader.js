import useScroll from "@/hooks/useScroll";
import logo from "@/images/logo.png";
import Link from "next/link";
import React from "react";
import { Image } from "react-bootstrap";

const DemoHeader = () => {
  const { scrollTop } = useScroll(120);

  return (
    <header
      className={`main-header${
        scrollTop ? " fixed-header" : ""
      } header-style-one header-style-five header-style-six demo-header`}
    >
      <div className="header-upper">
        <div className="inner-container clearfix">
          <div className="logo-box">
            <div className="logo">
              <Link href="/">
                <a title="Linoor - DIgital Agency HTML Template">
                  <Image
                    src={logo.src}
                    width={133}
                    height={34}
                    id="dLogo"
                    className="main-logo"
                    alt="Linoor - DIgital Agency HTML Template"
                    title="Linoor - DIgital Agency HTML Template"
                  />
                </a>
              </Link>
            </div>
          </div>

          <div className="right-menu">
            <a className="theme-btn btn-style-one demo-purchase-btn" href="#">
              <i className="btn-curve"></i>
              <span className="btn-title">Purchase template</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default DemoHeader;
