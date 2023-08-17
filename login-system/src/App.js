import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import LoginSuccessful from "./components/LoginSuccessful";
import LoginUnsuccessful from "./components/LoginUnsuccessful";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/successful" element={<LoginSuccessful />} />
        <Route path="/unsuccessful" element={<LoginUnsuccessful />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
