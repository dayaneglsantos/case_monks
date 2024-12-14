import { createGlobalStyle } from "styled-components";

export const breakpoints = {
  large: "1440px",
  tablet: "768px",
  phone: "425px",
};

export const colors = {
  light: "#EAE8E4",
  dark: "#0C111D",
  font: "#2D2D2D",
  purple: "#3C0C60",
  purpleLight: "#7D26C9",
  pink: "#DFBBFE",
  btnBg: "#DFDCD5",
  error: "#FF0000",
};

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Helvetica Neue", sans-serif;
    color: ${colors.font};

    input[type=number]::-webkit-inner-spin-button { 
    -webkit-appearance: none;
    
}
    input[type=number] { 
      -moz-appearance: textfield;
      appearance: textfield;

}
  }  
 
`;

export default GlobalStyle;
