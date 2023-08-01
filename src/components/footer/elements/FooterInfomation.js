import React from "react";
import Link from "next/link";

import SocialIcons from "../../other/SocialIcons";

export default function FooterInfomation() {
  return (
    <div className="footer-info">
      <Link href={process.env.PUBLIC_URL + "/"}>
        <a className="footer-info__logo">
          <img className="logo" src={process.env.PUBLIC_URL + "/assets/images/logo.png"} alt="talesofsuba logo" />
        </a>
      </Link>
      <ul>
        <li>
          Instagram:{" "}
          <a href="https://www.instagram.com/talesofsuba" target="blank">
            @talesofsuba
          </a>
        </li>

        <li>Email: talesofsuba@gmail.com</li>
      </ul>
      <SocialIcons type="primary" shape="circle" className="-btn-light" />
    </div>
  );
}
