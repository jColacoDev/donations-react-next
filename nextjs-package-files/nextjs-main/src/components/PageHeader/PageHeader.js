import context from "@/context/context";
import bg from "@/images/backgrounds/page-header-bg-1-1.jpg";
import Link from "next/link";
import React, { useContext } from "react";

const PageHeader = ({ pageTitle = "" }) => {
  const { isKiosk } = useContext(context);

  return (
    <section className="page-header">
      <div
        className="page-header__bg"
        style={{ backgroundImage: `url(${bg.src})` }}
      ></div>
      <div className="container">
        <h2>{pageTitle}</h2>
        <ul className="thm-breadcrumb list-unstyled">
            <li>
              <Link href={!isKiosk ? "/" : "/causes"}>Início </Link>
            </li>
            <li className="color-thm-gray">/</li>
          <li>
            <span>{pageTitle}</span>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default PageHeader;
