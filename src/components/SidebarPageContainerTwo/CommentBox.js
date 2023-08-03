import Link from "next/link";
import React from "react";
import { Image } from "react-bootstrap";

const CommentBox = ({ comment = {} }) => {
  const { image, name, date, text } = comment;

  return (
    <div className="comment-box">
      <div className="comment">
        <div className="author-thumb">
          <figure className="thumb">
            <Image
              src={require(`@/images/resource/${image}`).default.src}
              alt=""
            />
          </figure>
        </div>
        <div className="info">
          <div className="name">{name}</div>
          <div className="date">{date}</div>
        </div>
        <div className="text">{text}</div>
        <div className="reply-btn">
          <Link href="/about">
            <a className="theme-btn btn-style-one">
              <i className="btn-curve"></i>
              <span className="btn-title">Reply</span>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CommentBox;
