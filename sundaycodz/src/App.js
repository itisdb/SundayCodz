import Routes from "./auth/routes/Routesmain";
import Header from "./core/Header";
import Footer from "./core/Footer";
import "./core/styles.css"

function App() {
  return (
    <>
      <Header />
      <Routes />
      <Footer />
    </>
  );
}

export default App;
