import "./App.css";
import Home from "./Components/HomePage/Home";
import TopBanner from './Components/TopBanner';
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <TopBanner />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<h1>Not found!</h1>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
