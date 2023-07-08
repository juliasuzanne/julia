import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./Home";
import { Navbar } from "./Navbar";
import "./App.css";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
