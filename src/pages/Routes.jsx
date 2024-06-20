import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavBar from "../components/NavBar";
import Home from "./home/Home";
import APropos from "./a_propos/APropos";
import FicheLogIndex from "./fiche_logement/FicheLogement_index";
import ErrorPage from "./error_page/ErrorPage";

export default function Router() {
  return (
    <BrowserRouter basename="/">
      <NavBar />
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="about" element={<APropos />} />
        <Route path="logement/:routeId" element={<FicheLogIndex />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}
