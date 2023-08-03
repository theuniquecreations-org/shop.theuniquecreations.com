import { blogDetails } from "@/data/sidebarPageContainerTwo";
import Link from "next/link";
import React, { Fragment } from "react";
import { Col, Image, Row } from "react-bootstrap";
import CommentBox from "./CommentBox";

const {
  image,
  date,
  admin,
  title,
  text1,
  text2,
  comments,
  tags,
  category,
  posts,
  inputs,
} = blogDetails;

const BlogDetails = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = {};
    inputs.forEach(({ name }) => (data[name] = formData.get(name)));
    console.log(data);
  };

  return (
    <div className="blog-details">
      <div className="post-details">
        <div className="inner-box">
          <div className="image-box">
            <Link href="/blog-single">
              <a>
                <Image src={image.src} alt="" />
              </a>
            </Link>
          </div>
          <div className="lower-box">
            <div className="post-meta">
              <ul className="clearfix">
                <li>
                  <span className="far fa-clock"></span> {date}
                </li>
                <li>
                  <span className="far fa-user-circle"></span> {admin}
                </li>
                <li>
                  <span className="far fa-comments"></span> {comments.length}{" "}
                  Comments
                </li>
              </ul>
            </div>
            <h4>{title}</h4>
            <div className="text">
              <p>{text1}</p>
              <p>{text2}</p>
            </div>
          </div>
        </div>
        <div className="info-row clearfix">
          <div className="tags-info">
            <strong>Tags:</strong>{" "}
            {tags.map((tag, i) => (
              <Fragment key={i}>
                <a href="#">{tag}</a>
                {tags.length !== i + 1 && ", "}
              </Fragment>
            ))}
          </div>
          <div className="cat-info">
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
      <div className="post-control-two">
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
      <div className="comments-area">
        <div className="comments-title">
          <h3>{comments.length} Comments</h3>
        </div>
        {comments.map((comment) => (
          <CommentBox key={comment.id} comment={comment} />
        ))}
      </div>
      <div className="leave-comments">
        <div className="comments-title">
          <h3>Leave a comment</h3>
        </div>
        <div className="default-form comment-form">
          <form onSubmit={handleSubmit}>
            <Row className="clearfix">
              {inputs.map(({ name, type, placeholder, required }) => (
                <Col
                  key={name}
                  md={type ? 6 : 12}
                  sm={12}
                  className="form-group"
                >
                  {type ? (
                    <input
                      type={type}
                      name={name}
                      placeholder={placeholder}
                      required={required}
                    />
                  ) : (
                    <textarea
                      name={name}
                      placeholder={placeholder}
                      required={required}
                    ></textarea>
                  )}
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
