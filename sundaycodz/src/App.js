import Routes from "./auth/routes/Routesmain";
import Header from "./core/Header";
import Footer from "./core/Footer";

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
