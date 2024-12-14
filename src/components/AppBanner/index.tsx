import { Link } from "react-router-dom";
import { BannerContainer, Links } from "./styles";
import appstore from "../../assets/images/appstore.png";
import playstore from "../../assets/images/playstore.png";

const AppBanner = () => {
  return (
    <BannerContainer>
      <div className="text-container">
        <h2>Lorem ipsum dolor sit amet consectetur</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur. Semper orci adipiscing
          faucibus sit scelerisque quis commodo aenean viverra
        </p>
      </div>
      <Links>
        <Link to="#">
          <img src={appstore} alt="App store" />
        </Link>
        <Link to="#">
          <img src={playstore} alt="Play store" />
        </Link>
      </Links>
    </BannerContainer>
  );
};

export default AppBanner;
