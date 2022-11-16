import styled from "styled-components";
import { Icon } from "@iconify/react";

export default function SkillsInformation() {
  return (
    <MainContainer className="HomeMainContainer">
      <LogoContainer>
        <HTML5>
          <Icon
            icon="akar-icons:html-fill"
            color="#4ecb71"
            width="80"
            height="80"
          />
          <HtmlText>HTML</HtmlText>
        </HTML5>
        <CSS3>
          <Icon
            icon="akar-icons:css-fill"
            color="#4ecb71"
            width="80"
            height="80"
          />
          <CssText>CSS</CssText>
        </CSS3>
        <JavaScript>
          <Icon
            icon="teenyicons:javascript-outline"
            color="#4ecb71"
            width="80"
            height="80"
          />
          <JavaScriptText>JAVASCRIPT</JavaScriptText>
        </JavaScript>
        <React>
          <Icon
            icon="akar-icons:react-fill"
            color="#4ecb71"
            width="80"
            height="80"
          />
          <ReactText>REACT</ReactText>
        </React>
      </LogoContainer>
      <TextContainer>
        <MySkills id="Skills">--My Skills</MySkills>
        <SkillHeader>Why Hire Me For Your Open Position?</SkillHeader>
        <SkillText>
          The technological revolution is changing aspects of our lives, and the
          fabric of society itself. It is also changing the way we learn and
          what we learn. <br></br>This is a very fascinating fact for me and im
          finding great joy in beeing involved in the worlds most influential
          field which is called technology. <br></br>Especially after i
          successfuly finished my Web Development Bootcamp at{" "}
          <StyledLink
            href="https://www.neuefische.de/"
            target="_blank"
            rel="noopener noreferrer"
          >
            neue fische
          </StyledLink>{" "}
          where i learned to work with HTML, CSS, Javascript<br></br> and React
          as a Framework, i am very excited to start Coding as a profession.
        </SkillText>
        <DownloadButtonContainer>
          <a
            href="/files/Apollon_Kelenc_Certificate.pdf"
            download="Apollon_Kelenc_Certificate"
            target="_blank"
            rel="noreferrer"
          >
            <DownloadButton>Download Certificate</DownloadButton>
          </a>
        </DownloadButtonContainer>
      </TextContainer>
    </MainContainer>
  );
}

const MainContainer = styled.div`
  display: flex;
  background-color: rgb(45, 46, 50);
`;
const LogoContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 40rem;
  gap: 2rem;
  margin: 5rem;
  background-color: rgb(45, 46, 50);
`;

const React = styled.div`
  background-color: rgb(37, 38, 42);
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 20px;
  color: white;
  padding: 4rem 4rem;
  font-size: 25px;
  font-weight: bold;
  border: none;
  box-shadow: 5px 10px 18px black;
`;

const ReactText = styled.p`
  margin: 1.5rem 0px 0px 0px;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5rem;
  color: white;
  background-color: rgb(45, 46, 50);
`;

const DownloadButtonContainer = styled.div`
  padding: 1rem 1.5rem 0rem 0rem;
  background-color: rgb(45, 46, 50);
`;

const DownloadButton = styled.button`
  border: none;
  background-color: rgba(245, 193, 74);
  padding: 0.8rem 2rem;
  border-radius: 9px;
  font-size: large;
  margin-bottom: 1rem;
  margin-top: 1rem;
  transition: 0.2s;
  cursor: pointer;
  :hover {
    box-shadow: 1px 1px 12px rgba(245, 193, 74);
  }
`;

const HTML5 = styled.div`
  background-color: rgb(37, 38, 42);
  display: flex;
  flex-direction: column;
  align-items: center;
  border: none;
  box-shadow: 5px 10px 18px black;
  border-radius: 20px;
  color: white;
  padding: 4rem 4rem;
  font-size: 25px;
  font-weight: bold;
`;

const HtmlText = styled.p`
  margin: 1.5rem 0px 0px 0px;
`;

const CSS3 = styled.div`
  background-color: rgb(37, 38, 42);
  display: flex;
  flex-direction: column;
  align-items: center;
  border: none;
  box-shadow: 5px 10px 18px black;
  border-radius: 20px;
  color: white;
  font-size: 25px;
  font-weight: bold;
  padding: 4rem 4.2rem;
`;

const CssText = styled.p`
  margin: 1.5rem 0px 0px 0px;
`;

const JavaScript = styled.div`
  background-color: rgb(37, 38, 42);
  display: flex;
  flex-direction: column;
  align-items: center;
  border: none;
  box-shadow: 5px 10px 18px black;
  border-radius: 20px;
  color: white;
  padding: 4rem 1.8rem;
  font-size: 25px;
  font-weight: bold;
`;

const JavaScriptText = styled.p`
  margin: 1.5rem 0px 0px 0px;
`;

const MySkills = styled.p`
  font-size: 22px;
  color: rgb(132, 234, 128);
  background-color: rgb(45, 46, 50);
`;

const SkillHeader = styled.h2`
  font-size: 44px;
  background-color: rgb(45, 46, 50);
  font-weight: 500;
`;

const SkillText = styled.p`
  background-color: rgb(45, 46, 50);
  font-size: 21px;
`;

const StyledLink = styled.a`
  background-color: rgb(45, 46, 50);
  color: rgb(132, 234, 128);
`;
