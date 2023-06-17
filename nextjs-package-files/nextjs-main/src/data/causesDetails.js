import image2 from "@/images/resources/causes-details-1.jpg";
import image3 from "@/images/resources/causes-refeicao.jpg";
import image from "@/images/resources/causes-details-2.jpg";

const text1 =
  "Ao comprar um vale Presentes à Mesa, na sua loja Continente, Continente Modelo, Continente Bom Dia e Continente Online, no valor de 1€ ou 5€ contribuiu para apoiar: Rede Emergência Alimentar e Instituições sociais locais associadas a cada loja Continente ";
const text2 =
  "O valor de cada vale foi distribuído, em partes iguais, entre a Rede de Emergência Alimentar e as instituições sociais locais selecionadas por cada loja, numa ótica de envolvimento e compromisso com a comunidade local. O total angariado foi entregue na íntegra à Rede de Emergência Alimentar e para as instituições envolvidas. ";

const summaryText =
  "Agradecemos, profundamente, a confiança de todos os clientes nas nossas causas e o contributo de cada um para o sucesso destas iniciativas. Podermos apoiar a Rede de Emergência Alimentar e 330 instituições, por todo o país, representa a forte ligação que temos e que manteremos com todos os nossos clientes, parceiros e instituições de Portugal.";

const causesDetails = {
  raised: "642,066,",
  goal: "1,000,000",
  category: "Alimentação",
  title: "Presentes à mesa",

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
