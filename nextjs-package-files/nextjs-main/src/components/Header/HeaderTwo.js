import context, { useRootContext } from "@/context/context";
import navItems, { social } from "@/data/NavItems";
import useScroll from "@/hooks/useScroll";
import logo from "@/images/resources/logo-2.png";
import Link from "next/link";
import React, { useContext } from "react";
import { Container, Image } from "react-bootstrap";
import NavItem from "./NavItem";

const HeaderTwo = () => {
  const { scrollTop } = useScroll(130);
  const { toggleMenu, toggleSearch } = useRootContext();
  const { isKiosk, toggleKiosk  } = useContext(context);

  return (
    <header className="main-header-two clearfix">
      <div className="main-header-two__inner">
        <Container>
          <div className="main-header-two__top clearfix">
            <div className="main-header-two__logo">
              <button onClick={toggleKiosk}>
                  <Image src={logo.src} alt="" />
              </button>
            </div>
            <div className="main-header-two__contact-info">
              <ul className="main-header-two__contact-list list-unstyled">
                <li>
                  <div className="main-header-two__contact-icon">
                    <span className="icon-chat"></span>
                  </div>
                  <div className="main-header-two__contact-text">
                    <p>Fale connosco</p>
                    <a href={!isKiosk && "tel:210 16 16 16"}>210 16 16 16</a>
                  </div>
                </li>
                <li>
                  <div className="main-header-two__contact-icon">
                    <span className="icon-message"></span>
                  </div>
                  <div className="main-header-two__contact-text">
                    <p>Envie Email</p>
                    <a href={!isKiosk && "mailto:missao.sorriso@sonaemc.com"}>
                      missao.sorriso@sonaemc.com
                    </a>
                  </div>
                </li>
                <li>
                  <div className="main-header-two__contact-icon">
                    <span className="icon-address"></span>
                  </div>
                  <div className="main-header-two__contact-text">
                    <p>Visite-nos</p>
                    <h5>8Via Norte Espido, Maia</h5>
                  </div>
                </li>
              </ul>
              <div className="main-header-two__btn">
                <Link href="/causes-details">
                  <a className="main-header-two__donate-btn">
                    <i className="fa fa-heart"></i>Doar{" "}
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </div>
    {!isKiosk && <>
        <div className="main-header-two__bottom">
          <nav
            className={
              scrollTop
                ? "stricky-header stricked-menu main-menu main-menu__two stricky-fixed slideInDown animated"
                : "main-menu main-menu__two slideIn animated"
            }
          >
            <Container>
              <div
                className={
                  scrollTop
                    ? "sticky-header__content main-menu__inner clearfix"
                    : "main-menu__inner clearfix"
                }
              >
                <span
                  onClick={() => toggleMenu()}
                  className="mobile-nav__toggler"
                >
                  <i className="fa fa-bars"></i>
                </span>
                <ul className="main-menu__list">
                  {navItems.map((navItem) => (
                    <NavItem key={navItem.id} navItem={navItem} />
                  ))}
                </ul>
                <div className="main-menu__right">
                  <div className="main-menu__right-social">
                    {social.map(({ icon, link }, index) => (
                      <a href={link} key={index}>
                        <i className={`fab ${icon}`}></i>
                      </a>
                    ))}
                  </div>
                  <span
                    onClick={toggleSearch}
                    style={{ cursor: "pointer" }}
                    className="main-menu__search search-toggler icon-magnifying-glass"
                  ></span>
                  <a
                    href="#"
                    className="main-menu__cart icon-shopping-cart  "
                  ></a>
                </div>
              </div>
            </Container>
          </nav>
        </div>
      </>}
    </header>
  );
};

export default HeaderTwo;
