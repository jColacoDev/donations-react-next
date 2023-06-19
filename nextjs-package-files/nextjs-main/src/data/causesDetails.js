import image2 from "@/images/resources/causes-details-1.jpg";
import image3 from "@/images/resources/causes-children.jpg";
import image from "@/images/resources/causes-escolar.jpg";

const text1 =
  "Ao comprar um vale Material Escolar para Crianças, na nossa loja online ou através do MBWAY, no valor de 1€ ou 5€, você está a contribuir para apoiar a educação das crianças. O valor arrecadado será utilizado para fornecer materiais escolares essenciais para crianças em situação de vulnerabilidade.";
const text2 =
  "Através dessa iniciativa, buscamos garantir que todas as crianças tenham acesso aos materiais necessários para o seu desenvolvimento educacional. O valor de cada vale adquirido será distribuído de forma equitativa para as instituições parceiras e projetos educacionais que atuam diretamente com crianças em todo o país. Você pode fazer a diferença! Ajude-nos a proporcionar um futuro brilhante para as crianças, comprando na nossa loja online ou enviando sua contribuição através do MBWAY. Juntos, estamos a transformar vidas e a construir um futuro melhor para todos.";

const summaryText =
  "Agradecemos sinceramente a confiança de cada doador na nossa causa e o seu valioso contributo para o sucesso desta iniciativa. Por meio da compra do vale Material Escolar para Crianças e das doações realizadas, estamos a fortalecer os laços com a comunidade e a apoiar a educação das crianças em Portugal";

const causesDetails = {
  raised: "642,066,",
  goal: "1,000,000",
  category: "Educação",
  title: "Material Escolar para Crianças",

  images: [image, image2, image3],
  texts: [text1, text2],
  summaryText,
  summaryList: [
    "Escola Nacional de Saúde Publica",
    "Associação Portuguesa de Nutrição",
    "Federação Portuguesa de Futebol",
    "TVI",
    "Continente",
  ],
  comments: [
    {
    id: 1,
    image: "comment-1-1.jpg",
    message:
    "Parabéns pelo projecto incrível! Estou feliz por contribuir.",
    sender: "David Silva",
    time: "Há 3 horas",
    },
    {
    id: 2,
    image: "comment-1-2.jpg",
    message:
    "Excelente iniciativa! Continuem a fazer a diferença.",
    sender: "Jessica Rosa",
    time: "Há 3 horas",
    },
    ],
    };

export default causesDetails;
