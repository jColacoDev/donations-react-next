import bg from "@/images/backgrounds/footer-bg.jpg";
import footerImage from "@/images/resources/footer-logo.jpg";
import { contact } from "./contactData";

const footerData = {
  ...contact,
  link: "Kiosk Solidário",
  copyrightYear: new Date().getFullYear(),
  about:
    "Uma comunidade unida pela solidariedade e pela transformação social.",
  bottomLogo: footerImage.src,
  footerBg: bg.src,
  social: [
    {
      id: 1,
      href: "#",
      icon: "fa-twitter"
    },
    {
      id: 2,
      href: "#",
      icon: "fa-facebook-square"
    },
    {
      id: 3,
      href: "#",
      icon: "fa-dribbble"
    },
    {
      id: 4,
      href: "#",
      icon: "fa-instagram"
    }
  ],
  exploreList: [
    {
      id: 1,
      href: "#",
      title: "Doar agora!"
    },
    {
      id: 2,
      href: "#",
      title: "Campanhas"
    },
    {
      id: 3,
      href: "#",
      title: "Kiosk Solidário"
    },
    {
      id: 4,
      href: "#",
      title: "Voluntários"
    },
    {
      id: 5,
      href: "#",
      title: "Patrocinadores"
    }
  ]
};

export default footerData;
