import React from "react";
import Bg from "./component/bg";
import First from "./component/fullpage/FirstSection";
import AboutSection from "./component/fullpage/AboutSection";
import SkillSection from "./component/fullpage/SkillSection";
import Nav from "./component/navigation/nav";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Bg className="bg" />
      <Nav/>
      <First />
      <AboutSection />
      <SkillSection />
    </div>
  );
}

export default App;
