import styled from "styled-components";
import { breakpoints, colors } from "../../styles";

export const SectionContainer = styled.section`
  padding: 64px 0;
  background-color: ${colors.light};

  @media (max-width: ${breakpoints.tablet}) {
    padding: 24px 0;
  }
`;

export const SectionContent = styled.div`
  max-width: 85vw;
  width: 100%;
  margin: 0 auto;

  @media (max-width: ${breakpoints.tablet}) {
    max-width: 90vw;
  }

  @media (min-width: ${breakpoints.large}) {
    max-width: 1300px;
  }
`;
