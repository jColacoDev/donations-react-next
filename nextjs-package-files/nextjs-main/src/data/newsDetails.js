import author from "@/images/blog/author-1-1.jpg";
import image from "@/images/resources/causes-refeicao.jpg";

const postList = [
  {
  id: 1,
  image: "lp-1-1.jpg",
  admin: "Admin",
  title: "Transforme Vidas Através da Solidariedade",
  },
  {
  id: 2,
  image: "lp-1-2.jpg",
  admin: "Admin",
  title: "Faça a Diferença na Vida das Crianças",
  },
  {
  id: 3,
  image: "lp-1-3.jpg",
  admin: "Admin",
  title: "Junte-se a Nós na Luta Contra a Pobreza",
  },
  ];

const tags = ["Doação", "Solidariedade", "Pobreza", "Educação", "Captação de Recursos"];

const categories = [
  "Solidariedade",
  "Captação de Recursos",
  "Doações",
  "Salve Vidas",
  "Saúde",
  "Educação",
  "Alimentação",
  "Água",
];
export const newsDetailsPage = {
  postList,
  tags,
  categories,
};

const text1 =
  "A doação de alimentos é essencial para combater a fome e garantir o bem-estar das pessoas mais necessitadas. Sua contribuição pode fazer a diferença.";
const text2 =
  "A solidariedade é um ato poderoso que pode transformar vidas. Ajude-nos a construir um mundo mais justo e igualitário para todos.";
const text3 =
  "Através do tratamento médico, podemos oferecer esperança e melhor qualidade de vida para aqueles que mais precisam. Junte-se a nós nessa missão.";

const newsDetails = {
  image,
  admin: "Administração",
  totalComments: 2,
  title: "Doação de Alimentos: Ajude a Combater a Fome",
  textOne: text1,
  textTwo: text2,
  textThree: text3,
  tags: tags.slice(0, 3),
  author: {
    image: author,
    name: "Kevin Martin",
    description:
    "Obrigado pelo seu apoio contínuo e por ajudar a fazer a diferença na vida daqueles que mais precisam. A sua generosidade é inspiradora!",
  },
  comments: [
    {
      id: 1,
      image: "comment-1-1.jpg",
      message:
        "Estou orgulhoso em fazer parte dessa campanha. Ver o impacto positivo que podemos causar na vida das pessoas é gratificante. Vamos continuar trabalhando juntos para combater a fome e promover a solidariedade em nossa comunidade.",
      sender: "David Marks",
      time: "3 horas atrás",
    },
    {
      id: 2,
      image: "comment-1-2.jpg",
      message:
        "A vossa dedicação é inspiradora! Como voluntário nessa campanha, pude presenciar de perto o impacto positivo que suas doações estão fazendo na vida das pessoas. Juntos, podemos fazer a diferença e construir um mundo melhor.",
      sender: "Mike Litoris",
      time: "3 horas atrás",
    },
  ],
};

export default newsDetails;