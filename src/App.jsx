import Router from "./pages/Routes";
import { Suspense } from "react";

import "./Styles.scss";

import Footer from "./components/Footer";
import LoadingPage from "./components/Loading";

import { AnnonceContextProvider } from "./pages/annonce/Context_Annonce";

export default function App() {
  document.title = 'Kasa: Location immobilière'
  return (
    <>
      <div className="App">
        <Suspense fallback={<LoadingPage />} />
        <AnnonceContextProvider>
          <Router />
        </AnnonceContextProvider>
      </div>
      <Footer />
    </>
  );
}
