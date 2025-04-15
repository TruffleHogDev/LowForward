import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";

import ScrollToTop from "./ScrollToTop.jsx";
import Navbar from "./Navbar.jsx";

import Home from "./Home.jsx";
import Resources from "./Resources.jsx";
import Concepts from "./Concepts.jsx";
import Support from "./Support.jsx";
import Preface from "./Preface.jsx";
import Antiairs from "./Antiairs.jsx";
import Bnbs from "./Bnbs.jsx";
import NotFound from "./NotFound.jsx";
import Confirms from "./MeatiesAndConfirms.jsx";
import StrikeThrow from "./StrikeThrow.jsx";
import Reversals from "./Reversals.jsx";
import Defense from "./Defense.jsx";
import Nothing from "./Nothing.jsx";
import SpaceControl from "./SpaceControl.jsx";
import Pokes from "./Pokes.jsx";
import NewTech from "./NewTech.jsx";

function App() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <>
      <ScrollToTop />
      {!isHome && <Navbar />}
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/concepts" element={<Concepts />} />
          <Route path="/support" element={<Support />} />
          <Route path="/preface" element={<Preface />} />
          <Route path="/antiairs" element={<Antiairs />} />
          <Route path="/bnbs" element={<Bnbs />} />
          <Route path="/meaties_and_confirms" element={<Confirms />} />
          <Route path="/strikethrow" element={<StrikeThrow />} />
          <Route path="/reversals" element={<Reversals />} />
          <Route path="/defense" element={<Defense />} />
          <Route path="/low_commitment_neutral" element={<Nothing />} />
          <Route path="/space_control" element={<SpaceControl />} />
          <Route path="/pokes" element={<Pokes />} />
          <Route path="/new_tech" element={<NewTech />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
