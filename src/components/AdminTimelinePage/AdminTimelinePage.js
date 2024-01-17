import { timelinePage } from "@/data/timelinePage";
import Link from "next/link";
import React, { useState } from "react";
import { Col, Image, Row } from "react-bootstrap";
import CustomSelect from "../Reuseable/CustomSelect";
import { useForm } from "react-hook-form";
import uuid from "react-uuid";
import config from "../../config.json";

const options = [
  {
    value: "blog",
    label: "blog",
  },
  {
    value: "timeline",
    label: "timeline",
  },
  {
    value: "bookreview",
    label: "bookreview",
  },
];

const { inputs, checkoutMethods } = timelinePage;

const CheckoutPage = () => {
  const [currentCheckout, setCurrentCheckout] = useState(1);
  const [country, setCountry] = useState("");
  const [country2, setCountry2] = useState("");

  const handleSelectCountry = ({ value }) => {
    setCountry(value);
  };

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
      description: data.description,
      thumbnail: "s3url",
      createddate: data.date,
      isactive: 1,
      website: "talesofsuba.com",
    };
    console.log("timeline data", datas);

    fetch(config.service_url + "/timeline", { method: "PUT", headers: { "Content-Type": "application/json" }, body: JSON.stringify(datas) })
      .then((response) => response.json())
      .then((data) => {
        // console.log("regitered user", data);
        if (data.status === 200) {
          setCountry("");
          e.target.reset();
        } else {
          setCountry("");
        }
      })
      .catch((err) => {
        console.log("timelinerrror", err);
      });
  };

  return (
    <section className="checkout-page">
      <div className="auto-container">
        <p className="checkout-page__returning d-none">
          Returning Customer? <Link href="/login">Click here to Login</Link>
        </p>
        <form id="login" onSubmit={handleSubmit(onSubmit)}>
          <Row>
            <Col lg={12}>
              <h3 className="checkout__title">Our Timeline</h3>
              <div className="default-form">
                <Row>
                  <Col md={12} className="form-group">
                    <div className="field-inner">
                      <CustomSelect name="type" options={options} name="type" onChange={handleSelectCountry} defaultValue={""} placeholder="Choose Type" instanceId="countrySelect11" id="type" />
                    </div>
                  </Col>

                  <Col md={12} className="form-group">
                    <div className="field-inner">
                      <input type="text" placeholder="Title" name="title" {...register("title", { required: true })} id="title" />
                    </div>
                  </Col>
                  <Col md={12} className="form-group">
                    <div className="field-inner">
                      <input type="date" placeholder="Date" name="date" {...register("date", { required: true })} id="date" />
                    </div>
                  </Col>
                  <Col md={12} className="form-group">
                    <div className="field-inner">
                      <textarea name="description" placeholder="Description" {...register("description", { required: true })}></textarea>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
            <Col lg={12} md={12} sm={12} className="form-group">
              <button type="submit" className="theme-btn btn-style-one">
                <i className="btn-curve"></i>
                <span className="btn-title">Submit</span>
              </button>
            </Col>
            {/* <Col lg={6}>
            <div className="checkout__checkbox">
              <input type="checkbox" id="different-address" />
              <label htmlFor="different-address" className="checkout__title">
                Ship to a different address
              </label>
            </div>
            <div className="default-form">
              <div className="row">
                <Col md={12} className="form-group">
                  <div className="field-inner">
                    <CustomSelect name="country2" options={options} onChange={handleSelectCountry2} defaultValue={options[0]} placeholder="Choose Country" instanceId="countrySelect22" />
                  </div>
                </Col>
                {inputs.slice(0, -1).map(({ name, placeholder, type, col }) => (
                  <Col key={name} md={col} className="form-group">
                    <div className="field-inner">
                      <input type={type} placeholder={placeholder} name={name} />
                    </div>
                  </Col>
                ))}
                <Col md={12} className="form-group">
                  <div className="field-inner">
                    <textarea name="notes" placeholder="Notes About Your Order"></textarea>
                  </div>
                </Col>
              </div>
            </div>
          </Col> */}
          </Row>
        </form>
        {/* <h3 className="checkout__title">Your order</h3>
        <Row>
          <Col lg={6}>
            <div className="table-responsive">
              <table className="table checkout__table">
                <thead>
                  <tr>
                    <th>Product</th>
                    <th>Price</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Product Name</td>
                    <td>$10.99</td>
                  </tr>
                  <tr>
                    <td>Subtotal</td>
                    <td>$10.99</td>
                  </tr>
                  <tr>
                    <td>Shipping</td>
                    <td>$00.00</td>
                  </tr>
                  <tr>
                    <td>Total</td>
                    <td>$20.98</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Col>
          <Col lg={6}>
            <div className="checkout__payment">
              {checkoutMethods.map(({ id, title, text, image }) => (
                <div key={id} className={`checkout__payment__item${currentCheckout === id ? " checkout__payment__item--active" : ""}`}>
                  <h3 onClick={() => setCurrentCheckout(id)} className="checkout__payment__title">
                    {title}
                    {image && <Image src={image.src} alt="" />}
                  </h3>
                  <div className={`checkout__payment__content animated ${currentCheckout === id ? "d-block fadeInUp" : "d-none"}`}>{text}</div>
                </div>
              ))}
            </div>
            <div className="text-right d-flex justify-content-end">
              <Link href="/checkout">
                <a className="theme-btn btn-style-one">
                  <i className="btn-curve"></i>
                  <span className="btn-title">Place your order</span>
                </a>
              </Link>
            </div>
          </Col>
        </Row> */}
      </div>
    </section>
  );
};

export default CheckoutPage;
