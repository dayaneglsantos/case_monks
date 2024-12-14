import { ButtonContainer } from "./styles";

const Button = ({ title }: { title: string }) => {
  return (
    <a href="#">
      <ButtonContainer>{title}</ButtonContainer>
    </a>
  );
};

export default Button;
