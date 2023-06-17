import React, { useEffect, useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import Head from "next/head";
import { useRootContext } from "@/context/context";
import useScroll from "@/hooks/useScroll";
import Header from "@/components/Header/Header";
import Preloader from "@/components/Preloader";
import MobileMenu from "../MobileMenu/MobileMenu";
import Search from "../Search/Search";
import SiteFooter from "../SiteFooter/SiteFooter";

const Layout = ({ children, pageTitle }) => {
  const [loading, setLoading] = useState(true);
  const { menuStatus } = useRootContext();
  const { scrollTop } = useScroll(70);
  const [smileyState, setSmileyState] = useState("rest");

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);

  useEffect(() => {
    const blinkTimer = setInterval(() => {
      setSmileyState("blink");
      setTimeout(() => {
        setSmileyState("rest");
      }, 2000);
    }, 5000);

    const activityTimer = setTimeout(() => {
      setSmileyState("sleep");
    }, 30000);

    const handleMouseMove = () => {
      setSmileyState("thrilled");
      clearTimeout(activityTimer);
      activityTimer = setTimeout(() => {
        setSmileyState("sleep");
      }, 30000);
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      clearInterval(blinkTimer);
      clearTimeout(activityTimer);
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const getSmileyCode = () => {
    switch (smileyState) {
      case "rest":
        return "😊";
      case "blink":
        return "😉";
      case "thrilled":
        return "😍";
      case "sleep":
        return "😴";
      default:
        return "😊";
    }
  };

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>K{`${getSmileyCode()}solidário`}</title>
      </Head>
      <Preloader loading={loading} />
      <main
        id="wrapper"
        style={{ opacity: loading ? 0 : 1 }}
        className="page-wrapper"
      >
        <Header pageTitle={pageTitle} />
        {children}
        <SiteFooter />
      </main>
      {menuStatus && <MobileMenu />}
      <Search />
      {scrollTop && (
        <ScrollLink
          to="wrapper"
          smooth={true}
          duration={500}
          id="backToTop"
          style={{ cursor: "pointer" }}
          className="scroll-to-target scroll-to-top fadeIn animated"
        >
          <i className="fa fa-angle-up"></i>
        </ScrollLink>
      )}
    </>
  );
};

export default Layout;
