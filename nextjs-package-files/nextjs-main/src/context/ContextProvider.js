import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import context from "./context";

const ContextProvider = ({ children }) => {
  const [menuStatus, setMenuStatus] = useState(false);
  const [openSearch, setOpenSearch] = useState(false);
  const [isKiosk, setIsKiosk] = useState(false);
  const { pathname, query } = useRouter();
  const router = useRouter();

  const toggleMenu = (value) => {
    setMenuStatus((preMenuStatus) =>
      value === undefined
        ? !preMenuStatus
        : typeof value === "boolean"
        ? value
        : !!value
    );
  };
  const toggleKiosk = () => {
    setIsKiosk((prevKiosk) => !prevKiosk);
  };

  const toggleSearch = () => {
    setOpenSearch((preSearch) => !preSearch);
  };

  useEffect(() => {
    toggleMenu(false);

    const { kiosk } = query;
    if(kiosk === "true"){
      setIsKiosk(true);
      router.push("/causes");
    }
  }, [pathname, query]);



  const value = {
    isKiosk,
    toggleKiosk,
    menuStatus,
    openSearch,
    toggleMenu,
    toggleSearch,
    isKiosk
  };
  return <context.Provider value={value}>{children}</context.Provider>;
};

export default ContextProvider;
