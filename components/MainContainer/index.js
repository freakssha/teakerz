import React from "react";
import styled from "styled-components";
import Footer from "../Footer";
import pattern from "/public/header_pattern.jpg";
import Image from 'next/image'

const MainContainer = ({ children }) => {
    return (
        <div style={{width: '100%'}}>


            <ContentContainer>
               { children }
            </ContentContainer>

            <Footer />
        </div>
    )
}

export default MainContainer

const ContentContainer = styled.div`
  background-color: #FFFFFF;
  width: 100%;
`;

const HeaderPattern = styled.div`
  width: 100%;
  height: 4rem;
`;


const HeaderNav = styled.div`
  position: -webkit-sticky; /* Safari */
  position: sticky;
  top: 0;
  height: 4rem;
  background-color: #1B1B1B;
  color: #ffffff;

  display: flex;
  flex-direction: row;
  
`;

const Logo = styled.a`
  font-weight: 600;
  font-size: 40px;
  margin: 0 2rem;
`;

const NavLinks = styled.nav`
  min-width: 14rem;
  margin: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled.a`

`;