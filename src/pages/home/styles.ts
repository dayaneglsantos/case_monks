import styled from "styled-components";

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 24px;

  h2 {
    font-size: 40px;
  }

  p {
    font-size: 24px;

    margin-top: 8px;
  }
`;

export const ButtonsList = styled.div`
  text-align: center;
  padding: 0 75px;
  margin-bottom: 64px;
`;

export const TextCardsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
  gap: 40px;
`;
