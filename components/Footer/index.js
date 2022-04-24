import React from "react";
import styled from "styled-components";

const Footer = () => {
    return (
        <FooterContainer>
            <footer>
                <FooterLink
                    href="https://t.me/freakssha"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Powered by @freakssha
                </FooterLink>
            </footer>
        </FooterContainer>
    )
}

export default Footer

const FooterContainer = styled.div`
  text-align: center;
  background-color: #1B1B1B;
  height: 4rem;
  
  display: flex;
  align-items: center;
  justify-content: center;
`;

const FooterLink = styled.a`
  color: grey;
`;