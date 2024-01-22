import { processOne } from "@/data/processSection";
import React from "react";
import { Col, Image, Row } from "react-bootstrap";

const ProcessOne = () => {
  return (
    <section className="process-one">
      <div className="auto-container">
        {processOne.map(({ id, image, title, text, lists }) => (
          <Row key={id}>
            <Col md={12} lg={6} className="process-one__image__column">
              <div className="process-one__image animated fadeInLeft">
                <Image
                  src={
                    require(`@/images/update-01-10-2021/resources/${image}`)
                      .default.src
                  }
                  alt=""
                />
              </div>
            </Col>
            <Col md={12} lg={6}>
              <div className="process-one__content">
                <div className="sec-title">
                  <h2>
                    {title} <span className="dot">.</span>
                  </h2>
                </div>
                <p className="process-one__summery">{text}</p>
                <ul className="list-unstyled process-one__list">
                  {lists.map((text, i) => (
                    <li key={i}>
                      <i className="flaticon-check"></i>
                      {text}
                    </li>
                  ))}
                </ul>
              </div>
            </Col>
          </Row>
        ))}
      </div>
    </section>
  );
};

export default ProcessOne;
