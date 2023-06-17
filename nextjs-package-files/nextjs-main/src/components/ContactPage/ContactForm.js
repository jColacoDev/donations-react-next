import React from "react";
import { Col, Row } from "react-bootstrap";

const inputs = ["name", "email", "subject", "phone", "message"];

const ContactForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = {};
    inputs.forEach((input) => {
      data[input] = formData.get(input);
    });
    console.log(data);
  };

  return (
    <div className="contact-page__form">
      <form
        onSubmit={handleSubmit}
        className="contact-page__main-form contact-form-validated"
      >
        <Row>
          <Col xl={12}>
            <div className="contact-page__input-box">
              <input type="text" placeholder="Nome" name="name" />
            </div>
          </Col>
        </Row>
        <Row>
          <Col xl={6}>
            <div className="contact-page__input-box">
              <input type="email" placeholder="Email" name="email" />
            </div>
          </Col>
          <Col xl={6}>
            <div className="contact-page__input-box">
              <input type="text" placeholder="Assunto" name="subject" />
            </div>
          </Col>
        </Row>
        <Row>
          <Col xl={12}>
            <div className="contact-page__input-box">
              <input type="text" placeholder="Telefone" name="phone" />
            </div>
          </Col>
          <Col xl={12}>
            <div className="contact-page__input-box">
              <textarea name="message" placeholder="Mensagem"></textarea>
            </div>
            <button type="submit" className="thm-btn contact-page__btn">
              <i className="fas fa-arrow-circle-right"></i>Enviar Mensagem
            </button>
          </Col>
        </Row>
      </form>
    </div>
  );
};

export default ContactForm;
