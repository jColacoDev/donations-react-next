import becomeVolunteerList from "@/data/becomeVolunteerList";
import image from "@/images/resources/become-a-volunteer.jpg";
import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import VolunteerForm from "./VolunteerForm";

const BecomeVolunteerPage = () => {
  return (
    <section className="become-volunteer-page">
      <Container>
        <div className="section-title text-center">
          <span className="section-title__tagline">Registe-se Agora</span>
          <h2 className="section-title__title">
            Vamos nos juntar à nossa comunidade <br /> torne-se um Voluntário
          </h2>
        </div>
        <Row>
          <Col xl={6} lg={6}>
            <div className="become-volunteer-page__left">
              <div className="become-volunteer-page__img">
                <Image src={image.src} alt="" />
              </div>
              <h3 className="become-volunteer-page__title">Requisitos</h3>
              <p className="become-volunteer-page__text">
              Os requisitos para ser voluntário são simples, mas essenciais. É necessário ter vontade de ajudar, empatia para se colocar no lugar do outro e disponibilidade de tempo. Não importa a idade, a experiência ou a formação, o que realmente importa é o coração aberto e a dedicação para fazer a diferença na vida das pessoas que mais precisam. Junte-se a nós e seja parte dessa transformação social!
              </p>
              <ul className="become-volunteer-page__list list-unstyled">
                {becomeVolunteerList.map((item, index) => (
                  <li key={index}>
                    <div className="icon">
                      <i className="fas fa-arrow-circle-right"></i>
                    </div>
                    <div className="text">
                      <p>{item}</p>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="become-volunteer-page__phone">
                <div className="become-volunteer-page__phone-icon">
                  <span className="icon-chat"></span>
                </div>
                <div className="become-volunteer-page__phone-text">
                  <p>Fale connosco</p>
                  <a href="tel:210 16 16 16">210 16 16 16</a>
                </div>
              </div>
            </div>
          </Col>
          <Col xl={6} lg={6}>
            <div className="become-volunteer-page__right">
              <VolunteerForm />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default BecomeVolunteerPage;
