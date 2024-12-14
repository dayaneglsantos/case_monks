import { colors } from "../../styles";
import styled from "styled-components";

export const TextCardContainer = styled.div`
  border: 2px solid ${colors.pink};
  border-radius: 24px;
  padding: 24px;
  background-color: #fff;
  min-width: 250px;
  max-width: 400px;
  flex: 1;

  text-align: center;

  span {
    font-size: 24px;
    font-weight: bold;
  }

  p {
    font-size: 20px;
    margin-top: 8px;
    margin-bottom: 24px;
    text-align: start;
    line-height: 30px;
  }

  button {
    background-color: ${colors.pink};
    padding: 8px 40px;
    border: none;
    border-radius: 4px;
    font-size: 16px;
    font-weight: bold;
  }
`;
