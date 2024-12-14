import styled from "styled-components";
import { colors } from "../../styles";

export const ButtonContainer = styled.button`
  border: 1px solid ${colors.purpleLight};
  border-radius: 24px;
  background-color: ${colors.btnBg};
  color: ${colors.purpleLight};
  font-size: 20px;
  font-family: "Inter", sans-serif;
  padding: 8px 40px;
  font-weight: 600;
  margin-right: 24px;
  margin-bottom: 24px;
  cursor: pointer;

  &:hover {
    filter: brightness(0.9);
  }
`;
