import { CardContainer } from "./styles";

interface Card {
  title: string;
  description: string;
  img: string;
}

const Card = ({ img, title, description }: Card) => {
  return (
    <CardContainer>
      <img src={img} alt="Imagem do card" />
      <h4>{title}</h4>
      <span>{description}</span>
    </CardContainer>
  );
};
export default Card;
