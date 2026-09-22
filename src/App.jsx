import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Missao from "./pages/Missao";
import Projetos from "./pages/Projetos";
import Colabore from "./pages/Colabore";
import Contato from "./pages/Contato";
import Transparencia from "./pages/Transparencia";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/missao" element={<Missao />} />
      <Route path="/projetos" element={<Projetos />} />
      <Route path="/colabore" element={<Colabore />} />
      <Route path="/transparencia" element={<Transparencia />} />
      <Route path="/contato" element={<Contato />} />
    </Routes>
  );
}