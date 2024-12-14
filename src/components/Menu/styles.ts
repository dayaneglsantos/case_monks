import styled from "styled-components";
import bgImage from "../../assets/images/menu_img.png";
import { breakpoints, colors } from "../../styles";

interface MenuLinksProps {
  open: boolean;
}

export const MenuBg = styled.div`
  background-color: ${colors.light};
`;

export const MenuContainer = styled.nav<MenuLinksProps>`
  display: flex;
  flex-direction: column;
  gap: 60px;
  padding: 32px 80px;
  height: 480px;
  background-color: ${colors.font};
  background-image: ${(props) => (props.open ? "none" : `url(${bgImage})`)};
  background-repeat: no-repeat;
  background-position: right;
  background-size: contain;
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;
  background-position-x: 70vw;

  @media (max-width: ${breakpoints.tablet}) {
    height: 380px;
    padding: 0;
    background-color: ${(props) => (props.open ? colors.pink : colors.font)};
    background-position-x: 60vw;
    gap: 0;
  }
  @media (max-width: ${breakpoints.phone}) {
    background-size: cover;
    background-position-x: 180px;
  }
`;

export const NavBar = styled.nav<MenuLinksProps>`
  display: flex;
  align-items: center;
  gap: 32px;

  > div {
    display: flex;
    gap: 24px;
    border-bottom-right-radius: 12px;
    border-bottom-left-radius: 12px;
    background-color: ${(props) => (props.open ? colors.font : "transparent")};

    @media (max-width: ${breakpoints.tablet}) {
      padding: 16px 24px;
    }
  }

  .menu-icon {
    display: none;

    @media (max-width: ${breakpoints.tablet}) {
      display: flex;
    }
  }

  @media (max-width: ${breakpoints.tablet}) {
    display: block;
    padding: 0;
  }

  img {
    height: 24px;
  }
`;

export const MenuContent = styled.div<MenuLinksProps>`
  display: flex;
  flex-direction: column;
  gap: 8px;
  max-width: 650px;
  width: 100%;

  @media (max-width: ${breakpoints.tablet}) {
    padding: 0 24px;
    max-width: 500px;
  }
  @media (max-width: ${breakpoints.phone}) {
    padding: 0 24px;
    width: 75%;
  }

  h1 {
    color: ${colors.light};
    font-size: 48px;
    line-height: 56px;
    font-weight: bold;

    @media (max-width: ${breakpoints.tablet}) {
      font-size: 24px;
      line-height: 28px;
    }
  }

  p {
    color: ${colors.light};

    font-size: 24px;
    font-weight: 400;
    font-family: "Helvetica Neue", sans-serif;
    margin-bottom: 24px;

    @media (max-width: ${breakpoints.tablet}) {
      font-size: 16px;
      line-height: 18px;
    }
  }

  img {
    height: 100px;
    margin: 0 auto;
  }
`;

export const Hamburger = styled.div`
  img {
    display: none;
    @media (max-width: ${breakpoints.tablet}) {
      display: block;
    }
  }
`;

export const MenuLinks = styled.ul<MenuLinksProps>`
  display: flex;
  gap: 24px;
  list-style: none;

  li {
    color: ${colors.light};
    font-size: 20px;
    font-weight: 400;
    cursor: pointer;

    &:hover {
      transform: scale(1.1);
    }

    a {
      color: ${colors.light};
      text-decoration: none;

      @media (max-width: ${breakpoints.tablet}) {
        color: ${colors.dark};
      }
    }

    @media (max-width: ${breakpoints.tablet}) {
      color: ${colors.dark};
    }
  }

  .back {
    margin-top: auto;
    position: relative;
    display: none;

    @media (max-width: ${breakpoints.tablet}) {
      display: block;
    }

    img {
      height: 72px;
      position: absolute;
      z-index: 1;
      bottom: -12px;
      right: 50%;
      transform: translateX(50%);
    }
  }

  @media (max-width: ${breakpoints.tablet}) {
    background-color: ${colors.pink};
    display: ${(props) => (props.open ? "flex" : "none")};
    flex-direction: column;
    align-items: center;
    text-align: start;
    list-style: outside;
    height: 330px;
    padding: 24px 0;
  }
`;
