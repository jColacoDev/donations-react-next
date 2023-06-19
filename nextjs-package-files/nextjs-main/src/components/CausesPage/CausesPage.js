import causesPageData from "@/data/causesPageData";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import CausesSingle from "../CausesOne/CausesSingle";

const CausesPage = () => {
  return (
    <section className="causes-one causes-page">
      <Container>
      <a onClick={(e)=>e.preventDefault()} className={`causes-details__share-btn thm-btn criarCampanhaBtn`}>
        Criar Campanha
      </a>
        <Row>
          {causesPageData.map((cause) => (
            <Col xl={4} lg={6} md={6} key={cause.id}>
              <CausesSingle causePage cause={cause} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default CausesPage;
