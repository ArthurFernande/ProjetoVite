import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Page as Home } from "../pages/home";
import { Page as Home2 } from "../pages/home2";
export const AppRoute = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/home2" element={<Home2 />} />
      </Routes>
    </BrowserRouter>
  );
};

/*
- BrowserRouter: é o componente que fornece o contexto de roteamento para a aplicação.
- Routes: é o componente que contém todas as rotas da aplicação.
- Route: é o componente que define uma rota específica.
- Navigate: é o componente que permite redirecionar o usuário para outra rota.
*/
