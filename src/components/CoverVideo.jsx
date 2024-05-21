import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";

import MainVideo from "../assets/connectivity_3_ed.mp4";

const VideoContainer = styled.section`
  width: 100%;
  height: 100vh;
  position: relative;
  video {
    width: 100%;
    height: 100vh;
    object-fit: cover;
    object-position: center 24%;

    @media (max-width: 48em) {
      object-position: center 10%;
    }
    @media (max-width: 30em) {
      object-position: center 50%;
    }
  }
`;

const DarkOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
  background-color: ${(props) => `rgba(${props.theme.bodyRgba},0.6)`};
`;

const Title = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 5;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.text};

  div {
    display: flex;
    flex-direction: row;
  }

  h1 {
    font-family: "Kaushan Script";
    font-size: ${(props) => props.theme.fontxxxl};

    text-shadow: 1px 1px 1px ${(props) => props.theme.body};

    @media (max-width: 30em) {
      /* font-size: ${(props) => props.theme.fontxxxl}; */
      font-size: calc(4rem + 8vw);
    }
  }
  h2 {
    font-size: ${(props) => props.theme.fontmd};
    font-family: "Sirin Stencil";
    font-weight: 500;
    text-shadow: 1px 1px 1px ${(props) => props.theme.body};
    margin: 0 auto;

    text-transform: capitalize;

    @media (max-width: 30em) {
      font-size: ${(props) => props.theme.fontsm};
      /* font-size: calc(5rem + 8vw); */
      margin-top: -1.5rem;
    }
  }
`;

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 5, // 2
      staggerChildren: 0.3,
    },
  },
};

const item = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

const containerVariant = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      // duration: 1,
      delay: 0.5,
      ease: "easeInOut",
      when: "beforeChildren",
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  initial: {
    opacity: 0,
    x: -100,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 50,
      mass: 0.2,
      damping: 8,
      ease: "easeInOut",
    },
  },
};

const itemVariantsTwo = {
  initial: {
    opacity: 0,
    y: -100,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      // mass: 0.2,
      stiffness: 80,
      damping: 20,
      ease: "easeInOut",
    },
  },
};

const CoverVideo = () => {
  return (
    <VideoContainer data-scroll>
      <DarkOverlay />

      <Title variants={containerVariant} initial="initial" animate="animate">
        <div>
          {"REVOLUTIONIZING".split("").map((it, index) => (
            <motion.h1
              variants={itemVariants}
              data-scroll
              data-scroll-delay={1 - index * 0.03}
              data-scroll-speed="4"
              key={index}
            >
              {it}
            </motion.h1>
          ))}
        </div>

        <div>
          {"CONNECTIVITY".split("").map((it, index) => (
            <motion.h1
              variants={itemVariants}
              data-scroll
              data-scroll-delay={1 - index * 0.04}
              data-scroll-speed="2"
              key={index}
            >
              {it}
            </motion.h1>
          ))}
        </div>

        <div style={{ display: "flex"}}>
          {"Your Technology Service Partner".split(" ").map((it, index) => (
            <motion.h2
              style={{ margin:"0 3px"}}
              variants={itemVariantsTwo}
              data-scroll
              data-scroll-delay={0.12 - index * 0.03}
              data-scroll-speed="1"
              key={index}
            >{` ${it} `}</motion.h2>
          ))}
        </div>
      </Title>

      <video src={MainVideo} type="video/mp4" autoPlay muted loop />
    </VideoContainer>
  );
};

export default CoverVideo;
