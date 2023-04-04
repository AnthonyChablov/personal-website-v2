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

export default function Home() {

  return (
    <>
      <Head>
        <title key={'title'}>Anthony Chablov</title>
      </Head>
      <div className="bg-zinc-100 ">
        <div className="h-fit px-20 py-10 mx-auto">
          <NavBar/>
          <Hero/>
          <AboutMe/>
          <Projects/>
          <Education/>
          <Contact/>
          <Footer/>
        </div>
      </div>
      <Sidebar anchor={'left'} mode={'icons'}/>
      <Sidebar anchor={'right'} mode={'email'}/>
    </>
  );
}
