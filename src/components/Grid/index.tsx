import { GridContainer } from "./styles";
import img1 from "../../assets/images/grid1.png";
import img2 from "../../assets/images/grid2.png";
import img3 from "../../assets/images/grid3.png";
import { TitleContainer } from "../../pages/home/styles";

const Grid = () => {
  return (
    <GridContainer>
      <div>
        <TitleContainer>
          <h2>Lorem ipsum dolor sit amet consectetur </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur. Semper orci adipiscing
            faucibus sit scelerisque quis commodo
          </p>
        </TitleContainer>
        <img src={img1} alt="Image 1" />
      </div>
      <div>
        <img src={img3} alt="Image 3" />
        <img src={img2} alt="Image 2" />
      </div>
    </GridContainer>
  );
};
export default Grid;
