import Head from "next/head";
import { useEffect } from "react";
import NavBar from "../components/Nav/NavBar";
import Hero from "../components/Hero/Hero";
import Sidebar from "../components/SideBar/SideBar";
import Contact from "../components/Sections/Contact/Contact";
import Footer from "../components/Footer/Footer";
import AboutMe from "../components/Sections/AboutMe/AboutMe";
import Education from "../components/Sections/Education/Education";
import Projects from "../components/Sections/Projects/Projects";
import useWindowWidth from "../hooks/useWindowWidth";
import { useStateStore } from "../store/useStore";

export default function Home() {

  /* State */
  const setTheme = useStateStore(state => state.setTheme);
  const theme = useStateStore(state => state.theme);

  const windowWidth = useWindowWidth();

  
  useEffect(() => {
    
    if (theme === 'dark' ){
      document.documentElement.classList.add('dark');
    }else{
      document.documentElement.classList.remove('dark');
    }
    
  }, [theme]);

  return (
    <div className="dark:bg-black">
      <Head>
        <title key={'title'}>Anthony Chablov</title>
      </Head>
      <div className="bg-zinc-100 ">
        <NavBar/>
        <div className="h-fit px-10 py-8 mx-auto max-w-5xl ">
          <Hero/>
          <AboutMe/>
          <Projects/>
          <Education/>
          <Contact/>
          <Footer/>
        </div>
      </div>
      {
        windowWidth >= 1280 && (
          <>
            <Sidebar anchor={'left'} mode={'icons'}/>
            <Sidebar anchor={'right'} mode={'email'}/>
          </>
        )
      }
    </div>
  );
}
