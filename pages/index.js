import 'react-slideshow-image/dist/styles.css'
import styled from 'styled-components'
import { Slide } from 'react-slideshow-image';
import Head from 'next/head'


const slideImages = [
  '/images/1.jpeg',
  '/images/2.jpeg',
  '/images/3.jpeg',
  '/images/4.jpeg',
  '/images/5.jpeg',
  '/images/6.jpeg',
  '/images/7.jpeg',
];

const Top = styled.div`
  text-align : center;
  font-size:30px;
  margin-top: 30px;
  margin-bottom: 30px;
`;

const LogoImg = styled.img`
width: 200px;
`;

const Card = styled.div`
height : 400px;
max-width: 400px;
background-size: contain;
background-repeat : no-repeat;
background-position: center;
margin-left : auto;
margin-right : auto;
`;
const SliderContainer = styled.div`
margin-left: 30px;
margin-right: 30px;
`;

const CardContainer = styled.div`
`;

const MenuContainer = styled.div`
text-align: center;
margin-top: 5px;
display: flex;
justify-content: center;
`;

const Introduce = styled.div`
text-align : center;
font-size: 14px;
margin-top: 13px;
margin-bottom: 20px;
`;


export default function Home() {
  return (
    <>
    <Head>
        <title>서계동 커피</title>
        <link rel="icon" href="/cropped-baraboda-favicon-32x32.png" sizes="32x32"></link>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge"></meta>
        <meta property="og:locale" content="ko_KR"></meta>
        <meta property="og:site_name" content="서계동 커피"></meta>
        <meta property="og:type" content="website"></meta>
        <meta charset="utf-8"></meta>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="시같은 공간. 만리재로156 3층. OPEN 월화수목일 11:30-18:00. 금토 11:30-20:00"/>
        <meta name="keywords" content="서계동 커피"/>
        <meta property="og:site_name" content="서계동 커피"/>
        <meta property="og:title" content="서계동 커피"></meta>
        <meta property="og:description" content="시같은 공간. 만리재로156 3층. OPEN 월화수목일 11:30-18:00. 금토 11:30-20:00"/>
        <meta name="twitter:title" content="서계동 커피"></meta>
        <meta name="twitter:description" content="시같은 공간. 만리재로156 3층. OPEN 월화수목일 11:30-18:00. 금토 11:30-20:00"></meta>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
    </Head>
    <Top>
      <LogoImg src={"/logo.png"}/>
    </Top>
      <SliderContainer>
      <Slide arrows={false}>
          <CardContainer className="each-slide">
            <Card style={{'backgroundImage': `url(${slideImages[0]})`}}>
            </Card>
          </CardContainer>
          <CardContainer className="each-slide">
            <Card style={{'backgroundImage': `url(${slideImages[1]})`}}>
            </Card>
          </CardContainer>
          <CardContainer className="each-slide">
            <Card style={{'backgroundImage': `url(${slideImages[2]})`}}>
            </Card>
          </CardContainer>
        </Slide>
      </SliderContainer>
      <Introduce>
        <div>
         시같은 공간.
        </div>
        <div>
          만리재로156 3층. OPEN
        </div>
        <div>
          월화수목일 11:30-18:00
        </div>
        <div>
          금토 11:30-20:00
        </div>
      </Introduce>
    </>
  )
}
