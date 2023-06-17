import bg1 from "@/images/backgrounds/main-slider-1-1.jpg";
import bg2 from "@/images/backgrounds/main-slider-2-1.jpg";
import bg3 from "@/images/backgrounds/main-slider-3-1.jpg";
import image from "@/images/shapes/main-slider-1-shape-1.png";
import banner_escola from "@/images/banners/escola.jpg";
import banner_presentes from "@/images/banners/presentes.jpg";
import banner_missao from "@/images/banners/missao.jpg";


const mainSliderData = [
  {
    id: 1,
    image,
    bg: banner_presentes,
    subTitle: "Tempo de Cuidar",
    title: "Presentes à Mesa",
    href: "#",
  },
  {
    id: 2,
    image,
    bg: banner_escola,
    subTitle: "Solidariedade em Acção!",
    title: "Luzes com Presença",
    href: "#",
  },
  {
    id: 3,
    image,
    bg: banner_missao,
    subTitle: "Fazer o bem, Faz bem",
    title: "Missão Continente",
    href: "#",
  },
];

export default mainSliderData;

export const mainSliderCounter = [
  {
    id: 1,
    count: 4390,
    title: "Voluntários disponiveis",
  },
  {
    id: 2,
    count: 8900,
    title: "Fundos angariados",
  },
];