import React from "react";
import styled from "styled-components";
import {GucciTitle, HighlightedText} from "../../pages";

function GuuciDesc(props) {
    return null;
}

const MainCard = () => {
    return (
        <MainCardContainer>
            <Logo>TEAKERZ</Logo>
            <GucciTitle>
                Сникерчистка с доставкой по всему Ростову-на-Дону.
            </GucciTitle>
            <p>
                Профессионально чистим, ремонтируем и кастомизируем кроссовки любых моделей.
                <br/>
                После нас они как новые. И доставляем бесплатно.
            </p>
            <br/>
            <br/>
        </MainCardContainer>
    )
}

export default MainCard

const MainCardContainer = styled.div`
   height: 90vh;
  padding: 3rem 3rem;
  
  background-image: url('/main_card6.png');
  background-repeat:no-repeat;
  background-position: center;
  background-size:cover;
  text-align: center;
  
  color: #fff;
  font-size: 20px;
  
  display: flex;
  text-align: center;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    height: 100vh;
  }
`;

const MainCardButton = styled.button`
  display: flex;
  width: 8.5rem;
  height: 40px;
  border-radius: 0;

  border: none;

  justify-content: center;
  align-items: center;


  font-size: 16px;
  font-weight: 300;
`;

const Logo = styled.button`
  font-size: 70px;
  font-weight: 600;
  
  margin-bottom: 2rem;
`;