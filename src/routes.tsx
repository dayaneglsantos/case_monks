import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
  </Routes>
);

export default Rotas;
