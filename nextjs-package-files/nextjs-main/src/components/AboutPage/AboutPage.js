import aboutProgress from "@/data/aboutProgress";
import image from "@/images/resources/about-page-img-1.jpg";
import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import AboutProgressbar from "./AboutProgressbar";

const AboutPage = () => {
  return (
    <section className="about-page">
      <Container>
        <Row>
          <Col xl={6}>
            <div className="about-page__left">
              <div className="about-page__img">
                <Image src={image.src} alt="" />
                <div className="about-page__trusted">
                  <h3>
                    <span>2,8750</span> Doadores Confiam!
                  </h3>
                </div>
              </div>
            </div>
          </Col>
          <Col xl={6}>
            <div className="about-page__right">
              <div className="section-title text-left">
                <span className="section-title__tagline">A Nossa Apresentação</span>
                <h2 className="section-title__title">
                 Nós acreditamos em todas as crianças
                </h2>
              </div>
              <p className="about-page__right-text">
              No Kiosk Solidário, acreditamos no potencial de todas as crianças. Por isso, trabalhamos para garantir que elas tenham acesso a alimentos, educação e cuidados necessários. Junte-se a nós nessa missão de transformar vidas e construir um futuro melhor.
              </p>
              <h3 className="about-page__right-title">
                O Kiosk Solidário é um ponto de dar e receber
              </h3>
              <div className="about-five__progress-wrap">
                {aboutProgress.map((progress) => (
                  <AboutProgressbar key={progress.id} progress={progress} />
                ))}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutPage;
