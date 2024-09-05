import { Route, Routes } from 'react-router-dom';
import ErrorPage from './components/ErrorPage';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Pages/Home';
import Dashboard from './components/Pages/Dashboard/Dashboard';
import Privacy from './components/Pages/Privacy';
import Spacing from './components/Spacing';
import Login from './components/Pages/Login/Login';

function App() {
  return (
    <>
      <Header />
      <Spacing lg='80' md='80' />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
