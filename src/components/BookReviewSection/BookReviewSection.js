import React, { useEffect, useState } from "react";
import newsSection from "@/data/newsSection";
import useActive from "@/hooks/useActive";
import Link from "next/link";
import { Row } from "react-bootstrap";
import SingleNews from "./SingleNews";
import axios from "axios";
import config from "../../config.json";
const { title, newsData } = newsSection;

const NewsSection = ({ className = "", showTitle = true, isMore = false }) => {
  const ref = useActive("#blog");
  const [loading, setLoading] = useState(false);
  const [allpost, setAllPost] = useState([]);
  // call service to get blog data
  const type = "bookreview";
  const [blog, setBlog] = useState([]);
  console.log("ssnblog", blog);
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    console.log(formData.get("search"));
    applyFilter(formData.get("search"));
  };

  const applyFilter = (searchValue) => {
    console.log("searchvalue", searchValue);
    if (searchValue !== "") {
      const filteredData = blog.filter((data) => {
        console.log("searchdata", data);
        return Object.keys(data).some((k) => data[k]?.toString().toLowerCase().includes(searchValue.toLowerCase().trim()));
      });

      setBlog(filteredData);
    } else {
      setBlog(allpost);
    }
  };
  //Paginate()

  useEffect(() => {
    console.log("ssnbloginisde");
    const fetchData = async () => {
      setLoading(true);
      console.log("ssnbloginisdefetch");
      const response = await axios.get(config.service_url + "itemsbytype/" + type);
      setBlog(response.data);
      setAllPost(response.data);
      console.log("ssnbloginisde blog single ", response.data);

      //  const response = await axios.get(config.service_url + "/blog/" + id);
      //  setBlog(response.data[0]);
      //  setBlogRecent(response.data);
    };

    fetchData().then(() => {
      setLoading(false);
    });
  }, []);

  return (
    <section ref={ref} className={`news-section ${className}`} id="blog">
      <div className="auto-container">
        <div className="sidebar blog-sidebar">
          <div className="sidebar-widget search-box">
            <div className="widget-inner">
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <input type="search" name="search" onChange={(e) => applyFilter(e.target.value)} placeholder="Search" required />
                  <button type="submit">
                    <span className="icon flaticon-magnifying-glass-1"></span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <br />
        {showTitle && (
          <div className="sec-title centered">
            <h2>
              {title}
              <span className="dot">.</span>
            </h2>
          </div>
        )}
        {loading ? (
          <h5>Please wait while we are loading...</h5>
        ) : (
          <>
            <Row className="clearfix">
              {blog?.map((news) => (
                <SingleNews key={news.id} news={news} />
              ))}
            </Row>
            {isMore && (
              <div className="more-box d-none">
                <Link href="#">
                  <a className="theme-btn btn-style-one">
                    <i className="btn-curve"></i>
                    <span className="btn-title">Load more </span>
                  </a>
                </Link>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
};

export default NewsSection;
