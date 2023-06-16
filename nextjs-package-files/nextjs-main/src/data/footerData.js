import bg from "@/images/backgrounds/footer-bg.jpg";
import footerImage from "@/images/resources/footer-logo.jpg";
import { contact } from "./contactData";

const footerData = {
  ...contact,
  link: "Kiosk Solidário",
  copyrightYear: new Date().getFullYear(),
  about:
    "Lorem ipsum dolor sit ame consect etur pisicing elit sed do eiusmod tempor incididunt ut labore.",
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
      title: "Missão Sorriso"
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
    },
    {
      id: 6,
      href: "#",
      title: "Angariação de fundos"
    },
    {
      id: 7,
      href: "#",
      title: "Contactos"
    },
    {
      id: 8,
      href: "#",
      title: "Ajuda"
    },
    {
      id: 9,
      href: "#",
      title: "Faqs"
    }
  ]
};

export default footerData;
