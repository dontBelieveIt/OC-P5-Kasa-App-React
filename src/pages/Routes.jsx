import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavBar from "../components/NavBar";
import Home from "./home/Home";
import APropos from "./a_propos/APropos";
import AnnonceIndex from "./annonce/Annonce_Index";
import ErrorPage from "./error_page/ErrorPage";

export default function Router() {
  return (
    <BrowserRouter basename="/">
      <NavBar />
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="about" element={<APropos />} />
        <Route path="logement/:routeId" element={<AnnonceIndex />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}
