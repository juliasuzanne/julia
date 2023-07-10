import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./Home";
import { Navbar } from "./Navbar";
import { Header } from "./Header";
import "./App.css";
import { FamilyHistory } from "../FamilyHistory";
import { Footer } from "./Footer";
import { Tarot } from "./Tarot";

function App() {
  return (
    <div>
      <Header></Header>
      <Navbar></Navbar>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tarot" element={<Tarot />} />
          <Route path="/family" element={<FamilyHistory />} />
        </Routes>
      </BrowserRouter>
      <Footer></Footer>
    </div>
  );
}

export default App;
