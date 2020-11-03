import React from 'react';
import styled from 'styled-components';
import HeroImg from '../assets/hero_image.jpg'

const Home = () => {
  return (
    <main>
      <Hero img={HeroImg}>
        <DescriptionCard backgroundColor="#e43b44">
          <h1>Title</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis voluptates aliquid possimus ullam? Itaque fugit deserunt fuga voluptatem quibusdam expedita sed velit, quas alias sapiente magnam ratione perspiciatis non fugiat.</p>
        </DescriptionCard>
      </Hero>
    </main>
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

export default Home;