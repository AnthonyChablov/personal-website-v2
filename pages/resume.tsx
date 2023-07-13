import React,{useEffect} from 'react'
import Head from "next/head";
import NavBar from '../components/Nav/NavBar';
import { useStateStore } from "../store/useStore";
import { LazyMotion, domAnimation } from 'framer-motion';
import useWindowWidth from "../hooks/useWindowWidth";
import Sidebar from '../components/Sidebar/Sidebar';
import PDFEmbed from '../components/PDFEmbed/PDFEmbed';

import myResume from '../public/resume/resume.pdf';

const resume = () => {

    const theme = useStateStore(state => state.theme);
    const setTheme = useStateStore(state => state.setTheme);

    useEffect(() => {

        const themeMode = localStorage.getItem("theme-mode-ac");
    
        if (theme === 'dark' || themeMode === 'dark' ) {
          document.documentElement.classList.add('dark');
          setTheme('dark');
        }else{
          document.documentElement.classList.remove('dark');
          setTheme('light');
        }
    
      }, [theme]);

    const windowWidth = useWindowWidth();
    return (
        <>
        <LazyMotion features={domAnimation}>
            <div className="dark:bg-black">
                <Head>
                    <title key={'title'}>Anthony Chablov</title>
                </Head>
                <div className="bg-zinc-100 dark:bg-slate-800 ">
                    <NavBar/>
                    <div className="h-fit px-10 py-8 mx-auto max-w-5xl ">
                        <PDFEmbed pdfUrl={myResume} />
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
        </LazyMotion>
        </>
    )
}

export default resume;