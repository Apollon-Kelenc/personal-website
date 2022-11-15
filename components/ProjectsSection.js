import iphone_picture from "../public/iphone-mockup.png";
import styled from "styled-components";
import Image from "next/image";

export default function Projects() {
  return (
    <MainContainer id="Portfolio">
      <TextContainer>
        <Project1>-- Project 1</Project1>
        <Project1Name> In Vino Veritas</Project1Name>
        <Project1Txt>
          My Mobile First App In Vino Veritas was my fist big project and also
          my final project for my Bootcamp that i developt in 4 weeks, using all
          tools that i learned in the Bootcamp.
          <br />
          With In Vino Veritas, the user receives a personalized wine
          recommendation that is specifically adapted to the food request and
          wine preference.
          <br /> All wines can be purchased directly using the app and stored in
          the user´s own wine cellar.
        </Project1Txt>
        <Project1Link>
          <a
            href="https://in-vino-veritas.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Project1LinkTxt>&#10142; Try it!</Project1LinkTxt>
          </a>
        </Project1Link>
      </TextContainer>
      <ImageContainer>
        <Image src={iphone_picture} alt="iphone picture" layout="fill" />
      </ImageContainer>
    </MainContainer>
  );
}

const MainContainer = styled.div`
  background-color: rgb(45, 46, 50);
  position: relative;
  display: flex;
  justify-content: space-between;
  z-index: 2;
`;

const ImageContainer = styled.div`
  height: 43vh;
  width: 11vw;
  position: relative;
  margin: 0rem 24rem 0rem 0rem;
`;

const TextContainer = styled.div`
  background-color: rgb(45, 46, 50);
  margin-left: 5rem;
`;

const Project1 = styled.p`
  font-size: 22px;
  color: rgb(132, 234, 128);
  background-color: rgb(45, 46, 50);
`;

const Project1Name = styled.h2`
  color: white;
  font-size: 44px;
  background-color: rgb(45, 46, 50);
  font-weight: 500;
`;

const Project1Txt = styled.p`
  background-color: rgb(45, 46, 50);
  color: white;
  font-size: 21px;
  margin-top: 3rem;
`;

const Project1Link = styled.div`
  width: fit-content;
  a {
    text-decoration: none;
  }
`;

const Project1LinkTxt = styled.p`
  background-color: rgb(45, 46, 50);
  color: rgba(245, 193, 74);
  font-size: 23px;
  margin-top: 2rem;
`;
