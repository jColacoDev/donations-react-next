import causesDetails from "@/data/causesDetails";
import { social } from "@/data/NavItems";
import download from "@/images/resources/causes-details-download-icon.png";
import mbwayQr from "@/images/resources/mbwayQr.jpg";
import shop from "@/images/resources/shop.jpg";

import React, { useContext, useState } from "react";
import { Col, Image, Row } from "react-bootstrap";
import CommentForm from "../CommentForm/CommentForm";
import SingleComment from "./SingleComment";
import context from "@/context/context";
import Link from "next/link";

const {
  comments,
  summaryList,
  raised,
  goal,
  category,
  title,
  images,
  texts,
  summaryText,
} = causesDetails;

const CausesDetailsLeft = () => {
  const raisedNumber = +raised.split(",").join("");
  const goalNumber = +goal.split(",").join("");
  const percent = Math.round((raisedNumber / goalNumber) * 100) + "%";
  const { isKiosk } = useContext(context);
  const [isShop, setIsShop] = useState(false);
  const [shopMode, setShopMode] = useState("store");

  const handleShopClick = (e) => {
    e.preventDefault();
    setIsShop(!isShop);
  }
  
  return (
    <div className="causes-details__left-bar">
      <div className="causes-details__img">
        <div className="causes-details__img-box">
          <Image src={images[0].src} alt="" />
          <div className="causes-details__category">
            <span>{category}</span>
          </div>
        </div>
        <div className="causes-details__progress">
          <div className="bar">
            <div
              className="bar-inner count-bar"
              style={{ width: percent, opacity: 1 }}
              data-percent={percent}
            >
              <div style={{ opacity: 1 }} className="count-text">
                {percent}
              </div>
            </div>
          </div>
          <div className="causes-details__goals">
            <p>
              <span>€{raised}</span> Obtido
            </p>
            <p>
              <span>€{goal}</span> Meta
            </p>
          </div>
        </div>
      </div>
      {!isShop && <section>
      <div className="causes-details__text-box">
          <div className="causes-details__share-btn-box">
              <a onClick={handleShopClick} className="causes-details__share-btn thm-btn">
                <i className="fas fa-arrow-circle-right"></i>Doar Agora!
              </a>
          </div>
        <h3>{title}</h3>
        {texts.map((text, index) => (
          <p key={index} className={`causes-details__text-${index + 1}`}>
            {text}
          </p>
        ))}
      </div>
      <div className="causes-details__images-box">
        <Row>
          {images.slice(1).map((image, index) => (
            <Col xl={6} lg={6} key={index}>
              <div className="causes-details__images-single">
                <Image src={image.src} alt="" />
              </div>
            </Col>
          ))}
        </Row>
      </div>
      <div className="causes-details__summary">
          <div className="causes-details__summary-text">
            <p>{summaryText}</p>
          </div>
          <div className="causes-details__summary-list">
            <ul className="causes-details__summary-list-box list-unstyled">
              {summaryList.map((item, index) => (
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
          </div>
          
          <div className="causes-details__share-btn-box">
              <a onClick={handleShopClick} className="causes-details__share-btn thm-btn">
                <i className="fas fa-arrow-circle-right"></i>Doar Agora!
              </a>
          </div>
        </div>
          <div className="causes-details__share-btn-box">
              <Link href="/causes">
                <a className="causes-details__share-btn thm-btn">
                  <i className="fas fa-arrow-circle-right"></i>Ver Campanhas
                </a>
              </Link>
          </div>
      </section>}
      {isShop && <section>
        <br/>
        <h3>Escolha como quer ajudar</h3>
        <br/>
        <a onClick={()=>setShopMode("store")} className={`causes-details__share-btn thm-btn ${shopMode==="store" && "selected"}`}>
          <i className="fas fa-arrow-circle-right"></i>Loja
        </a>
        <a onClick={()=>setShopMode("mbWay")} className={`causes-details__share-btn thm-btn ${shopMode==="mbWay" && "selected"}`}>
          <i className="fas fa-arrow-circle-right"></i>MbWay
        </a>
        <a onClick={()=>setShopMode("others")} className={`causes-details__share-btn thm-btn ${shopMode==="others" && "selected"}`}>
          <i className="fas fa-arrow-circle-right"></i>Outros
        </a>
        <br/>
        <br/>
        {shopMode === "store" &&
          <div className="causes-details__img-box">
          <div className="causes-details__img-box">
            <Image src={shop.src} alt="" />
          </div>          
          </div>
        }
        {shopMode === "mbWay" &&
          <div className="causes-details__img-box">
            <Image src={mbwayQr.src} alt="" />
            <div className="causes-details__category">
              <span>210 16 16 16</span>
            </div>
          </div>
        }
        {shopMode === "others" &&
          <div className="causes-details__img-box">
            others
          </div>
        }
        <br/>
          <div className="causes-details__share-btn-box">
              <a onClick={handleShopClick} className="causes-details__share-btn thm-btn">
                <i className="fas fa-arrow-circle-right"></i>Ver Campanha
              </a>
          </div>
      </section>}

      {!isKiosk && <>
        <div className="causes-details__share">
          <div className="causes-details__share-social">
            {social.map(({ icon, link }, index) => (
              <a href={link} key={index}>
                <i className={`fab ${icon}`}></i>
              </a>
            ))}
          </div>
        </div>
        <div className="causes-details__download">
          <div className="causes-details__left">
            <div className="icon">
              <Image src={download.src} alt="" />
            </div>
            <div className="text">
              <h4>Ficha Técnica</h4>
            </div>
          </div>
          <div className="causes-details__download-btn-box">
            <a href="#" className="causes-details__download-btn thm-btn">
              <i className="fas fa-arrow-circle-right"></i>Download
            </a>
          </div>
        </div>
        <div className="comment-one">
          <h3 className="comment-one__title">Comentários</h3>
          {comments.map((comment) => (
            <SingleComment key={comment.id} comment={comment} />
          ))}
        </div>
        <CommentForm />
      </>}
    </div>
  );
};

export default CausesDetailsLeft;
