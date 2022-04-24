import React from "react";
import styled from "styled-components";
import {GucciDescTitle, GucciTitle, HighlightedText} from "../../pages";

const CreateOrderLine = () => {
    return (
        <CreateOrderLineContainer>
            <GucciDescTitle>
                Оставляйте заявку.
                Присылайте фото вашей обуви в сообщении:
            </GucciDescTitle>
            <ButtonVK target='_blank' href='https://vk.com/teakerz' />
            <ButtonTG target='_blank' href='https://t.me/sol4rfields' />
        </CreateOrderLineContainer>
    )
}

export default CreateOrderLine

const CreateOrderLineContainer = styled.div`
  display: flex;
  flex-direction: row;
  
  padding: 1rem 2rem;
  background-color: #e7e7e7;
  height: 3rem;
  
  border: 1px solid #ff2800;
  
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    flex-direction: column;
    height: 15rem;
  }
`;

const ButtonVK = styled.a`
  height: 40px;
  width: 40px;
  background-image: url('/vk_black.png');
  background-repeat:no-repeat;
  background-position: center;
  background-size:cover;
  text-align: center;
  
  margin: 0 1rem;
`;

const ButtonTG = styled.a`
  height: 40px;
  width: 40px;
  background-image: url('/tg_black.png');
  background-repeat:no-repeat;
  background-position: center;
  background-size:cover;
  text-align: center;
`;