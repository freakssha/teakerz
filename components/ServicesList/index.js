import React from "react";
import styled, {css} from "styled-components";
import {GucciDesc, GucciDescTitle, GucciTitle, HighlightedText} from "../../pages";

const ServicesList = () => {
    return (
        <ServicesListCard>
            <GucciTitle>
                УСЛУГИ <HighlightedText>TEAKERZ</HighlightedText>
            </GucciTitle>
            <div className="grid">
                <ServiceCard>
                    <ServicesListText>
                        <GucciDescTitle>
                            Стандартная чистка ✣ <HighlightedText>500₽</HighlightedText>
                        </GucciDescTitle>
                        <br />
                        <GucciDesc>
                            Чистка снаружи кроссовок,
                            чистка подошвы. Удаление въевшихся пятен,
                            следов краски, ржавчины, реагентов, катышко.
                            Стирка шнурков, чистка стелек, покрытие
                            влагоотталкивающим средством. Удаление
                            неприятных запахов за счёт дезодоранта для обуви.
                        </GucciDesc>
                    </ServicesListText>
                    <CardImage><div className='one'/></CardImage>
                </ServiceCard>

                <ServiceCard>
                    <ServicesListText>
                        <GucciDescTitle>
                            Глубокая чистка ✣ <HighlightedText>1000₽</HighlightedText>
                        </GucciDescTitle>
                        <br />
                        <GucciDesc>
                            Чистка внешней и внутренней поверхностей кроссовок,
                            чистка и отбеливание подошвы. Удаление въевшихся пятен,
                            следов краски, ржавчины, реагентов, катышков.
                            Восстановление цвета замши, стирка шнурков,
                            чистка стелек, покрытие влагоотталкивающим средством.
                            Удаление неприятных запахов за счёт дезодоранта для обуви.
                        </GucciDesc>
                    </ServicesListText>
                    <CardImage><div className='two'/></CardImage>
                </ServiceCard>

                <ServiceCard>
                    <ServicesListText>
                        <GucciDescTitle>
                            Замена шнурков ✣ <HighlightedText>300₽</HighlightedText>
                        </GucciDescTitle>
                        <br />
                        <GucciDesc>
                            Подбираем новые шнурки, плетем стильные узоры.
                        </GucciDesc>
                    </ServicesListText>
                    <CardImage><div className='three'/></CardImage>
                </ServiceCard>

                <ServiceCard>
                    <ServicesListText>
                        <GucciDescTitle>
                            Окрашивание ✣ <HighlightedText>1200₽</HighlightedText>
                        </GucciDescTitle>
                        <br />
                        <GucciDesc>
                            Все виды материалов: текстиль, нубук, замша, кожа.
                            <br />
                            Перед покраской пара должна пройти чистку. Оплачивается дополнительно.
                        </GucciDesc>
                    </ServicesListText>
                    <CardImage><div className='four'/></CardImage>
                </ServiceCard>

                <style jsx>{`
                    .grid {
                      display: flex;
                      justify-content: center;
                      flex-wrap: wrap;
                      margin-top: 1rem;
                    }
                    
                    @media (max-width: 600px) {
                      .grid {
                        width: 100%;
                        flex-direction: column;
                      }
                    }
                  `}</style>
            </div>
        </ServicesListCard>

    )
}

export default ServicesList

const ServicesListCard = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem;
  height: 100%;
  background-color: #e7e7e7;
  text-align: center;
  padding: 2rem;
`;

const ServicesListText = styled.div`
  display: flex;
  flex-direction: column;

  padding: 2rem;
`;



const CardImage = styled.div`
  width: 100%;


  
  height: 100%;


  .one {
    background-image: url("/sneaker_ok0.webp");
    background-repeat:no-repeat;
    background-position: center;
    background-size:cover;
    text-align: center;
    width: 100%;
    min-height: 22rem;
    
    border-radius: 0  0 10px 10px;
  }
  .two {
    background-repeat:no-repeat;
    background-position: center;
    background-size:cover;
    text-align: center;
    width: 100%;
    min-height: 22rem;

    border-radius: 0  0 10px 10px;
    background-image: url("/sneaker_deep1.webp");
  }
  .three {
    background-repeat:no-repeat;
    background-position: center;
    background-size:cover;
    text-align: center;
    width: 100%;
    min-height: 22rem;

    border-radius: 0  0 10px 10px;
    background-image: url("/sneaker_links.webp");
  }
  .four {
    background-repeat:no-repeat;
    background-position: center;
    background-size:cover;
    text-align: center;
    width: 100%;
    min-height: 22rem;

    border-radius: 0  0 10px 10px;
    background-image: url("/sneaker_draw.webp");
  }
`;



const ServiceCard = styled('a')(
    (imdUrl) => css`
      margin: 1rem;
      flex-basis: 21%;
      text-align: left;
      color: inherit;
      text-decoration: none;
      border: 1px solid black;
      border-radius: 10px;
      transition: color 0.15s ease, border-color 0.15s ease;


      height: 100%;
    
      &:hover,
      &:focus,
      &:active {
        border-color: #ff2800;
      }
    `);

