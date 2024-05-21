import React from 'react';
import styled from 'styled-components';
import Logo from '../components/Logo';
import Navbar from '../components/Navbar';
import CoverVideo from '../components/CoverVideo';




const Section=styled.section`
    position: relative;
    min-height: 100vh;
    overflow: hidden;
`;




const Home = () => {
  return (
        <Section id="home">
            <Logo/>
            <Navbar/>
            <CoverVideo/>
        </Section>
  )
}

export default Home