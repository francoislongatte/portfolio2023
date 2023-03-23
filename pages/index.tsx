import React from "react";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import LineTime from "./components/LineTime";
import Menu from "./components/Menu";
import ScrollSection from "./components/Scrollsection";

export default function Home() {
  return (
    <div>
      <div className="w-full top-0 z-10 fixed">
        <LineTime />
        
      </div>
      <Menu />

      <ScrollSection>
        <Hero />
      </ScrollSection>
      <div className="w-full bottom-0 z-10 fixed">
      <Footer />
      </div>
      
    </div>
  );
}
