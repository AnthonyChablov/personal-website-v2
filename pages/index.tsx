import Head from "next/head";
import { useRef, useEffect } from "react";
import { Power3 } from "gsap";
import { gsap } from "gsap";
import NavBar from "../components/Nav/NavBar";
import Hero from "../components/Hero/Hero";
import Sidebar from "../components/SideBar/SideBar";
import Contact from "../components/Sections/Contact/Contact";
import Footer from "../components/Footer/Footer";
import AboutMe from "../components/Sections/AboutMe/AboutMe";
import Education from "../components/Sections/Education/Education";
import Projects from "../components/Sections/Projects/Projects";
import useWindowSize from "../hooks/useWindowDimensions";

export default function Home() {

  const windowWidth = (typeof window !== 'undefined') ? useWindowSize().width : 0;

  return (
    <>
      <Head>
        <title key={'title'}>Anthony Chablov</title>
      </Head>
      <div className="bg-zinc-100">
        <NavBar/>
        <div className="h-fit px-10 py-8 mx-auto">
          <Hero/>
          <AboutMe/>
          <Projects/>
          <Education/>
          <Contact/>
          <Footer/>
        </div>
      </div>
      {
        windowWidth >= 1250 && (
          <>
            <Sidebar anchor={'left'} mode={'icons'}/>
            <Sidebar anchor={'right'} mode={'email'}/>
          </>
        )
      }
      
    </>
  );
}
