import logo from "./logo.svg";
import "./App.css";
import Nav from "./Nav";
import Home from "./Pages/Home/Home";
import Contact from "./Pages/Contact/Contact";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route index element={<Home />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
