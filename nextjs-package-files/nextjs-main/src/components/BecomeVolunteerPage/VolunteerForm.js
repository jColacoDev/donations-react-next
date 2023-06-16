import React from "react";
import { Col, Row } from "react-bootstrap";

const inputs = [
  "name",
  "email",
  "phone",
  "address",
  "dateOfBirth",
  "occupation",
  "message",
];

const VolunteerForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const fromData = new FormData(e.target);
    const data = {};
    inputs.forEach((input) => (data[input] = fromData.get(input)));
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="become-volunteer-page__form contact-form-validated"
    >
      <Row>
        <Col xl={12}>
          <div className="become-volunteer-page__input">
            <input type="text" placeholder="Nome" name="name" />
          </div>
        </Col>
      </Row>
      <Row>
        <Col xl={6}>
          <div className="become-volunteer-page__input">
            <input type="email" placeholder="Email" name="email" />
          </div>
        </Col>
        <Col xl={6}>
          <div className="become-volunteer-page__input">
            <input type="text" placeholder="Telefone" name="phone" />
          </div>
        </Col>
      </Row>
      <Row>
        <Col xl={12}>
          <div className="become-volunteer-page__input">
            <input type="text" placeholder="Morada" name="address" />
          </div>
        </Col>
        <Col xl={12}>
          <div className="become-volunteer-page__input">
            <input type="text" placeholder="Data de nascimento" name="dateOfBirth" />
          </div>
        </Col>
        <Col xl={12}>
          <div className="become-volunteer-page__input">
            <input type="text" placeholder="Ocupação" name="occupation" />
          </div>
        </Col>
        <Col xl={12}>
          <div className="become-volunteer-page__input">
            <textarea name="message" placeholder="Mensagem"></textarea>
          </div>
          <button type="submit" className="thm-btn become-volunteer-page__btn">
            <i className="fas fa-arrow-circle-right"></i>Enviar formulário
          </button>
        </Col>
      </Row>
    </form>
  );
};

export default VolunteerForm;
