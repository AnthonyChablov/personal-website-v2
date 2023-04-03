import Head from "next/head";
import { useRef, useEffect } from "react";
import { Power3 } from "gsap";
import NavBar from "../components/Nav/NavBar";
import Hero from "../components/Hero/Hero";
import About from "../components/About/About";
import Sidebar from "../components/SideBar/SideBar";
import Divider from "@mui/material/Divider";
import Footer from "../components/Footer/Footer";

export default function Home() {

  return (
    <>
      <Head>
        <title key={'title'}>Anthony Chablov</title>
      </Head>
      <div className="bg-zinc-100">
        <div className="h-fit px-20 py-10 mx-auto">
          <NavBar/>
          <Hero/>
          <Divider className="w-4/12 mx-auto bg-zinc-300 mt-24 mb-24"/>
          <Footer/>
        </div>
      </div>
      <Sidebar anchor={'left'} mode={'icons'}/>
      <Sidebar anchor={'right'} mode={'email'}/>
      
    </>
  );
}
