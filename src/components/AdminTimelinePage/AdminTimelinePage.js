import { timelinePage } from "@/data/timelinePage";
import Link from "next/link";
import React, { useState, useRef, useMemo, useEffect } from "react";
import { Col, Image, Row } from "react-bootstrap";
import CustomSelect from "../Reuseable/CustomSelect";
import { useForm } from "react-hook-form";
import uuid from "react-uuid";
import config from "../../config.json";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css"; // Import Quill styles

const options = [
  {
    value: "",
    label: "Choose Type",
  },
  {
    value: "timeline",
    label: "timeline",
  },
  {
    value: "blog",
    label: "blog",
  },
];
const catoptions = [
  {
    value: "",
    label: "Choose Category",
  },
  {
    value: "travel",
    label: "travel",
  },
  {
    value: "food",
    label: "food",
  },
  {
    value: "bookreview",
    label: "bookreview",
  },
];

const QuillEditor = dynamic(() => import("react-quill"), { ssr: false });

const { inputs, checkoutMethods } = timelinePage;

const CheckoutPage = () => {
  const editorRef = useRef(null);
  const [currentCheckout, setCurrentCheckout] = useState(1);
  const [country, setCountry] = useState("");
  const [cat, setCat] = useState("");
  const [blog, setBlog] = useState(false);
  const [msg, setMessage] = useState(false);
  const [content, setContent] = useState("");
  const quillModules = {
    toolbar: [[{ header: [1, 2, 3, false] }], ["bold", "italic", "underline", "strike", "blockquote"], [{ list: "ordered" }, { list: "bullet" }], ["link", "image"], [{ align: [] }], [{ color: [] }], ["code-block"], ["clean"]],
  };
  const quillFormats = ["header", "bold", "italic", "underline", "strike", "blockquote", "list", "bullet", "link", "image", "align", "color", "code-block"];
  const handleEditorChange = (newContent) => {
    setContent(newContent);
  };
  const handleSelecttype = ({ value }) => {
    setCountry(value);
    if (value == "blog") setBlog(true);
    else setBlog(false);
  };
  const handleSelectcategory = ({ value }) => {
    setCat(value);
  };
  useEffect(() => {}, []);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onBlur" });
  const onSubmit = (data, e) => {
    e.preventDefault();
    let datas = {
      id: uuid(),
      type: country,
      date: data.date,
      title: data.title,
      category: cat,
      description: content,
      thumbnail: country === "timeline" ? config.timelinethumbnail : cat === "bookreview" ? config.blogthumbnail : config.bookreviewthumbnail,
      createddate: data.date,
      isactive: 1,
      website: "talesofsuba.com",
    };
    if (cat === "" || country === "" || content === "") {
      setMessage("Please select Type/Caetegory/Content");
      return;
    }
    console.log("timeline data", datas);

    fetch(config.service_url + "/timeline", { method: "PUT", headers: { "Content-Type": "application/json" }, body: JSON.stringify(datas) })
      .then((response) => response.json())
      .then((data) => {
        console.log("submit", data);
        if (data === "200") {
          e.target.reset();
          setContent("");
          setCat("");
          setCountry("");
          setMessage("Sucessfully Submitted");
        } else {
        }
      })
      .catch((err) => {
        console.log("timelinerrror", err);
      });
  };

  return (
    <section className="checkout-page">
      <div className="auto-container">
        <form id="login" onSubmit={handleSubmit(onSubmit)}>
          <Row>
            <Col lg={12}>
              <h3 className="checkout__title">Timeline/Blog/Book Review</h3>
              <div className="default-form">
                <Row>
                  <Col md={12} className="form-group">
                    <div className="field-inner">
                      <CustomSelect name="type" options={options} name="type" onChange={handleSelecttype} defaultValue={""} placeholder="Choose Type" id="type" />
                    </div>
                  </Col>

                  <Col md={12} className="form-group">
                    <div className="field-inner">
                      <input type="text" placeholder="Title" name="title" {...register("title", { required: true })} id="title" />
                    </div>
                  </Col>
                  <Col md={12} className="form-group">
                    <div className="field-inner">
                      Select Date: <input type="date" placeholder="Date" name="date" {...register("date", { required: true })} id="date" />
                    </div>
                  </Col>
                  <Col md={12} className="form-group" className={blog ? "" : "d-none"}>
                    <div className="field-inner">
                      <CustomSelect name="category" options={catoptions} name="category" onChange={handleSelectcategory} defaultValue={""} placeholder="Choose category" id="category" />
                    </div>
                  </Col>
                  <Col md={12} className="form-group">
                    <div className="field-inner">
                      <QuillEditor value={content} onChange={handleEditorChange} modules={quillModules} formats={quillFormats} className="" />
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
            <Col lg={12} md={12} sm={12} className="form-group">
              {msg}
              <br />
              <button type="submit" className="theme-btn btn-style-one">
                <i className="btn-curve"></i>
                <span className="btn-title">Submit</span>
              </button>
            </Col>
          </Row>
        </form>
      </div>
    </section>
  );
};

export default CheckoutPage;
