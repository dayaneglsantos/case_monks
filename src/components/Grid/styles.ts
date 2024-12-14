import styled from "styled-components";
import { breakpoints } from "../../styles";

export const GridContainer = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
  margin-top: 64px;

  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }

  img {
    width: 100%;
    object-fit: cover;
  }
`;
