import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./Home";
import { Navbar } from "./Navbar";
import { Header } from "./Header";
import { Kate } from "./Kate";
import "./App.css";
import { FamilyHistory } from "./FamilyHistory";
import { Tarot } from "./Tarot";
import { Bootcamp } from "./Bootcamp";
import { UnityGame } from "./UnityGame";
import { Snake } from "./Snake/Snake";

function App() {
  return (
    <div>
      <Header></Header>
      <Navbar></Navbar>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/unity" element={<UnityGame />} />
          <Route path="/bootcamp" element={<Bootcamp />} />
          <Route path="/snake" element={<Snake />} />
          <Route path="/kate" element={<Kate />} />
          <Route path="/tarot" element={<Tarot />} />
          <Route path="/family" element={<FamilyHistory />} />
        </Routes>
      </BrowserRouter>
      {/* <Footer></Footer> */}
    </div>
  );
}

export default App;
