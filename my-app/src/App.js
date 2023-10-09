import Trainer from "./components/Trainer";
import Animals from "./components/Animals";
import EmailSection from "./components/EmailSection";
import Home from "./components/Home";
import Faq from "./components/Faq";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import News from "./components/News";
import React, { useState } from "react";
import ToolBar from "./components/ToolBar";
import "./components/FontAwsome";
import {
  Routes,
  Route,
} from "react-router-dom";
import Login from "./components/Login";


function App() {
  const [showToolBar, setShowToolBar] = useState(true);

  const handleNavigation = () => {
    setShowToolBar(false);
  };
  return (
    <div className="App">
      <Navigation onNavigate={handleNavigation}/>

      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/trainer" element={<Trainer />} />
          <Route path="/animals" element={<Animals />} />
          <Route path="/news" element={<News />} />
          <Route path="/faq" element={<Faq />} />

          <Route path="/login" element={<Login/>}/>
      </Routes>

      {showToolBar && <ToolBar />}
      <Footer />

    </div>
  );
}

export default App;
