import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./Home";
import { Navbar } from "./Navbar";
import { Header } from "./Header";
import { HomeIcon } from "./HomeIcon";
import { Kate } from "./Kate";
import "./CSS/App.css";
import { FamilyHistory } from "./FamilyHistory";
import { Tarot } from "./Tarot";
import { Tabs } from "./Tabs";
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
import { EmailForm } from "./EmailForm";
import { ThesisBlog } from "./Blog/ThesisBlog";
import { Riyl } from "./RIYL/Riyl";
import { RiylBackend } from "./RIYL/RiylBackend";
import { ThesisDraft } from "./ThesisDraft";
import { ThesisPost } from "./Blog/ThesisPost";
import { GamePortfolio } from "./Portfolio/GamePortfolio";
import { WebDevPortfolio } from "./Portfolio/WebDevPortfolio";
import { Snowflakes } from "./Snowflakes";
import { ContactCircle } from "./ContactCircle";
import SelectTest from "./Blog/SelectTest";
import { HomeTest } from "./HomeTest";
import { MinimalHome } from "./MinimalHome";
import { ThesisArtWalk } from "./ThesisArtWalk";
import { SimpleFooter } from "./SimpleFooter";

function App() {
  return (
    <div id="total">
      {/* <Snowfall
        // Changes the snowflake color
        color="green"
        // Applied to the canvas element
        style={{ zIndex: 300 }}
        // Controls the number of snowflakes that are created (default 150)
        snowflakeCount={12}
      />
      <Snowfall
        // Changes the snowflake color
        color="blue"
        // Applied to the canvas element
        style={{ zIndex: 300 }}
        // Controls the number of snowflakes that are created (default 150)
        snowflakeCount={5}
      /> */}
      <BrowserRouter>
        <Navbar></Navbar>
        <Header></Header>
        {/* <HomeIcon></HomeIcon>
        {/* <Tabs></Tabs> */}
        <br></br>
        <br></br>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/emailtest" element={<EmailForm />}></Route>
          <Route path="/hometest" element={<HomeTest />}></Route>
          <Route path="/circle" element={<ContactCircle />} />
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
          <Route path="/select" element={<SelectTest />} />
          <Route path="/tabs" element={<Tabs />} />
          <Route path="/riyl" element={<Riyl />} />
          <Route path="/riylbackend" element={<RiylBackend />} />
          <Route path="/draft" element={<ThesisDraft />} />
          <Route path="/currentgame" element={<ThesisArtWalk />} />

          {/* <Route path="/newtarotcard" element={<NewCard />} /> */}
          <Route path="/minigames" element={<Minigames />} />
          <Route path="/ayab" element={<Fabric />} />
          <Route path="/csstest" element={<Styled />} />
          <Route path="/websites" element={<Websites />} />
        </Routes>
      </BrowserRouter>
      <SimpleFooter />{" "}
    </div>
  );
}

export default App;
