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
import { SecretsManagerClient, GetSecretValueCommand } from "@aws-sdk/client-secrets-manager";
import { uploadData } from "aws-amplify/storage";
import * as CryptoJS from "crypto-js";
const S3KEY = "U2FsdGVkX1/byrsNTjlIFav5CwCAMI3ZuetGafp+EoIw+3LAyAraVj6f4DtP3C8P";
const S3SECRET = "U2FsdGVkX19xsHGsr8Oql3DQONQSL68pVdWHUkfuFKGnWZU5068E7HzOxfaG0cJFa8Kl+0NPiycyqPA5n9FrWQ==";
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
  const [currentDate, setCurrentDate] = useState(getDate());
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
  const [imagedescription, setimagedescription] = useState("");
  seturl;
  const quillModules = {
    toolbar: [[{ header: [1, 2, 3, false] }], ["bold", "italic", "underline", "strike", "blockquote"], [{ list: "ordered" }, { list: "bullet" }], ["link", "image"], [{ align: [] }], [{ color: [] }], ["code-block"], ["clean"]],
  };
  const quillFormats = ["header", "bold", "italic", "underline", "strike", "blockquote", "list", "bullet", "link", "image", "align", "color", "code-block"];
  function getDate() {
    const today = new Date();
    const month = today.getMonth() + 1;
    const year = today.getFullYear();
    const date = today.getDate();
    return `${month}/${date}/${year}`;
  }
  const handleEditorChange = (newContent) => {
    setContent(newContent);
    setMessage("");
  };
  const handleImgDesc = (value) => {
    setimagedescription(value.target.value);
    console.log("imagedescription", value.target.value);
    setMessage("");
  };

  const handleSelecttype = ({ value }) => {
    setCountry(value);
    setType(value);
    setMessage("");
    if (value == "blog") setBlog(true);
    else setBlog(false);
    if (value == "gallery") {
    }
    // console.log("cipherText");
    // const secretKey = "b@l@kuMarsUb@";
    // const Text = "";
    // console.log("Text", Text);
    // const cipherText = CryptoJS.AES.encrypt(Text, secretKey).toString();
    // console.log("cipherText", cipherText);

    // const plainText = CryptoJS.AES.decrypt(cipherText, secretKey).toString(CryptoJS.enc.Utf8);
    // console.log("plainText", plainText);
  };
  const handleSelectcategory = ({ value }) => {
    setCat(value);
    setMessage("");
  };
  const handleImageSelecttype = ({ value }) => {
    setimagetype(value);
    console.log(value);
    setMessage("");
  };
  useEffect(() => {}, []);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onBlur" });
  const slugify = function (text) {
    return text
      .toString()
      .toLowerCase()
      .replace(/\s+/g, "-") // Replace spaces with -
      .replace(/[^\w-]+/g, "") // Remove all non-word chars
      .replace(/--+/g, "-") // Replace multiple - with single -
      .replace(/^-+/, "") // Trim - from start of text
      .replace(/-+$/, ""); // Trim - from end of text
  };

  const onSubmit = (data, e) => {
    e.preventDefault();

    let datas = {
      id: uuid(),
      type: country,
      slug: slugify(data.title),
      date: data.date,
      title: data.title,
      category: cat,
      description: content,
      thumbnail: config.blogthumbnail,
      createddate: currentDate,
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
    if (country === "timeline" || country === "blog") {
      uploadFile(datas, country);
      return;
    }
  };
  const validate_image = async (e) => {
    const file = e.target.files[0];
    console.log("file", e.target.files[0]);
    if (file?.size > 400000 || file === null) {
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
    setMessage("");
  };
  const uploadFile = (dataarray, type) => {
    // S3 Bucket Name
    const S3_BUCKET = config + S3_BUCKET_NAME + "gallery";

    // S3 Region
    const REGION = "ap-south-1";

    // S3 Credentials
    AWS.config.update({
      accessKeyId: CryptoJS.AES.decrypt(S3KEY, config.namename).toString(CryptoJS.enc.Utf8),
      secretAccessKey: CryptoJS.AES.decrypt(S3SECRET, config.namename).toString(CryptoJS.enc.Utf8),
    });
    console.log("S3SECRET", S3SECRET);
    const s3 = new AWS.S3({
      params: { Bucket: S3_BUCKET },
      region: REGION,
    });

    // Files Parameters
    if (file === undefined || file === null) {
      setMessage("Please select file");
      return;
    }
    if (file?.size > 400000) {
      setMessage("Please upload file less than 400 kb");
      return;
    }
    if (imagedescription === "" && type == "gallery") {
      setMessage("Please add image description");
      return;
    }
    const params = {
      Bucket: S3_BUCKET,
      Key: file.name,
      Body: file,
    };

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

    // upload.then((err, data) => {
    //   console.log(err);
    //   console.log("s3", data);
    // Fille successfully uploaded
    // setMessage("File uploaded s3.");
    upload.then(() => {
      console.log("after uplaod");
      const url = config.s3bucket + file.name;
      console.log(url);
      let datas;
      if (type == "timeline" || type == "blog") {
        const { thumbnail } = {};
        datas = dataarray;
        datas.thumbnail = url;
        console.log("timeline", datas);
      } else {
        datas = {
          id: uuid(),
          type: "gallery",
          title: imagetype,
          description: imagedescription,
          thumbnail: url,
          isactive: 1,
          website: "talesofsuba.com",
        };
      }

      fetch(config.service_url + "/gallery", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(datas) })
        .then((response) => response)
        .then((data) => {
          console.log("submit", data.status);
          if (data.status == 200) {
            setMessage("Saved Sucessfully");
            //alert("Saved Sucessfully");
            //window.location.reload();
          }
        })
        .catch((err) => {
          console.log("timelinerrror", err);
          //setMessage(err.Message);
        });
    });
  };
  const uploadFileAPI = async () => {
    // S3 Bucket Name
    let datas;
    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      console.log(reader.result);

      datas = {
        id: uuid(),
        type: "image",
        filename: file.name,
        file: reader.result,
        isactive: 1,
        website: "talesofsuba.com",
        createddate: currentDate,
        bucketname: config.S3_BUCKET_NAME + "gallery",
      };

      console.log("image api request", datas);
      fetch(config.service_url + "/imageuploadtos3", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(datas) })
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
    };
  };
  const uploadDataInBrowser = async () => {
    if (event?.target?.files) {
      console.log(event);
      const file = event.target.files[0];
      console.log("uploadDataInBrowser", file);
      uploadData({
        key: "filename",
        data: file,
      });
    }
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
                    <Col md={6} className="form-group">
                      <div className="field-inner">
                        Select Thumbnail
                        <input type="file" name="file" onChange={handleFileChange} />
                      </div>
                    </Col>
                    <Col md={12} className="form-group">
                      <div className="field-inner">
                        Select Date: <input type="date" placeholder="Date" defaultValue={currentDate} name="date" {...register("date", { required: true })} id="date" />
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
                {msg} {progress}
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
                        <input type="file" name="file" onChange={handleFileChange} />
                      </div>
                    </Col>
                    <Col md={6} className="form-group">
                      Description
                      <div className="field-inner">
                        <textarea type="text" onChange={handleImgDesc} required placeholder="Description" name="imagedes" id="imagedes" />
                      </div>
                    </Col>
                  </Row>
                </div>
              </Col>
              <Col lg={12} md={12} sm={12} className="form-group">
                <div>
                  <p>
                    {msg} {progress}
                  </p>
                </div>
                <button type="button" className="theme-btn btn-style-one" onClick={(e) => uploadFile(null, null)}>
                  <i className="btn-curve"></i>
                  <span className="btn-title">Upload</span>
                </button>
                <br />
                <br />
                <button type="button" className="theme-btn btn-style-one" onClick={(validate_image, uploadFileAPI)}>
                  <i className="btn-curve"></i>
                  <span className="btn-title">Upload Via API</span>
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
