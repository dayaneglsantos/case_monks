import { useState } from "react";
import {
  MenuBg,
  MenuContainer,
  MenuContent,
  MenuLinks,
  NavBar,
} from "./styles";
import logo from "../../assets/images/logo.png";
import scroll from "../../assets/images/Scroll.png";
import hamburgerImg from "../../assets/images/menu.svg";
import back from "../../assets/images/back.svg";

export const Menu = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <MenuBg>
      <MenuContainer open={openMenu}>
        <NavBar open={openMenu}>
          <div>
            <img src={logo} alt="Logo" />
            <img
              className="menu-icon"
              src={hamburgerImg}
              alt="Menu hamburger"
              onClick={() => setOpenMenu(!openMenu)}
            />
          </div>
          <MenuLinks open={openMenu}>
            <li>
              <a href="#">Categoria 1</a>
            </li>
            <li>
              <a href="#">Categoria 2</a>
            </li>
            <li>
              <a href="#">Categoria 3</a>
            </li>
            <li>
              <a href="#">Categoria 4</a>
            </li>

            <div className="back" onClick={() => setOpenMenu(!openMenu)}>
              <img src={back} alt="Back" />
              <span>back</span>
            </div>
          </MenuLinks>
        </NavBar>
        <MenuContent open={openMenu}>
          <h1>Lorem ipsum dolor sit amet consectetur</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur. Semper orci adipiscing
            faucibus sit scelerisque quis commodo aenean viverra
          </p>
          <img src={scroll} alt="Scroll" />
        </MenuContent>
      </MenuContainer>
    </MenuBg>
  );
};
