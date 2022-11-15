import NavBar from "../components/NavBar";
import SkillsInformation from "../components/SkillSection";
import Projects from "../components/ProjectsSection";
import Footer from "../components/Footer";
import Image from "next/image";
import styled from "styled-components";
import profile_picture from "../public/profile-picture.png";

export default function LandingPage() {
  return (
    <Maincontainer id="AboutMe">
      <NavBar></NavBar>
      <ImageandTextContainer>
        <TextContainer>
          <Introducing>-- Introducing</Introducing>
          <HelloandName>
            Hello<br></br>I am Apollon<br></br>Kelenc
          </HelloandName>
          <PersonalInformaition>
            Junior Frontend Developer based in Munich starting in the world of
            Tech,<br></br> helping People and Businesses realize Frontend based
            work.
          </PersonalInformaition>
          <ContactButtonContainer>
            <a href="mailto:domenkelenc24@gmail.com">
              <ContactButton>Contact Me</ContactButton>
            </a>
          </ContactButtonContainer>
        </TextContainer>
        <ImageContainer>
          <Image src={profile_picture} alt="profile picture" layout="fill" />
        </ImageContainer>
      </ImageandTextContainer>
      <SkillsInformation></SkillsInformation>
      <Projects></Projects>
      <Footer></Footer>
    </Maincontainer>
  );
}

const ImageandTextContainer = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
  margin-top: 2rem;
`;

const TextContainer = styled.div`
  margin: 10rem 0rem 0rem 5rem;
`;

const ImageContainer = styled.div`
  margin-right: 20rem;
  margin-top: 4rem;
  height: 75vh;
  width: 43vw;
  position: relative;
`;

const Maincontainer = styled.div``;

const Introducing = styled.p`
  font-size: 20px;
  color: rgb(132, 234, 128);
`;

const HelloandName = styled.h1`
  font-size: 7rem;
  color: white;
`;

const PersonalInformaition = styled.p`
  color: white;
  font-size: 1.5rem;
`;

const ContactButtonContainer = styled.div`
  padding: 1rem 1.5rem 0rem 0rem;
`;

const ContactButton = styled.button`
  border: none;
  background-color: rgba(245, 193, 74);
  padding: 1.2rem 3rem;
  font-size: larger;
  border-radius: 9px;
  margin-top: 1rem;
  transition: 0.2s;
  cursor: pointer;
  :hover {
    box-shadow: 1px 1px 12px rgba(245, 193, 74);
  }
`;
