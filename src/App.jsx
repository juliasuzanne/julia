import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./Home";
import { Navbar } from "./Navbar";
import { Header } from "./Header";
import { Kate } from "./Kate";
import "./CSS/App.css";
import { FamilyHistory } from "./FamilyHistory";
import { Tarot } from "./Tarot";
import { Test } from "./Test";
import { Bootcamp } from "./Bootcamp";
import { UnityGame } from "./UnityGame";
import { Snake } from "./Snake/Snake";
import { Websites } from "./Websites";
import { Paintings } from "./Paintings";
import { Minigames } from "./Minigames";
import { Fabric } from "./Fabric";
import { Styled } from "./Styled";
import { WorkJournal } from "./Blog/WorkJournal";
import { ThesisBlog } from "./Blog/ThesisBlog";
import { Riyl } from "./RIYL/Riyl";
import { RiylBackend } from "./RIYL/RiylBackend";
import { ThesisDraft } from "./ThesisDraft";
import { ThesisPost } from "./Blog/ThesisPost";
import { GamePortfolio } from "./Portfolio/GamePortfolio";
import { WebDevPortfolio } from "./Portfolio/WebDevPortfolio";
import Snowfall from "react-snowfall";

function App() {
  return (
    <div>
      <Snowfall
        // Changes the snowflake color
        color="white"
        // Applied to the canvas element
        style={{ zIndex: 300 }}
        // Controls the number of snowflakes that are created (default 150)
        snowflakeCount={50}
      />

      <BrowserRouter>
        <Header></Header>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/test" element={<Test />} />
          <Route path="/unity" element={<UnityGame />} />
          <Route path="/bootcamp" element={<Bootcamp />} />
          <Route path="/snake" element={<Snake />} />
          <Route path="/kate" element={<Kate />} />
          <Route path="/tarot" element={<Tarot />} />
          <Route path="/family" element={<FamilyHistory />} />
          <Route path="/paintings" element={<Paintings />} />
          <Route path="/workjournal" element={<WorkJournal />} />
          <Route path="/thesisblog" element={<ThesisPost />} />
          <Route path="/thesispost" element={<ThesisPost />} />
          <Route path="/gameportfolio" element={<GamePortfolio />} />
          <Route path="/webdevportfolio" element={<WebDevPortfolio />} />

          <Route path="/riyl" element={<Riyl />} />
          <Route path="/riylbackend" element={<RiylBackend />} />
          <Route path="/draft" element={<ThesisDraft />} />

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
