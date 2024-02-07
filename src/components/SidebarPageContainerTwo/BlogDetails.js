import { useEffect, useState } from "react";
import { blogDetails } from "@/data/sidebarPageContainerTwo";
import Link from "next/link";
import React, { Fragment } from "react";
import { Col, Image, Row } from "react-bootstrap";
import CommentBox from "./CommentBox";
import axios from "axios";
import config from "../../config.json";
import uuid from "react-uuid";

const { id, slug, image, date, author, title, text1, text2, text3, text4, text5, comments, tags, category, posts, inputs } = blogDetails;
const commentform = [
  {
    name: "username",
    placeholder: "Your Name",
    type: "text",
    required: true,
  },
  // {
  //   name: "email",
  //   placeholder: "Email Address",
  //   type: "email",
  //   required: true,
  // },
  // {
  //   name: "phone",
  //   placeholder: "Phone Number",
  //   type: "text",
  //   required: true,
  // },
  // {
  //   name: "subject",
  //   placeholder: "Subject",
  //   type: "text",
  //   required: true,
  // },
  {
    name: "message",
    placeholder: "Your Comments",
    required: true,
  },
];

const BlogDetails = (blog1) => {
  const [blog, setBlog] = useState([]);
  const [blogrecent, setBlogRecent] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = {};
    commentform.forEach(({ name }) => (data[name] = formData.get(name)));
    (data.postid = blog.id), (data.id = uuid()), (data.type = "comments"), (data.isactive = 1), (data.website = "talesofsuba.com"), console.log(data);

    fetch(config.service_url + "/gallery", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) })
      .then((response) => response)
      .then((data) => {
        console.log("comment submit", data.status);
        if (data.status == 200) {
          alert("Saved Sucessfully");
          window.location.reload();
        }
      })
      .catch((err) => {
        console.log("commnets", err);
        //setMessage(err.Message);
      });
  };

  useEffect(() => {
    console.log("ssnbloginisde");
    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");
    const type = params.get("bookreview");
    console.log("ssnid", id);
    const fetchData = async () => {
      console.log("ssnbloginisdefetch");
      id === "undefined" ? "a" : id;
      const response = await axios.get(config.service_url + "/items/" + id);
      //const recentblog = await axios.get(config.service_url + "/itemsbytype/" + bookreview);
      setBlog(response.data[0]);
      //setBlogRecent(recentblog.data);
      console.log("ssnbloginisde 123", response.data);
    };

    fetchData();
  }, []);

  return (
    <div className="blog-details">
      <div className="post-details">
        {blog || (blog && blog.length === 0) ? (
          <div className="inner-box">
            <div className="image-box1">
              <Link href="#">
                <a>
                  <Image width="auto" src={blog?.thumbnail} alt="" />
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
                  <li>
                    <div>
                      {blog.link?.includes("/a>") ? (
                        <div dangerouslySetInnerHTML={{ __html: blog.link }} />
                      ) : blog.link === "" || blog.link === undefined ? (
                        ""
                      ) : (
                        <a href={blog.link} target="_blank">
                          Check at Amazon
                        </a>
                      )}
                    </div>
                  </li>
                  <li className="d-none">
                    <span className="far fa-comments"></span> {comments.length} Comments
                  </li>
                </ul>
              </div>
              <h4>{blog?.title}</h4>
              <div className="text1">
                <div dangerouslySetInnerHTML={{ __html: blog?.description?.replace("<br>", "").replace("<p><br></p>", "") }} />
              </div>
            </div>
          </div>
        ) : (
          <h6>No Post Found</h6>
        )}
        <div className="info-row clearfix"></div>

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
      <div className="leave-comments ">
        <div className="comments-title">
          <h3>Leave a comment</h3>
        </div>
        <div className="default-form comment-form">
          <form onSubmit={handleSubmit}>
            <Row className="clearfix">
              {commentform.map(({ name, type, placeholder, required }) => (
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
