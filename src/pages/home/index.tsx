import Card from "../../components/Card";
import { Menu } from "../../components/Menu";
import image1 from "../../assets/images/image1.png";
import image2 from "../../assets/images/image2.png";
import image3 from "../../assets/images/image3.png";
import image4 from "../../assets/images/image4.png";
import { CardList } from "../../components/Card/styles";
import Section from "../../components/Section";
import Grid from "../../components/Grid";
import AppBanner from "../../components/AppBanner";
import Button from "../../components/Button";
import TextCard from "../../components/TextCard";
import Form from "../../components/Form";
import { ButtonsList, TextCardsList, TitleContainer } from "./styles";

const mockList = [
  {
    title: "Nome do Produto",
    description: "Lorem ipsum dolor sit amet consectetur.",
    image: image1,
  },
  {
    title: "Nome do Produto",
    description: "Lorem ipsum dolor sit amet consectetur.",
    image: image2,
  },
  {
    title: "Nome do Produto",
    description: "Lorem ipsum dolor sit amet consectetur.",
    image: image3,
  },
  {
    title: "Nome do Produto",
    description: "Lorem ipsum dolor sit amet consectetur.",
    image: image4,
  },
];

const mockProducts = [
  "Perfumaria",
  "Corpo e banho",
  "Hidratante",
  "Desodorante",
  "Cabelos",
  "Maquiagem",
  "Rosto",
  "Casa",
  "Infantil",
  "Shampoo",
  "Sabonete",
  "Body splash",
  "Óleo corporal",
  "Corretivo",
  "Proteção solar",
];

const Home = () => {
  return (
    <>
      <Menu />
      <Section>
        <TitleContainer>
          <h2>Lorem ipsum dolor sit amet consectetur</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur. Semper orci adipiscing
            faucibus sit scelerisque quis commodo
          </p>
        </TitleContainer>
        <CardList>
          {mockList.map((item) => (
            <Card
              title={item.title}
              img={item.image}
              description={item.description}
            />
          ))}
        </CardList>
        <Grid />
        <AppBanner />
        <TitleContainer>
          <h2>Lorem ipsum dolor sit amet consectetur</h2>
        </TitleContainer>
        <ButtonsList>
          {mockProducts.map((item) => (
            <Button key={item} title={item} />
          ))}
        </ButtonsList>
        <TextCardsList>
          <TextCard />
          <TextCard />
          <TextCard />
        </TextCardsList>
      </Section>
      <Form />
    </>
  );
};

export default Home;
