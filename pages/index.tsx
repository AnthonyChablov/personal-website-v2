import Head from "next/head";
import { useRef, useEffect } from "react";
import { Power3 } from "gsap";
import NavBar from "../components/Navbar/NavBar";

export default function Home() {



  return (
    <>
      <Head>
        <title key={'title'}>Anthony Chablov</title>
      </Head>
      <div className="h-screen bg-zinc-100">
        <NavBar/>
        123
      </div>
    </>
  );
}
