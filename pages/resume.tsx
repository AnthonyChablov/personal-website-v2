import React, { useEffect } from "react";
import Head from "next/head";
import NavBar from "../components/Nav/NavBar";
import { useStateStore } from "../store/useStore";
import { LazyMotion, domAnimation } from "framer-motion";
import useWindowWidth from "../hooks/useWindowWidth";
import Sidebar from "../components/SideBar/Sidebar";
import PDFEmbed from "../components/PDFEmbed/PDFEmbed";
import Footer from "../components/Footer/Footer";
import myResume from "../public/resume/Anthony_Chablov_Resume.pdf";
import useScrollToTop from "../hooks/useScrollToTop";
import Header from "../components/Common/Header";

const resume = () => {
  // State
  const theme = useStateStore((state) => state.theme);
  const setTheme = useStateStore((state) => state.setTheme);

  // Hooks
  const windowWidth = useWindowWidth();
  useScrollToTop();

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
    <div>
      <LazyMotion features={domAnimation}>
        <div className="dark:bg-black ">
          <Head>
            <title key={"title"}>Anthony Chablov</title>
          </Head>
          <div className="bg-zinc-100 dark:bg-slate-800 ">
            <NavBar />
            <div className="h-fit px-10 mx-auto max-w-5xl">
              <div className="flex items-center">
                <Header title={"My CV"} />
              </div>
              <PDFEmbed pdfUrl={myResume} />
              <Footer />
            </div>
          </div>
          {windowWidth >= 1280 && (
            <>
              <Sidebar anchor={"left"} mode={"icons"} />
              <Sidebar anchor={"right"} mode={"email"} />
            </>
          )}
        </div>
      </LazyMotion>
    </div>
  );
};

export default resume;
