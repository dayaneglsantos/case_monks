// import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Rotas from "./routes";
import GlobalStyle from "./styles";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Rotas />
      <GlobalStyle />
    </BrowserRouter>
  );
}

export default App;
