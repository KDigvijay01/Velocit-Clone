import { motion, useAnimation } from "framer-motion";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import styled from "styled-components";
import gsap from "gsap";
import { useLocomotiveScroll } from "react-locomotive-scroll";
import useOnScreen from "../hooks/useOnScreen";

const data = [
  {
    img: "https://velocitai.com/wp-content/uploads/2022/07/s5.jpg",
    id: 1,
    title: "RF Planning and Network Optimization",
    text: `Our operations team consists of highly-trained and qualified RF engineers with decades of combined experience from various parts of the world. Their expertise spans multi-vendor and multi-technology fields, including 5G, VoLTE, LTE, LTE-A, and CBRS.`,
  },

  {
    img: "https://velocitai.com/wp-content/uploads/2022/06/s6.jpg",
    id: 2,
    title: "Staffing",
    text: `The work process is highly transparent, with clients working closely with a dedicated account manager to meet staffing needs. The account manager remains actively involved throughout the entire engagement cycle, coordinating with all stakeholders and vendors to ensure all requirements are fulfilled.`,
  },

  {
    img: "https://velocitai.com/wp-content/uploads/2022/06/s1.jpg",
    id: 3,
    title: "Digital Monetization",
    text: `Our Digital Monetization services currently entail around Digital Transformation, Branding & Digital Monetization Services, Analytics & Performance Measurement Tools and UI/UX, Graphic Designing & 3D Modelling`,
  },

  {
    img: "https://velocitai.com/wp-content/uploads/2022/06/s2.jpg",
    id: 4,
    title: "E-Commerce",
    text: `Velocitai Clone pioneers tailored eCommerce solutions for businesses expanding online. We provide design, development, marketing, maintenance, and support. Our expertise ensures seamless access to target audiences, allowing clients to focus on core competencies while we handle all technical aspects.`,
  },

  {
    img: "https://velocitai.com/wp-content/uploads/2022/06/s3.jpg",
    id: 5,
    title: "Enterprise Development and Support",
    text: `Velocitai Clone enhances business ease with customized software and Agile methodologies. Our Transition-Transform-Transfer framework enables enterprises to outsource application transformation and automation, reducing market delivery time and increasing business value.`,
  },

  {
    img: "https://velocitai.com/wp-content/uploads/2022/06/s4.jpg",
    id: 6,
    title: "Product Engineering",
    text: `We invest in innovation for excellence, focusing on developing expertise in areas like Computer Vision, Augmented Reality, AI, Machine Learning, and Data Sciences. Our work in Augmented Reality combined with AI is revolutionizing business solutions, paving the way for transformative future transactions.`,
  },

  {
    img: "https://velocitai.com/wp-content/uploads/2022/06/Ip-Operation2.jpg",
    id: 7,
    title: "IP Operations",
    text: `We specialize in delivering comprehensive protection for IP Networks, ensuring performance and integrity for critical processes. With advancing technologies like cloud architectures, 5G, and Industry 4.0, IP networks face increased vulnerability to threats compromising data integrity.`,
  },
];

const Section = styled(motion.section)`
  min-height: 100vh;
  height: auto;
  /* width: 80vw; */
  width: 100%;
  margin: 0 auto;
  overflow: hidden;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;

  position: relative;

  /* background-color: orange; */
`;

const Title = styled.h1`
  font-size: ${(props) => props.theme.fontxxxl};
  font-family: "Kaushan Script";
  font-weight: 300;
  /* text-transform: capitalize; */
  color: ${(props) => props.theme.text};
  text-shadow: 1px 1px 1px ${(props) => props.theme.body};

  position: absolute;
  top: 0.5rem;
  left: 5%;
  z-index: 11;

  @media (max-width: 64em) {
    font-size: ${(props) => props.theme.fontxxl};
  }
  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontxl};
  }
`;

const Left = styled.div`
  width: 35%;
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};

  min-height: 100vh;
  z-index: 10;

  position: fixed;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h2{
    font-size: ${(props) => props.theme.fontxxl};
    font-weight: 500;
    width: 80%;
    margin: 3rem auto;
    line-height: 3.5rem;
  }

  p {
    font-size: ${(props) => props.theme.fontlg};
    font-weight: 300;
    width: 80%;
    margin: 0 auto;
  }

  @media (max-width: 64em) {
    p {
      font-size: ${(props) => props.theme.fontmd};
    }
  }

  @media (max-width: 48em) {
    width: 40%;
    p {
      font-size: ${(props) => props.theme.fontsm};
    }

    .topicTitle{
    font-size: 1.5em;
    line-height: 1.3em;
    }
  }
  @media (max-width: 30em) {
    p {
      font-size: ${(props) => props.theme.fontxs};
    }
  }
`;
const Right = styled.div`
  /* width: 65%; */
  position: absolute;
  left: 35%;
  padding-left: 30%;
  background-color: ${(props) => props.theme.grey};
  min-height: 100vh;

  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const Item = styled(motion.div)`
  display: inline-block;
  width: 25rem;
  /* background-color: black; */
  margin:0 8.5rem;
  img {
    width: 100%;
    height: auto;
    cursor: pointer;
  }

  h1 {
    font-weight: 500;
    text-align: center;
    cursor: pointer;
  }

  @media (max-width: 48em) {
    width: 15rem;
  }
