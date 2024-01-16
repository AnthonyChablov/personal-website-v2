import Head from "next/head";
import { useEffect } from "react";
import NavBar from "../components/Nav/NavBar";
import Hero from "../components/Hero/Hero";
import Contact from "../components/Sections/Contact/Contact";
import Footer from "../components/Footer/Footer";
import AboutMe from "../components/Sections/AboutMe/AboutMe";
import Education from "../components/Sections/Education/Education";
import Projects from "../components/Sections/Projects/Projects";
import useWindowWidth from "../hooks/useWindowWidth";
import { useStateStore } from "../store/useStore";
import { LazyMotion, domAnimation } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import SideBar from "../components/SideBar/SideBar";

export default function Home() {
  /* State */
  const theme = useStateStore((state) => state.theme);
  const setTheme = useStateStore((state) => state.setTheme);
  /* Hooks */
  const windowWidth = useWindowWidth();

  useEffect(() => {
    const themeMode = localStorage.getItem("theme-mode-ac");

    if (theme === "dark" || themeMode === "dark") {
      document.documentElement.classList.add("dark");
      setTheme("dark");
    } else {
      document.documentElement.classList.remove("dark");
      setTheme("light");
    }
  }, [theme]);

  return (
    <>
      <LazyMotion features={domAnimation}>
        <div className="dark:bg-black">
          <Head>
            <title key={"title"}>Anthony Chablov</title>
          </Head>
          <div className="bg-zinc-100 dark:bg-slate-800 ">
            <NavBar />
            <div className="h-fit px-10 py-8 mx-auto max-w-5xl ">
              <Hero />
              <AboutMe />
              <Projects />
              <Education />
              <Contact />
              <Footer />
            </div>
          </div>
          {windowWidth >= 1280 && (
            <>
              <SideBar anchor={"left"} mode={"icons"} />
              <SideBar anchor={"right"} mode={"email"} />
            </>
          )}
        </div>
      </LazyMotion>
    </>
  );
}
