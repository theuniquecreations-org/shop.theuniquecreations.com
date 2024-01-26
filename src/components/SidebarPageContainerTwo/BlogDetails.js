import { useEffect, useState } from "react";
import { blogDetails } from "@/data/sidebarPageContainerTwo";
import Link from "next/link";
import React, { Fragment } from "react";
import { Col, Image, Row } from "react-bootstrap";
import CommentBox from "./CommentBox";
import axios from "axios";
import config from "../../config.json";

const { id, slug, image, date, author, title, text1, text2, text3, text4, text5, comments, tags, category, posts, inputs } = blogDetails;

const BlogDetails = () => {
  const [blog, setBlog] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = {};
    inputs.forEach(({ name }) => (data[name] = formData.get(name)));
    console.log(data);
  };

  useEffect(() => {
    console.log("ssnbloginisde");
    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");
    console.log("ssnid", id);
    const fetchData = async () => {
      console.log("ssnbloginisdefetch");
      id === "undefined" ? "a" : id;
      const response = await axios.get(config.service_url + "/blog/" + id);
      setBlog(response.data[0]);
      console.log("ssnbloginisde", response.data);
    };

    fetchData();
  }, []);

  return (
    <div className="blog-details">
      <div className="post-details">
        <div className="inner-box">
          <div className="image-box">
            <Link href="/#">
              <a>
                <Image src={blog?.thumbnail} alt="" />
              </a>
            </Link>
          </div>
          <div className="lower-box">
            <div className="post-meta">
              <ul className="clearfix">
                <li>
                  <span className="far fa-clock"></span> {blog?.date}
                </li>
                <li>
                  <span className="far fa-user-circle"></span> talesofSuBa
                </li>
                <li className="d-none">
                  <span className="far fa-comments"></span> {comments.length} Comments
                </li>
              </ul>
            </div>
            <h4>{blog?.title}</h4>
            <div className="text">
              <div dangerouslySetInnerHTML={{ __html: blog?.description }} />
              <p>{blog?.text2}</p>
              <p>{blog?.text3}</p>
              <p>{blog?.text4}</p>
              <p>{blog?.text5}</p>
            </div>
          </div>
        </div>

        <div className="info-row clearfix d-none">
          <div className="tags-info">
            <strong>Tags:</strong>{" "}
            {tags.map((tag, i) => (
              <Fragment key={i}>
                <a href="#">{tag}</a>
                {tags.length !== i + 1 && ", "}
              </Fragment>
            ))}
          </div>
          <div className="cat-info d-none">
            <strong>Category:</strong>{" "}
            {category.map((cate, i) => (
              <Fragment key={i}>
                <a href="#">{cate}</a>
                {category.length !== i + 1 && ", "}
              </Fragment>
            ))}
          </div>
        </div>
      </div>
      <div className="post-control-two d-none">
        <Row className="clearfix">
          {posts.map((post, i) => (
            <Col key={i} md={6} sm={12} className="control-col">
              <div className="control-inner">
                <h4>
                  <a href="#">{post}</a>
                </h4>
                <a href="#" className="over-link"></a>
              </div>
            </Col>
          ))}
        </Row>
      </div>
      <div className="comments-area d-none">
        <div className="comments-title">
          <h3>{comments.length} Comments</h3>
        </div>
        {comments.map((comment) => (
          <CommentBox key={comment.id} comment={comment} />
        ))}
      </div>
      <div className="leave-comments d-none">
        <div className="comments-title">
          <h3>Leave a comment</h3>
        </div>
        <div className="default-form comment-form">
          <form onSubmit={handleSubmit}>
            <Row className="clearfix">
              {inputs.map(({ name, type, placeholder, required }) => (
                <Col key={name} md={type ? 6 : 12} sm={12} className="form-group">
                  {type ? <input type={type} name={name} placeholder={placeholder} required={required} /> : <textarea name={name} placeholder={placeholder} required={required}></textarea>}
                </Col>
              ))}
              <Col md={12} sm={12} className="form-group">
                <button type="submit" className="theme-btn btn-style-one">
                  <i className="btn-curve"></i>
                  <span className="btn-title">Submit Comment</span>
                </button>
              </Col>
            </Row>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
