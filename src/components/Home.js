import React from 'react';
import styled from 'styled-components';

import Footer from './Footer';
import HeroImg from '../assets/hero_image.jpg'

const Home = () => {
  return (
    <>
      <Hero img={HeroImg}>
        <DescriptionCard backgroundColor="#e43b44">
          <h1>Title</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis voluptates aliquid possimus ullam? Itaque fugit deserunt fuga voluptatem quibusdam expedita sed velit, quas alias sapiente magnam ratione perspiciatis non fugiat.</p>
        </DescriptionCard>       
      </Hero>

      <InfoSection backgroundColor="#e34b44">
        <h1>Introduction</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit sapiente repellendus excepturi blanditiis sit optio quae rerum nesciunt, quibusdam debitis? Iste commodi iure quo recusandae corporis veritatis quia deleniti nesciunt! Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis ipsam possimus dignissimos exercitationem consequatur fugit nulla, at recusandae, natus itaque, cupiditate eos eaque quasi eius. Saepe, odit porro. Architecto, quibusdam!
        </p>  
      </InfoSection>
      
      <Footer>
        
      </Footer>
    </>
  )
}

const Hero = styled.section`
  display: flex;
  align-items: center;
  width: 100%;
  height: 80vh;
  background-image: url(${props => props.img});
  background-size: cover;
`

const DescriptionCard = styled.div`
  width: 50%;
  border-radius: 1rem;
  background: ${props => props.backgroundColor};
  opacity: 0.9;
  color: ${props => props.textColor ? props.textColor : 'white'};
  font-size: 1.375rem;
  padding: 2rem;
  margin-left: 2rem;
  & > h1 {
    line-height: 1;
    margin-top: 16px;
    margin-bottom: 0;
  }
`

const InfoSection = styled.section`
  background: ${props => props.backgroundColor};
  color: ${props => props.textColor ? props.textColor : 'white'};
  padding: 2rem;
  font-size: 1.375rem;
`

export default Home;