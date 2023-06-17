import img3 from "@/images/resources/welcome-one-heart-icon.png";
import img1 from "@/images/resources/welcome-one-img-1.jpg";
import img2 from "@/images/resources/welcome-one-img-2.jpg";
import leopo from "@/images/actions/leopo.png"
import volunt from "@/images/actions/volunt.jpg"
import React from "react";
import { Col, Image } from "react-bootstrap";

const CharityImage = () => {
  return (
    <Col xl={6} lg={6}>
      <div className="welcome-one__left">
        <div className="welcome-one__img-box">
          <Image src={volunt.src} alt="" />
          <div className="welcome-one__img-box-2">
            <Image src={leopo.src} alt="" />
          </div>
          <h2 className="welcome-one__bottom-text">Ajudar Hoje</h2>
          <div className="welcome-one__heart-icon">
            <Image src={img3.src} alt="" />
          </div>
        </div>
      </div>
    </Col>
  );
};

export default CharityImage;
