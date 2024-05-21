import { motion } from 'framer-motion';
import React from 'react';
import styled from 'styled-components';

const Container = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
touch-action: none;
overflow: hidden;
  width: 100vw;
  height: 100vh;

  z-index: 6;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: black;

  width: 100%;

  @media (max-width: 48em) {
    svg{
      width: 20vw;
    }
  }

  svg {
    width: 10vw;

    height: auto;
    overflow: visible;
    stroke-linejoin: round;
    stroke-linecap: round;
    g {
      path {
        stroke: #fff;
      }
    }
  }
`;

const pathVariants = {
  hidden: {
    opacity: 0,
    pathLength: 0,
  },
  visible: {
    opacity: 1,
    pathLength: 1,

    transition: {
      duration: 2,
      // yoyo: Infinity,
      ease: 'easeInOut',
    },
  },
};
const textVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,

    transition: {
      duration: 1,
      // yoyo: Infinity,
      repeatType: 'fade',
      ease: 'easeInOut',
    },
  },
};

const Text = styled(motion.span)`
  font-size: ${(props) => props.theme.fontxl};
  color: ${(props) => props.theme.text};
  padding-top: 0.5rem;

  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontlg};

  }
`;

const Loader = () => {
  return (
    <Container
      initial={{ y: 0, opacity: 1 }}
      exit={{ y: "100%", opacity: 0}}
      transition={{ duration: 2 }}
    >
      {/* <img src={star} alt="Wibe Fashion" /> */}
      {/* <svg
        xmlns="http://www.w3.org/2000/svg"
        enableBackground="new 0 0 24 24"
        height="48px"
        viewBox="0 0 24 24"
        width="48px"
        fill="none"
      >
        <g>
          <motion.path
            variants={pathVariants}
            initial="hidden"
            animate="visible"
            d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"
          />
        </g>
      </svg> */}

      <svg
          width="200"
          height="200"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
        >
          <defs>
            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stop-color="rgba(114, 10, 8, 1)" />
              <stop offset="100%" stop-color="rgba(178, 152, 40, 0.99)" />
            </linearGradient>

            <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stop-color="rgba(132, 73, 32, 1)" />
              <stop offset="100%" stop-color="rgba(40, 40, 178, 0.99)" />
            </linearGradient>

            <clipPath id="clipV">
              <path d="M50 30 L75 100 L100 30" />
            </clipPath>

            <clipPath id="clipA">
              <path d="M50 100 L75 30 L100 100" />
            </clipPath>
          </defs>

          <rect
            width="200"
            height="200"
            stroke="url(#gradient1)"
            clip-path="url(#clipV)"
          />
          <rect
            width="200"
            height="200"
            stroke="url(#gradient2)"
            clip-path="url(#clipA)"
          />

          <motion.path
           variants={pathVariants}
              initial="hidden"
              animate="visible"
            d="M50 30 L75 100 L100 30"
            stroke="url(#gradient1)"
            stroke-width="8"
            fill="none"
            stroke-linejoin="round"
            stroke-linecap="round"
          />
          <motion.path
           variants={pathVariants}
              initial="hidden"
              animate="visible"
            d="M50 100 L75 30 L100 100"
            stroke="url(#gradient2)"
            stroke-width="8"
            fill="none"
            stroke-linejoin="round"
            stroke-linecap="round"
          />
        </svg>

      <Text variants={textVariants} initial="hidden" animate="visible">
        Velocitai Clone
      </Text>
    </Container>
  );
};

export default Loader;