import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavBar from "../components/NavBar/NavBar";
import Home from "./home/Home";
import APropos from "./a_propos/APropos";
import AnnonceRender from "./annonce/Annonce_Render";
import ErrorPage from "./error_page/ErrorPage";

export default function Router() {
  return (
    <BrowserRouter basename="/">
      <NavBar />
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="about" element={<APropos />} />
        <Route path="logement/:routeId" element={<AnnonceRender />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}
