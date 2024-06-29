import Router from "./pages/Routes";
import { Suspense } from "react";

import "./Styles.scss";

import Footer from "./components/Footer/Footer";
import LoadingPage from "./components/Loading";

import { AnnonceContextProvider } from "./pages/annonce/Context_Annonce";

export default function App() {
  return (
    <>
      <div className="App">
        <Suspense fallback={<LoadingPage />}>
          <AnnonceContextProvider>
            <Router />
          </AnnonceContextProvider>
        </Suspense>
      </div>
      <Footer />
    </>
  );
}
