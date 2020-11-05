import React from 'react';
import styled from 'styled-components';

const Footer = () => {
  return (
    <>
      <FooterWrapper>
        Company © 2020
      </FooterWrapper>
    </>
  )
}

const FooterWrapper = styled.footer`
  background: #a22633;
  color: white;
  padding: 1rem;
  text-align: center;
`

export default Footer;