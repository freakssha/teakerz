import React from "react";
import styled from "styled-components";
import Footer from "../Footer";
import pattern from "/public/header_pattern.jpg";
import Image from 'next/image'
import {GucciDesc, GucciDescTitle, GucciTitle, HighlightedText} from "../../pages";

const AboutProcess = () => {
    return (
        <AboutProcessContainer>
            <GucciTitle>
                Как работает <HighlightedText>TEAKERZ</HighlightedText>:
            </GucciTitle>
            <ProcessSteps>
                <ProcessStep>
                    <ProcessDivider>
                        ✣
                        ✣
                        ✣
                    </ProcessDivider>
                    <br />
                    <GucciDescTitle>
                        1. Этап
                    </GucciDescTitle>
                    <br />
                    <GucciDesc style={{fontStyle: 'italic'}}>
                        Отправьте нам фотографию вашей
                        обуви в одном из удобных мессенджеров:
                        What's Up, Telegram, VK.
                    </GucciDesc>
                </ProcessStep>
                <ProcessStep>
                    <ProcessDivider>
                        ✣
                        ✣
                        ✣
                    </ProcessDivider>
                    <br />
                    <GucciDescTitle>
                        2. Этап
                    </GucciDescTitle>
                    <br />
                    <GucciDesc style={{fontStyle: 'italic'}}>
                        Сообщите, когда курьер может доставить нам вашу обувь.
                    </GucciDesc>
                </ProcessStep>
                <ProcessStep>
                    <ProcessDivider>
                        ✣
                        ✣
                        ✣
                    </ProcessDivider>
                    <br />
                    <GucciDescTitle>
                        3. Этап
                    </GucciDescTitle>
                    <br />
                    <GucciDesc style={{fontStyle: 'italic'}}>
                        Мы позаботимся о бережном восстановлении вашей
                        обуви. И сообщим о промежуточном результате.
                    </GucciDesc>
                </ProcessStep>
                <ProcessStep>
                    <ProcessDivider>
                        ✣
                        ✣
                        ✣
                    </ProcessDivider>
                    <br />
                    <GucciDescTitle>
                        4. Этап
                    </GucciDescTitle>
                    <br />
                    <GucciDesc style={{fontStyle: 'italic'}}>
                        Ваша обувь снова выглядит, как новая.
                        Ждите курьера, он ее доставит!
                    </GucciDesc>
                </ProcessStep>
            </ProcessSteps>
        </AboutProcessContainer>
    )
}

export default AboutProcess

const AboutProcessContainer = styled.div`
  margin: 3rem 1rem 3rem;
  
  display: flex;
  text-align: center;
  flex-direction: column;
  justify-content: center;
`;



const ProcessSteps = styled.div`
  margin: 1rem;
  
  display: flex;
  text-align: center;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;



const ProcessStep = styled.div`
  margin: 1rem;
  
  text-align: center;

  max-width: 20rem;
  
  

`;



const ProcessDivider = styled.span`
  font-size: 30px;
  color: #ff2800;
`;

