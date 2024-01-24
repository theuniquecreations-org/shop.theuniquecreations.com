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
import AWS from "aws-sdk";

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
  {
    value: "gallery",
    label: "gallery",
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

const imagetypes = [
  {
    value: "",
    label: "Choose Imagetype",
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
    value: "couple",
    label: "couple",
  },
  {
    value: "nature",
    label: "nature",
  },
];

const QuillEditor = dynamic(() => import("react-quill"), { ssr: false });

const { inputs, checkoutMethods } = timelinePage;

const CheckoutPage = () => {
  const editorRef = useRef(null);
  const [currentCheckout, setCurrentCheckout] = useState(1);
  const [country, setCountry] = useState("");
  const [type, setType] = useState("");
  const [cat, setCat] = useState("");
  const [blog, setBlog] = useState(false);
  const [msg, setMessage] = useState(false);
  const [content, setContent] = useState("");
  const [file, setFile] = useState(null);
  const [progress, setProgress] = useState("");
  const [url, seturl] = useState("");
  const [imagetype, setimagetype] = useState("");
  seturl;
  const quillModules = {
    toolbar: [[{ header: [1, 2, 3, false] }], ["bold", "italic", "underline", "strike", "blockquote"], [{ list: "ordered" }, { list: "bullet" }], ["link", "image"], [{ align: [] }], [{ color: [] }], ["code-block"], ["clean"]],
  };
  const quillFormats = ["header", "bold", "italic", "underline", "strike", "blockquote", "list", "bullet", "link", "image", "align", "color", "code-block"];
  const handleEditorChange = (newContent) => {
    setContent(newContent);
  };
  const handleSelecttype = ({ value }) => {
    setCountry(value);
    setType(value);
    if (value == "blog") setBlog(true);
    else setBlog(false);
  };
  const handleSelectcategory = ({ value }) => {
    setCat(value);
  };
  const handleImageSelecttype = ({ value }) => {
    setimagetype(value);
  };
  useEffect(() => {}, []);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onBlur" });
  const onSubmit = (data, e) => {
    e.preventDefault();
    console.log("test");
    if (type === "gallery") {
      let datas = {
        id: uuid(),
        type: "gallery",
        title: data.title,
        thumbnail: url,
        isactive: 1,
        website: "talesofsuba.com",
      };

      fetch(config.service_url + "/gallery", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(datas) })
        .then((response) => response)
        .then((data) => {
          console.log("submit", data.status);
          if (data.status == 200) {
            e.target.reset();
            setMessage("Sucessfully Submitted");
          }
        })
        .catch((err) => {
          console.log("timelinerrror", err);
          //setMessage(err.Message);
        });
    } else {
      let datas = {
        id: uuid(),
        type: country,
        date: data.date,
        title: data.title,
        category: cat,
        description: content,
        thumbnail: country === "timeline" ? config.timelinethumbnail : cat === "bookreview" ? config.bookreviewthumbnail : config.blogthumbnail,
        createddate: data.date,
        isactive: 1,
        website: "talesofsuba.com",
      };
      if (country === "") {
        setMessage("Please select Type");
        return;
      }
      if (country === "blog" && (cat === "" || content === "")) {
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
            setType("");
            setMessage("Sucessfully Submitted");
          } else {
          }
        })
        .catch((err) => {
          console.log("timelinerrror", err);
        });
    }
  };
  const validate_image = async (e) => {
    const file = e.target.files[0];
    console.log("file", e.target.files[0]);
    if (file.size > 400000) {
      setMessage("Please upload file less than 400 kb");
      return;
    }
  };
  const handleFileChange = (e) => {
    // Uploaded file
    console.log("file", e.target.files[0]);
    const file = e.target.files[0];
    // Changing file state
    setFile(file);
  };
  const uploadFile = async () => {
    // S3 Bucket Name
    const S3_BUCKET = "ssndigitalmedia/talesofsuba/gallery";

    // S3 Region
    const REGION = "ap-south-1";

    // S3 Credentials
    AWS.config.update({
      accessKeyId: "",
      secretAccessKey: "",
    });
    const s3 = new AWS.S3({
      params: { Bucket: S3_BUCKET },
      region: REGION,
    });

    // Files Parameters

    const params = {
      Bucket: S3_BUCKET,
      Key: file.name,
      Body: file,
    };
    if (file.size > 400000) {
      setMessage("Please upload file less than 400 kb");
      return;
    }
    console.log("s3parms", params);
    // Uploading file to s3

    var upload = s3
      .putObject(params)
      .on("httpUploadProgress", (evt) => {
        // File uploading progress
        console.log("Uploading " + parseInt((evt.loaded * 100) / evt.total) + "%");
        setProgress("Uploaded " + parseInt((evt.loaded * 100) / evt.total) + "%");
      })
      .promise();

    await upload.then((err, data) => {
      console.log(err);
      console.log("s3", data);
      // Fille successfully uploaded
      setMessage("File uploaded s3.");
      seturl("https://ssndigitalmedia.s3.ap-south-1.amazonaws.com/talesofsuba/gallery/" + file.name);

      let datas = {
        id: uuid(),
        type: "gallery",
        title: imagetype,
        thumbnail: url,
        isactive: 1,
        website: "talesofsuba.com",
      };

      fetch(config.service_url + "/gallery", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(datas) })
        .then((response) => response)
        .then((data) => {
          console.log("submit", data.status);
          if (data.status == 200) {
            setMessage("Image saved Sucessfully");
            alert("Image saved Sucessfully");
            window.location.reload();
          }
        })
        .catch((err) => {
          console.log("timelinerrror", err);
          //setMessage(err.Message);
        });
    });
  };
  return (
    <section className="checkout-page">
      <div className="auto-container">
        <Col md={6} className="form-group">
          <div className="field-inner">
            Type:
            <CustomSelect name="type" options={options} name="type" onChange={handleSelecttype} defaultValue={""} placeholder="Choose Type" id="type" />
          </div>
          <br />
        </Col>

        {type !== "gallery" ? (
          <form id="login" onSubmit={handleSubmit(onSubmit)}>
            <Row>
              <Col lg={12}>
                <h3 className="checkout__title">Timeline/Blog/Book Review</h3>
                <div className="default-form">
                  <Row>
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
        ) : (
          <form id="uploadimage" onSubmit={handleSubmit(onSubmit)}>
            <Row>
              <Col lg={12}>
                <h3 className="checkout__title">Galery Upload</h3>
                <div className="default-form">
                  <Row>
                    <Col md={6} className="form-group">
                      <div className="field-inner">
                        Image
                        <CustomSelect name="type" options={imagetypes} name="type" onChange={handleImageSelecttype} defaultValue={""} id="imagetype" />
                      </div>
                      <br />
                    </Col>
                    <Col md={6} className="form-group">
                      <div className="field-inner">
                        Upload File
                        <input type="file" onChange={handleFileChange} />
                      </div>
                    </Col>
                  </Row>
                </div>
              </Col>
              <Col lg={12} md={12} sm={12} className="form-group">
                <div>
                  {msg} {progress}
                </div>
                <button type="button" className="theme-btn btn-style-one" onClick={(validate_image, uploadFile)}>
                  <i className="btn-curve"></i>
                  <span className="btn-title">Upload</span>
                </button>
              </Col>
            </Row>
          </form>
        )}
      </div>
    </section>
  );
};

export default CheckoutPage;
