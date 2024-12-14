import styled from "styled-components";
import { breakpoints, colors } from "../../styles";

export const FormBackground = styled.div`
  background-color: ${colors.dark};
  padding: 64px 0;
`;

export const Footer = styled.div`
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
export const FormContent = styled.div`
  display: flex;
  gap: 40px;
  flex-wrap: wrap;
  justify-content: center;

  @media (max-width: ${breakpoints.tablet}) {
    flex-direction: column;
    align-items: center;
  }
`;

export const FormContainer = styled.form`
  background-color: ${colors.light};
  border-radius: 24px;
  padding: 24px;
  flex: 1;

  @media (max-width: ${breakpoints.tablet}) {
    max-width: 90vw;
  }
`;

export const FormHeader = styled.div`
  h2 {
    font-size: 36px;
  }

  p {
    font-size: 20px;
    margin: 8px 0 16px;
  }

  span {
    font-size: 16px;
  }
`;

export const FormInputsList = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 18px;
  margin-top: 32px;

  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`;

export const FormInput = styled.input`
  border-radius: 8px;
  padding: 8px 12px;
  color: #777;
  border: none;
  font-size: 20px;
  width: 100%;
  flex: 1;

  &:focus {
    outline: none;
  }
`;

export const SecurityContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin-top: 32px;
  gap: 16px;
  flex: 1;

  input {
    max-width: 250px;
  }

  @media (max-width: ${breakpoints.phone}) {
    gap: 8px 0;

    input {
      max-width: 140px;
    }
  }

  .security-title {
    font-size: 24px;

    @media (max-width: ${breakpoints.tablet}) {
      display: block;
      width: 100%;
      text-align: center;
    }
  }

  .security-sum {
    background-color: ${colors.btnBg};
    padding: 12px;
    width: fit-content;
    border-radius: 8px;
  }

  .security-number {
    color: ${colors.purpleLight};
    font-size: 20px;
    font-weight: bold;
  }

  .security-signal {
    font-size: 20px;
    font-weight: bold;
    margin: 0 12px;

    @media (max-width: ${breakpoints.tablet}) {
      margin: 0 8px;
    }
  }
`;

export const SubmitButton = styled.button`
  background-color: ${colors.pink};
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
  border: none;
  color: ${(props) => (props.disabled ? colors.font : colors.purple)};
  font-weight: bold;
  padding: 16px 40px;
  border-radius: 4px;
  margin: 24px auto 0;
  display: block;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
`;

export const FooterContent = styled.footer`
  text-align: center;
  margin: 72px auto 0;
  border-top: 1px solid ${colors.pink};
  padding-top: 24px;
  color: ${colors.light};

  a,
  p {
    color: ${colors.light};
  }
`;

export const FooterImages = styled.div`
  display: flex;
  gap: 40px;
  justify-content: center;
  margin-bottom: 24px;

  img {
    height: 32px;
    width: 32px;
  }
`;

export const FooterLinks = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  justify-content: center;
  margin-top: 24px;
  list-style: none;

  li:hover {
    transform: scale(1.1);
  }

  a {
    text-decoration: none;
  }
`;

export const ErrorText = styled.span`
  font-size: 12px;
  color: ${colors.error};
  display: block;
  margin-left: 8px;
  margin-top: 4px;
`;
