import context from "@/context/context";
import footerData from "@/data/footerData";
import Link from "next/link";
import React, { useContext } from "react";
import { Col, Container, Image, Row } from "react-bootstrap";

const {
  exploreList,
  social,
  email,
  tel,
  officeAddress,
  about,
  link,
  copyrightYear,
  bottomLogo,
  footerBg,
} = footerData;

const SiteFooter = () => {
  const { isKiosk } = useContext(context);

  return (
    <footer className="site-footer">
      <div
        className="site-footer-bg"
        style={{ backgroundImage: `url(${footerBg})` }}
      ></div>
      <Container>
        {!isKiosk && <div className="site-footer__top">
          <Row>
            <Col xl={3} lg={6} md={6} className="fadeInUp">
              <div className="footer-widget__column footer-widget__about">
                <h3 className="footer-widget__title">Sobre Nós</h3>
                <p className="footer-widget__text">{about}</p>
                <a href="#" className="footer-widget__about-btn">
                  <i className="fa fa-heart"></i>Doar
                </a>
              </div>
            </Col>
            <Col
              xl={3}
              lg={6}
              md={6}
              className="wow fadeInUp"
              data-wow-delay="200ms"
            >
              <div className="footer-widget__column footer-widget__explore clearfix">
                <h3 className="footer-widget__title">Explorar</h3>
                <ul className="footer-widget__explore-list list-unstyled">
                  {exploreList.slice(0, 5).map(({ id, title, href }) => (
                    <li key={id}>
                      <a href={href}>{title}</a>
                    </li>
                  ))}
                </ul>
                <ul className="footer-widget__explore-list footer-widget__explore-list-two list-unstyled">
                  {exploreList.slice(5).map(({ id, title, href }) => (
                    <li key={id}>
                      <a href={href}>{title}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </Col>
            <Col xl={3} lg={6} md={6} className="fadeInUp">
              <div className="footer-widget__column footer-widget__contact">
                <h3 className="footer-widget__title">Contactos</h3>
                <ul className="list-unstyled footer-widget__contact-list">
                  <li>
                    <div className="icon">
                      <i className="icon-chat"></i>
                    </div>
                    <div className="text">
                      <p>
                        <span>Fale connosco</span>
                        <a href={`tel:${tel}`}>{tel}</a>
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <i className="icon-message"></i>
                    </div>
                    <div className="text">
                      <p>
                        <span>Envie Email</span>
                        <a href={`mailto:${email}`}>{email}</a>
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <i className="icon-address"></i>
                    </div>
                    <div className="text">
                      <p>
                        <span>Visite-nos</span>
                        {officeAddress}
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </Col>
            <Col
              xl={3}
              lg={6}
              md={6}
              className="wow fadeInUp"
              data-wow-delay="400ms"
            >
              <div className="footer-widget__column footer-widget__newsletter">
                <h3 className="footer-widget__title">Newsletter</h3>
                <p className="footer-widget__newsletter-text">
                Receba as últimas noticias e faça a diferença com a nossa newsletter solidária.
                </p>
                <form className="footer-widget__newsletter-form">
                  <input
                    type="email"
                    placeholder="Email"
                    name="email"
                  />
                  <button
                    type="submit"
                    className="footer-widget__newsletter-btn"
                  >
                    <i className="fas fa-arrow-circle-right"></i>Enviar
                  </button>
                </form>
              </div>
            </Col>
          </Row>
        </div>
        }
        <div className="site-footer__bottom">
          <Row>
            <Col xl={12}>
              <div className="site-footer__bottom-inner">
                <div className="site-footer__bottom-logo-social">
                  <div className="site-footer__bottom-logo">
                    <Link href="/">
                      <a>
                        <Image src={bottomLogo} alt="" />
                      </a>
                    </Link>
                  </div>
                  <div className="site-footer__bottom-social">
                    {social.map(({ id, icon, href }) => (
                      <a href={href} key={id}>
                        <i className={`fab ${icon}`}></i>
                      </a>
                    ))}
                  </div>
                </div>
                <div className="site-footer__bottom-copy-right">
                  <p>
                    © Copyright {copyrightYear} by{" "}
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href={`https://${link}`}
                    >
                      {link}
                    </a>
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </footer>
  );
};

export default SiteFooter;
