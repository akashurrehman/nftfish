import { Route, Routes } from 'react-router-dom';
import ErrorPage from './components/ErrorPage';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Pages/Home';
import Privacy from './components/Pages/Privacy';
import Spacing from './components/Spacing';

function App() {
  return (
    <>
      <Header />
      <Spacing lg='80' md='80' />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
