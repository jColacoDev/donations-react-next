import contactData from "@/data/contactData";
import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import ContactForm from "./ContactForm";

const { image, tel, email, officeAddress, description } = contactData;

const ContactPage = () => {
  return (
    <section className="contact-page">
      <Container>
        <div className="section-title text-center">
          <span className="section-title__tagline">Contacte-nos</span>
          <h2 className="section-title__title">
          Adoramos ouvir e conversar com você! <br/> 
          Ficaremos muito felizes com o seu contato. Estamos aqui para ajudar!
          </h2>
        </div>
        <Row>
          <Col xl={6} lg={6}>
            <div className="contact-page__left">
              <div className="contact-page__img">
                <Image src={image.src} alt="" />
              </div>
              <p className="contact-page__text">{description}</p>
              <div className="contact-page__contact-info">
                <ul className="contact-page__contact-list list-unstyled">
                  <li>
                    <div className="icon">
                      <span className="icon-chat"></span>
                    </div>
                    <div className="text">
                      <p>Fale connosco</p>
                      <a href={`tel:${tel}`}>{tel}</a>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="icon-message"></span>
                    </div>
                    <div className="text">
                      <p>Envie Email</p>
                      <a href={`mailto:${email}`}>{email}</a>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="icon-address"></span>
                    </div>
                    <div className="text">
                      <p>Visite-nos</p>
                      <h5>{officeAddress}</h5>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </Col>
          <Col xl={6} lg={6}>
            <ContactForm />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ContactPage;
