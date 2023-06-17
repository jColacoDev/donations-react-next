import newsData from "@/data/NewsData";
import image from "@/images/blog/news-one-img-1.jpg";
import Link from "next/link";
import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import SingleNews from "./SingleNews";

const NewsOne = () => {
  return (
    <section className="news-one">
      <Container>
        <Row>
          <Col xl={8} lg={8}>
            <div className="section-title text-left">
              <span className="section-title__tagline">Actualizações Diárias</span>
              <h2 className="section-title__title">
                As ultimas noticias & artigos directamente do blog
              </h2>
            </div>
          </Col>
          <Col xl={4} lg={4}>
            <div className="news-one__button-box">
              <a href="#" className="news-one__btn thm-btn">
                <i className="fas fa-arrow-circle-right"></i>Ver Mais
              </a>
            </div>
          </Col>
        </Row>
        <Row>
          <Col xl={6} lg={6}>
            <div className="news-one__left">
              <div className="news-one__img">
                <Image src={image.src} alt="" />
                <Link href="/news-details">
                  <a>
                    <i className="fa fa-plus"></i>
                  </a>
                </Link>
              </div>
              <div className="news-one__bottom">
                <ul className="list-unstyled news-one__meta">
                  <li>20 Jan, 2021</li>
                  <li>
                    <span>/</span>
                  </li>
                  <li>
                    <a href="#">2 Comentários</a>
                  </li>
                </ul>
                <h3 className="news-one__title">
                  <Link href="/news-details">
                    <a>Doações são a esperança para as crianças este Natal</a>
                  </Link>
                </h3>
              </div>
            </div>
          </Col>
          <Col xl={6} lg={6}>
            <div className="news-one__right">
              {newsData.map(({ id, ...news }) => (
                <SingleNews key={id} news={news} />
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default NewsOne;
