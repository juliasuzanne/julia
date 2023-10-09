import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./Home";
import { Navbar } from "./Navbar";
import { Header } from "./Header";
import { Kate } from "./Kate";
import "./CSS/App.css";
import { FamilyHistory } from "./FamilyHistory";
import { Tarot } from "./Tarot";
import { Bootcamp } from "./Bootcamp";
import { UnityGame } from "./UnityGame";
import { Snake } from "./Snake/Snake";
import { Websites } from "./Websites";
import { Paintings } from "./Paintings";
import { Minigames } from "./Minigames";
import { Fabric } from "./Fabric";
import { Styled } from "./Styled";
import { WorkJournal } from "./WorkJournal";
import { NewCard } from "./NewCard";
import { ThesisBlog } from "./ThesisBlog";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header></Header>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/unity" element={<UnityGame />} />
          <Route path="/bootcamp" element={<Bootcamp />} />
          <Route path="/snake" element={<Snake />} />
          <Route path="/kate" element={<Kate />} />
          <Route path="/tarot" element={<Tarot />} />
          <Route path="/family" element={<FamilyHistory />} />
          <Route path="/paintings" element={<Paintings />} />
          <Route path="/workjournal" element={<WorkJournal />} />
          <Route path="/thesisblog" element={<ThesisBlog />} />

          {/* <Route path="/newtarotcard" element={<NewCard />} /> */}
          <Route path="/minigames" element={<Minigames />} />
          <Route path="/ayab" element={<Fabric />} />
          <Route path="/csstest" element={<Styled />} />
          <Route path="/websites" element={<Websites />} />
        </Routes>
      </BrowserRouter>
      {/* <Footer></Footer> */}
    </div>
  );
}

export default App;
