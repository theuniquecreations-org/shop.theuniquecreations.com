import { sidebar } from "@/data/sidebarPageContainerTwo";
import Link from "next/link";
import React, { Fragment, useEffect, useState } from "react";
import { Image } from "react-bootstrap";
import TextSplit from "../Reuseable/TextSplit";
import axios from "axios";
import config from "../../config.json";

const { categories, tags, comments, posts } = sidebar;

const SidebarSide = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    console.log(formData.get("search"));
  };

  const [blog, setBlog] = useState([]);
  const [blogrecent, setBlogRecent] = useState([]);

  useEffect(() => {
    console.log("ssnbloginisde");
    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");
    const type = "bookreview";
    console.log("ssnid", id);
    const fetchData = async () => {
      console.log("ssnbloginisdefetch");
      id === "undefined" ? "a" : id;
      //const response = await axios.get(config.service_url + "/items/" + id);
      const recentblog = await axios.get(config.service_url + "/itemsbytype/" + type);
      //setBlog(response.data[0]);
      setBlogRecent(recentblog.data);
      console.log("recent post", recentblog.data);
    };

    fetchData();
  }, []);

  return (
    <aside className="sidebar blog-sidebar">
      <div className="sidebar-widget search-box">
        <div className="widget-inner">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input type="search" name="search" placeholder="Search" required />
              <button type="submit">
                <span className="icon flaticon-magnifying-glass-1"></span>
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="sidebar-widget recent-posts">
        <div className="widget-inner">
          <div className="sidebar-title">
            <h4>Latest Posts</h4>
          </div>

          {blogrecent.map((post) => (
            <div key={post.id} className="post">
              <figure className="post-thumb">
                <Image src={post.thumbnail} alt="" />
              </figure>
              <h5 className="text">
                <a href={"/blog-details?id=" + post.slug}>{post.title}</a>
              </h5>
            </div>
          ))}
        </div>
      </div>

      <div className="sidebar-widget archives d-none">
        <div className="widget-inner">
          <div className="sidebar-title">
            <h4>Categories</h4>
          </div>
          <ul>
            {categories.map(({ id, title, href }) => (
              <li key={id}>
                <Link href={href}>{title}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="sidebar-widget popular-tags d-none">
        <div className="widget-inner">
          <div className="sidebar-title">
            <h4>Tags</h4>
          </div>
          <div className="tags-list clearfix">
            {tags.map(({ id, title, href }) => (
              <Fragment key={id}>
                <a href={href}>{title}</a>
                {tags.length !== id && ", "}
              </Fragment>
            ))}
          </div>
        </div>
      </div>

      <div className="sidebar-widget recent-comments d-none">
        <div className="widget-inner">
          <div className="sidebar-title">
            <h4>Comments</h4>
          </div>
          {comments.map(({ id, text }) => (
            <div key={id} className="comment">
              <div className="icon">
                <span className="flaticon-speech-bubble-2"></span>
              </div>
              <h5 className="text">
                <a href="#">
                  <TextSplit text={text} />
                </a>
              </h5>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default SidebarSide;
