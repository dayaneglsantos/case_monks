import styled from "styled-components";
import { breakpoints, colors } from "../../styles";

export const BannerContainer = styled.div`
  background-color: ${colors.purple};
  padding: 40px;
  border-radius: 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 32px;
  align-items: center;
  margin-top: 64px;
  margin-bottom: 64px;

  .text-container {
    flex: 1;
  }

  h2,
  p {
    color: ${colors.light} !important;
  }

  h2 {
    font-size: 40px;
  }
  p {
    font-size: 24px;
  }
`;
export const Links = styled.div`
  text-align: right;
  display: flex;
  flex-direction: column;
  gap: 8px;

  @media (max-width: ${breakpoints.tablet}) {
    margin: 0 auto;
  }
`;
