import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Volunteer = () => {
  return (
    <section className="become-volunteer">
      <Container>
        <Row>
          <Col xl={12}>
            <div className="become-volunteer__inner">
              <div className="become-volunteer__left">
                <h2>
                Junte as suas forças connosco <br /> por uma vida e um futuro melhores
                </h2>
                <div className="become-volunteer__big-text">
                  <h2>Torne-se Voluntário</h2>
                </div>
              </div>
              <div className="become-volunteer__btn-box">
                <a href="#" className="become-volunteer__btn thm-btn">
                  <i className="fas fa-arrow-circle-right"></i>Saber Mais
                </a>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Volunteer;
