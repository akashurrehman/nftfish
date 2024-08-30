import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Pages/Home";
import Spacing from "./components/Spacing";

function App() {
  return (
    <> 
      <Header />
      <Spacing lg='80' md='80' />
      <Home />
      <Footer />
    </>
  );
}

export default App;
