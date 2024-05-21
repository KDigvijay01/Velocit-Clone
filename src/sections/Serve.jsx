import { motion } from "framer-motion";

import ScrollTrigger from "gsap/ScrollTrigger";
import React, { useLayoutEffect, useRef } from "react";
import styled from "styled-components";
import gsap from "gsap";

const data = [
  {
    img: "https://velocitai.com/wp-content/uploads/2022/06/BFSI.png",
    id: 1,
    title: "BFSI",
  },
  {
    img: "https://velocitai.com/wp-content/uploads/2022/06/Telecom.png",
    id: 2,
    title: "Telecom",
  },

  {
    img: "https://velocitai.com/wp-content/uploads/2022/06/eCommerce.png",
    id: 3,
    title: "E-Commerce",
  },
];

const Section = styled.section`
  min-height: 100vh;
  /* height: auto; */
  width: 100%;
  margin: 0 auto;
  /* height: 300vh; */

  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;
  /* background-color: ${(props) => props.theme.text}; */
`;

const Overlay = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 30vw;
  height: 90vh;
  box-shadow: 0 0 0 5vw ${(props) => props.theme.text};
  border: 3px solid black;

  z-index: 11;

  @media (max-width: 70em) {
    width: 40vw;

    height: 80vh;
  }

  @media (max-width: 64em) {
    width: 50vw;
    box-shadow: 0 0 0 60vw ${(props) => props.theme.text};

    height: 80vh;
  }
  @media (max-width: 48em) {
    width: 60vw;

    height: 80vh;
  }
  @media (max-width: 30em) {
    width: 80vw;

    height: 60vh;
  }
`;

const Container = styled.div`
  position: absolute;
  top: 0%;
  left: 50%;
  transform: translate(-50%, 0%);
  width: 25vw;
  height: auto;
  /* background-color: yellow; */

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 64em) {
    width: 30vw;
  }

  @media (max-width: 48em) {
    width: 40vw;
  }

  @media (max-width: 30em) {
    width: 60vw;
  }
`;

const Title = styled(motion.h1)`
  font-size: ${(props) => props.theme.fontxxxl};
  font-family: "Kaushan Script";
  font-weight: 300;
  /* text-transform: capitalize; */
  color: ${(props) => props.theme.body};
  text-shadow: 1px 1px 1px ${(props) => props.theme.text};

  position: absolute;
  top: 2rem;
  left: 1rem;
  z-index: 15;

  @media (max-width: 64em) {
    font-size: ${(props) => props.theme.fontxxl};
  }
  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontxl};
  }
`;
const Text = styled.div`
  width: 20%;
  font-size: ${(props) => props.theme.fontlg};
  font-weight: 300;
  position: absolute;
  padding: 2rem;
  top: 0;
  right: 0;
  z-index: 11;

  @media (max-width: 48em) {
    display: none;
  }
`;

const Item = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 5rem 0;

  h2 {
  }

  img {
    width: 100%;
    height: auto;
    z-index: 5;
  }
`;
const Photos = ({ item, key }) => {
  return (
    <Item key={key}>
      <img width="400" height="600" src={item.img} alt={item.title} />
      <h2>{item.title}</h2>
    </Item>
  );
};

const NewArrival = () => {
  gsap.registerPlugin(ScrollTrigger);
  const ref = useRef(null);

  const ScrollingRef = useRef(null);

  useLayoutEffect(() => {
    let element = ref.current;

    let scrollingElement = ScrollingRef.current;
    let t1 = gsap.timeline();
    setTimeout(() => {
      let mainHeight = scrollingElement.scrollHeight;
      element.style.height = `calc(${mainHeight / 4}px)`;
      t1.to(element, {
        scrollTrigger: {
          trigger: element,
          start: "top top",
          end: "bottom+=100% top-=100%",
          scroller: ".app", //locomotive-scroll
          scrub: 1,
          pin: true,
          // markers: true,
        },
        ease: "none",
      });

      t1.fromTo(
        scrollingElement,
        {
          y: "0",
        },
        {
          y: "-100%",
          scrollTrigger: {
            // id: `section-${index + 1}`,
            trigger: scrollingElement,
            start: "top top",
            end: "bottom top",
            scroller: ".app",
            scrub: 1,
            // markers: true,
          },
        }
      );

      ScrollTrigger.refresh();
    }, 1000);
    ScrollTrigger.refresh();

    return () => {
      t1.kill();
      ScrollTrigger.killAll();
    };
  }, []);

  return (
    <Section ref={ref} id="fixed-target" className="new-arrival">
      <Overlay />

      <Title
        data-scroll
        data-scroll-speed="-2"
        data-scroll-direction="horizontal"
      >
        Industries We Serve
      </Title>

      <Container ref={ScrollingRef}>
        {data.map((it, index) => (
          <Photos item={it} key={index}/>
        ))}
      </Container>

      <Text data-scroll data-scroll-speed="-4">
        Velocitai Clone offers Telecom and Wireless Network services, supporting
        technologies like 5G, LTE, VoLTE, and more. 
        <br />
        <br />
        Our cost-effective solutions
        align with clients' goals, trusted by major operators and OEMs.
        <br />
        <br />
        We also provide eCommerce solutions for retailers transitioning online and
        customized banking software, led by a skilled team of experts.
      </Text>
    </Section>
  );
};

export default NewArrival;
