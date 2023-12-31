import React from "react";
import { Col, Row } from "react-bootstrap";

const inputs = ["name", "email", "message"];

const CommentForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const fromData = new FormData(e.target);
    const data = {};
    inputs.forEach((input) => (data[input] = fromData.get(input)));
    console.log(data);
  };

  return (
    <div className="comment-form">
      <h3 className="comment-form__title">Deixe um Comentário</h3>
      <form
        onSubmit={handleSubmit}
        className="comment-one__form contact-form-validated"
      >
        <Row>
          <Col xl={6}>
            <div className="comment-form__input-box">
              <input type="text" placeholder="Nome" name="name" />
            </div>
          </Col>
          <Col xl={6}>
            <div className="comment-form__input-box">
              <input type="email" placeholder="Email" name="email" />
            </div>
          </Col>
        </Row>
        <Row>
          <Col xl={12}>
            <div className="comment-form__input-box">
              <textarea name="message" placeholder="Mensagem"></textarea>
            </div>
            <button type="submit" className="thm-btn comment-form__btn">
              <i className="fas fa-arrow-circle-right"></i>Enviar Comentário
            </button>
          </Col>
        </Row>
      </form>
    </div>
  );
};

export default CommentForm;
