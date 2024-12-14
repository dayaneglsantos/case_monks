import styled from "styled-components";
import { colors } from "../../styles";

export const CardList = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 24px;
`;

export const CardContainer = styled.li`
  background-color: #fcfcfd;
  padding: 6px 6px 12px;
  border-radius: 8px;
  color: ${colors.dark};
  margin-bottom: 32px;

  img {
    height: 180px;
    border-radius: 8px;
    width: 100%;
    object-fit: cover;
  }

  h4 {
    font-size: 24px;
    line-height: 36px;
    margin: 8px 0;
  }

  span {
    font-size: 20px;
    font-weight: 400;
  }
`;
