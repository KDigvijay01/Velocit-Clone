import "locomotive-scroll/dist/locomotive-scroll.css";
import React, { useEffect, useRef, useState } from 'react';
import { LocomotiveScrollProvider } from 'react-locomotive-scroll';
import ScrollTriggerProxy from "./components/ScrollProxy";
import { AnimatePresence } from "framer-motion";
import GlobalStyles from "./styles/GlobalStyles";
import { ThemeProvider } from "styled-components";
import { dark } from "./styles/Themes";
import Home from "./sections/Home";
import About from "./sections/About";
import Shop from "./sections/Shop";
import Marquee from "./sections/Marquee";
import NewArrival from "./sections/NewArrival";
import Footer from "./sections/Footer";
import Loader from "./components/Loader";



function App() {

  const containerRef = useRef(null)
  const [Loaded, setLoaded] = useState(false);


  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 3000);
  }, []);



  return (

    <>
    <GlobalStyles/>
    <ThemeProvider theme={dark}>
    <LocomotiveScrollProvider
    options={{
      smooth: true,
    }}
    watch={[]}
    containerRef={containerRef}
    >
    <AnimatePresence>{Loaded ? null : <Loader />}</AnimatePresence>
    <main data-scroll-container className="app" ref={containerRef} >
        <ScrollTriggerProxy/>
        <AnimatePresence mode="wait">
        {Loaded ? null : <Loader />}
            <Home key="home" />
            <About ke="about" />
            <Shop key="shop" />
            <Marquee key="marquee" />
            <NewArrival key="new arrival" />
            <Footer key="footer" />
        </AnimatePresence>
    </main>

    </LocomotiveScrollProvider>
    </ThemeProvider>
</>  
  );
}

export default App;
