import image from "@/images/resources/helping-one-left-img.jpg";
import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";

const HelpingOne = () => {
  return (
    <section className="helping-one">
      <Container>
        <div className="section-title text-center">
          <span className="section-title__tagline">Ultimas Causas</span>
          <h2 className="section-title__title">
            Encontre a sua causa <br />
            e faça a sua doação!
          </h2>
        </div>
        <Row>
          <Col xl={6} lg={6}>
            <div className="helping-one__left">
              <h3 className="helping-one__title">
                Ajudamos hoje. Ajudamos amanhã
              </h3>
              <p className="helping-one__text">
              Através do nosso compromisso solidário, ajudamos hoje a construir um futuro melhor. Com ações concretas e apoio contínuo, buscamos impactar vidas e promover mudanças positivas na comunidade. Junte-se a nós nessa jornada de solidariedade e esperança.
              </p>
              <ul className="helping-one__left-list list-unstyled">
                <li>
                  <div className="helping-one__left-icon">
                    <i className="fas fa-arrow-circle-right"></i>
                  </div>
                  <div className="helping-one__left-text">
                    <p>Impacto positivo na vida de pessoas necessitadas.</p>
                  </div>
                </li>
                <li>
                  <div className="helping-one__left-icon">
                    <i className="fas fa-arrow-circle-right"></i>
                  </div>
                  <div className="helping-one__left-text">
                    <p>Contribuição para causas sociais e melhorias na comunidade.</p>
                  </div>
                </li>
                <li>
                  <div className="helping-one__left-icon">
                    <i className="fas fa-arrow-circle-right"></i>
                  </div>
                  <div className="helping-one__left-text">
                    <p>Sentimento de gratidão e realização pessoal ao ajudar.</p>
                  </div>
                </li>
              </ul>
              <div className="helping-one__left-img">
                <Image src={image.src} alt="" />
                <div className="helping-one__left-icon-box">
                  <span className="icon-heart"></span>
                </div>
              </div>
            </div>
          </Col>
          <Col xl={6} lg={6}>
            <div className="helping-one__right">
              <form action="" className="helping-one__right-form">
                <Row>
                  <Col lg={12}>
                    <div className="helping-one__right-input-box">
                      <input
                        type="text"
                        name="amount"
                        placeholder="Adicionar montante"
                      />
                      <div className="helping-one__right-dolar-icon">
                        <span>€</span>
                      </div>
                    </div>
                  </Col>
                  <Col lg={6}>
                    <input type="text" name="name" placeholder="Nome" />
                  </Col>
                  <Col lg={6}>
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                    />
                  </Col>
                  <Col lg={12}>
                    <input
                      type="text"
                      name="phone"
                      placeholder="Telefone"
                    />
                  </Col>
                  <Col lg={12}>
                    <textarea
                      name="message"
                      placeholder="Mensagem"
                    ></textarea>
                  </Col>
                  <Col lg={12}>
                    <button
                      type="submit"
                      className="thm-btn helping-one__right-btn"
                    >
                      <i className="fas fa-arrow-circle-right"></i>Continuar
                    </button>
                  </Col>
                </Row>
              </form>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HelpingOne;
