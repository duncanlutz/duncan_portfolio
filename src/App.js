import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import VidWork from "./pages/VidWork";
import "./css/App.css";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/video" element={<VidWork />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
