const navItems = [
  {
    id: 1,
    name: "Início",
    href: "/",
    subNavItems: [
      // {
      //   id: 1,
      //   name: "Home One",
      //   href: "/",
      // },
      // {
      //   id: 2,
      //   name: "Home Two",
      //   href: "/home2",
      // },
      // {
      //   id: 3,
      //   name: "Home Three",
      //   href: "/home3",
      // },
      // {
      //   id: 4,
      //   name: "Header Styles",
      //   href: "/",
      //   subItems: [
      //     {
      //       id: 1,
      //       name: "Header One",
      //       href: "",
      //     },
      //     { id: 2, name: "Header Two", href: "" },
      //     { id: 3, name: "Header Three", href: "" },
      //   ],
      // },
    ],
  },
  {
    id: 2,
    name: "Páginas",
    href: "",
    subNavItems: [
      { id: 1, name: "Sobre nós", href: "/about" },
      { id: 2, name: "Voluntários", href: "/volunteers" },
      { id: 3, name: "Galeria", href: "/gallery" },
      { id: 4, name: "Torne-se Voluntário", href: "/become-volunteer" },
    ],
  },
  {
    id: 3,
    name: "Campanhas",
    href: "/causes",
    subNavItems: [
      // { id: 1, name: "Causes", href: "/causes" },
      // { id: 2, name: "Causes Details", href: "/causes-details" },
    ],
  },
  {
    id: 4,
    name: "Eventos",
    href: "/events",
    subNavItems: [
      // { id: 1, name: "Events", href: "/events" },
      // { id: 2, name: "Event Details", href: "/event-details" },
    ],
  },
  {
    id: 5,
    name: "Noticias",
    href: "/news",
    subNavItems: [
      // { id: 1, name: "News", href: "/news" },
      // { id: 2, name: "News Details", href: "/news-details" },
    ],
  },
  {
    id: 6,
    name: "Contactos",
    href: "/contact",
    subNavItems: [],
  },
];

export default navItems;

export const social = [
  { icon: "fa-twitter", link: "" },
  { icon: "fa-facebook-square", link: "" },
  { icon: "fa-dribbble", link: "" },
  { icon: "fa-instagram", link: "" },
];
