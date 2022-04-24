import React from "react";
import styled from "styled-components";
import {GucciDesc, GucciTitle} from "../../pages";

const PromoCard = () => {
    return (
        <PromoCardContainer>
            <PromoCardText>
                <GucciTitle>
                    Эти кроссовки просто почистили
                </GucciTitle>
                <br />
                <GucciDesc>
                    Чистка позволит любой обуви вновь
                    начать выглядеть новой,
                    а защитный состав не даст ей быстро загрязниться вновь.
                    <br />
                    Нет смысла покупать новые кроссовки,
                    когда мы можем сделать ЭТО с вашей обувью.
                </GucciDesc>
            </PromoCardText>
            <PromoCardImage />
        </PromoCardContainer>

    )
}

export default PromoCard



const PromoCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem 1rem;
  height: 33rem;
  background-color: #e7e7e7;
  align-items: center;
`;


const PromoCardText = styled.div`
  margin: 2rem 1rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 70rem;

`;


const PromoCardImage = styled.div`  
  background-image: url('/promo_card0.jpg');
  background-repeat:no-repeat;
  background-position: center;
  background-size:cover;
  text-align: center;
  height: 100%;
  width: 100%;
`;






