import causesData from "@/data/causesData";
import dynamic from "next/dynamic";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import CausesSingle from "./CausesSingle";

const TinySlider = dynamic(() => import("tiny-slider-react"), { ssr: false });

const settings = {
  lazyload: true,
  nav: true,
  mouseDrag: true,
  items: 1,
  autoplay: true,
  autoHeight: true,
  controls: false,
  navPosition: "bottom",
  gutter: 0,
  responsive: {
    768: {
      items: 2,
      gutter: 20,
    },
    992: {
      items: 3,
      gutter: 30,
    },
  },
};

const CausesOne = () => {
  return (
    <section className="causes-one">
      <Container>
        <div className="section-title text-center">
          <span className="section-title__tagline">Últimas Causas</span>
          <h2 className="section-title__title">
            Escolha uma causa para apoiar <br />
            e faça a sua doação!
          </h2>
        </div>
        <Row>
          <Col xl={12}>
            <div className="causes-one__carousel">
              <TinySlider settings={settings}>
                {causesData.map((cause) => (
                  <CausesSingle cause={cause} key={cause.id} />
                ))}
              </TinySlider>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default CausesOne;
