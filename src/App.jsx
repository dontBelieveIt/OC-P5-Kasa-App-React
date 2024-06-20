import Router from "./pages/Routes";
import "./Styles.scss";
import Footer from "./components/Footer";

export default function App() {
  {document.title = 'Kasa'}
  return (
    <>
      <div className="App">
        <Router />
      </div>
      <Footer />
    </>
  );
}
