import Head from 'next/head'
import MainContainer from "../components/MainContainer";
import styled from "styled-components";
import MainCard from "../components/MainCard";
import CreateOrderLine from "../components/CreateOrderLine";
import PromoCard from "../components/PromoCard";
import ServicesList from "../components/ServicesList";
import AboutProcess from "../components/AboutProcess";

export default function Home() {
  return (
    <MainPageContainer style={{width: '100%'}}>
      <Head>
        <title>Сникерчистка TEAKERZ в Ростове-на-Дону</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainContainer>
        <MainCard />
        <CreateOrderLine />
        <PromoCard />
        <ServicesList />
          <AboutProcess />
        <main>


        </main>
      </MainContainer>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          overflow-x: hidden;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

     
      `}</style>
    </MainPageContainer>
  )
}


export const GucciTitle = styled.span`  
  font-size: 40px;
  font-weight: 300;
`;

export const GucciDescTitle = styled.span`
  font-size: 24px;
  font-weight: 300;
`;

export const GucciDesc = styled.span`
  color: #313131;
  line-height: 20px;
`;


const MainPageContainer = styled.div`
  overflow-x: hidden;
`;


export const HighlightedText = styled.text`
  color: #ff2800;
`;


