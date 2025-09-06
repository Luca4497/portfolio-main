import LandingPage from "./pages/LandingPage"
import cvContext from "./context/cvContext"
import { useRef } from "react";


import ScrollToTopButton from "./components/scrollToTopButton/ScrollToTopBtn";
export default function App() {

  const sections = {
    home: useRef(null),
    experience: useRef(null),
    education: useRef(null),
    portfolio: useRef(null),
    service: useRef(null),
  };

  const navLink = [
    { id: 1, link: 'HOME', ref: sections.home },
    { id: 2, link: 'EXPERIENCE', ref: sections.experience },
    { id: 3, link: 'EDUCATION', ref: sections.education },
    { id: 4, link: 'PORTFOLIO', ref: sections.portfolio },
    // { id: 5, link: 'SERVIZI', ref: sections.service },
  ];

  const scrollToSection = (elementRef) => {
    elementRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <cvContext.Provider value={{ navLink, sections, scrollToSection }}>
      <LandingPage />
      {/* <AccordionItem /> */}
      <ScrollToTopButton />
    </cvContext.Provider>

  )
}