`;

const ItemVariant={
  initial:{
    filter: "grayscale(100%)",
    scale: 1,
  },
  animate:{
      filter: "grayscale(0%)",
      scale: 1.5,
      transition: {
          type:"spring",
          mass: 0.3,
          stiffness: 50,
          damping: 8,
          ease: "easeInOut"
      }
  },
  exit:{
    filter: "grayscale(100%)",
    scale: 0.95,
  }
}


const Product = ({ item, index, updateActiveImage}) => {
  const ref = useRef(null);

  const onScreen = useOnScreen(ref, 0.5);
  
  useEffect(() => {
    if (onScreen) {
      updateActiveImage(index);
    }
  }, [onScreen, index]);

  return (
    <Item
      initial="initial"
      animate={onScreen ? "animate" : false}
      viewport={{
         once: false,
         amount: "all",
         threshold: 0.5,
      }}
      exit="exit"
      variants={ItemVariant}
      key={item.id}
      ref={ref}
    >
      <img width="400" height="600" src={item.img} alt={item.title} />
      <h1>{item.title}</h1>
    </Item>
  );
};

const divVariants={
  initial:{
    opacity: 0,
    x: -100,
  },
  animate:{
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 50,
      damping: 8,
      when: "beforeChildren",
      staggerChildren: 0.018,
    },
  },

  exit:{
    opacity: 0.3,
    x: -100,
  },
}


const divVariantsTwo={
  initial:{
    opacity: 0,
    x: 100,
  },
  animate:{
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 50,
      damping: 8,
      when: "beforeChildren",
      staggerChildren: 0.02,
    },
  },

  exit: {  opacity: 0.2, x: 100, },
}


const textVariants={
  initial: { opacity: 0.3, y: -50 },
  animate: { opacity: 1, y: 0, transition:{
    type: "spring",
    stiffnes: 50,
    damping: 8,
    ease: "easeInOut",

  } },
}

const textVariantsTwo={
  initial: { opacity: 0.3, y: -50 },
  animate: { opacity: 1, y: 0, transition:{
    type: "spring",
    stiffness: 50,
    damping: 8,
    ease: "easeInOut",
  } 
},

exit: { opacity: 0.3, y: -50 },

}


const loaderVariants={
  initial:{
    opacity: 0.3,
  },
  animate:{
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 50,
      damping: 8,
      ease: "easeInOut",
      yoyo: Infinity,
    }
  },
  exit:{
    opacity: 0,
    transition: {
      type: "spring",
      stiffness: 50,
      damping: 8,
      ease: "easeInOut",
    }
  }
}


const Shop = () => {
  gsap.registerPlugin(ScrollTrigger);
  const { scroll } = useLocomotiveScroll();

  const [activeImage, setActiveImage] = useState(1);
  const ref = useRef(null);
  const textRef= useRef(null);
  const horizontalRef = useRef(null);

  const [loader, setLoader] = useState(false)



  useLayoutEffect(() => {
    let element = ref.current;
    let scrollingElement = horizontalRef.current;

    let pinWrapWidth = scrollingElement.offsetWidth;

    let t1 = gsap.timeline();
    setTimeout(() => {
      t1.to(element, {
        scrollTrigger: {
          trigger: element,
          start: "top top",
          end: `${pinWrapWidth} bottom`,
          scroller: scroll?.el ? scroll?.el : ".app",
          scrub: 1,
          pin: true,
          // markers: true,
          pinnedContainer: element,
          anticipatePin: 1,
        },
        height: `${element.scrollWidth - element.offsetHeight}px`,
        ease: "none",
      });

      t1.to(scrollingElement, {
        scrollTrigger: {
          trigger: scrollingElement,
          start: "top top",
          end: `${pinWrapWidth} bottom`,
          scroller: scroll?.el ? scroll?.el : ".app",
          scrub: 1,
          // markers: true,
          snap: 1 / (data.length - 1),
        },
        x: -pinWrapWidth,

        ease: "none",
      });
      ScrollTrigger.refresh();
    }, 1000);
    ScrollTrigger.refresh();

    return () => {
      t1.kill();
      ScrollTrigger.killAll();
    };
  }, []);


  const handleUpdateActiveImage = (index) => {
    setLoader(true);
    setTimeout(() => {
      setActiveImage(index + 1);
      setLoader(false);
    }, 500);
  };

  return (
    <Section ref={ref} id="shop">
      <Title data-scroll data-scroll-speed="-0.5">
        Our Services
      </Title>
      <Left
      
      >
          {loader ? <motion.p variants={loaderVariants}>...</motion.p> :(
          <motion.div
            variants={divVariants}
            initial="initial"
            ref={textRef}
            animate={activeImage ? "animate" : ""}
            exit="exit"
            onEndedCapture="exit"
      // whileInView={handleView}
        viewport={{
          once: false,
          amount: "all",
          threshold: 0.5,
        }}
            key={activeImage+1}
          >
          <motion.h2 variants={divVariants} key={activeImage} className="topicTitle">
            {data[activeImage-1].title.split("").map((el, id)=>(
              <motion.span variants={textVariants}>{el}</motion.span>
            ))}
          </motion.h2>

          <motion.p variants={divVariantsTwo}> 
          {data[activeImage-1].text?.split(".").map((text, index)=>(
            <>
            {text.split("").map((el, index)=>(
              <motion.span
              variants={textVariantsTwo}
              key={index}
              >
                {el}
              </motion.span>
            ))}{"."}
            <br /> <br />
            </>
        )
        )}

        </motion.p>
          </motion.div>
       )}
     
      </Left>
      <Right data-scroll ref={horizontalRef}>
        {data.map((it, index)=>(
          <Product  item={it} index={index} updateActiveImage={handleUpdateActiveImage}/>
        ))
        }
      </Right>
    </Section>
  );
};

export default Shop;
