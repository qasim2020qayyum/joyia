import React from "react";
import Header from "./Header";
import MainSlider from "./MainSlider";
import Services from "./Services";
import Section from "./Section";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Footer from "./Footer";

function Home() {
  return (
    <div>
      
      <MainSlider /> 
      <Services />
      <Section />
      <Section2 />
      <Section3 />
      
    </div>
  );
}

export default Home;
