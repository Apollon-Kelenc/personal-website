import styled from "styled-components";
import { Icon } from "@iconify/react";

export default function Navbar() {
  return (
    <NavbarContainer className="NavbarContainer">
      <NameandIconContainer>
        <Icon
          className="NavBarIcon"
          icon="material-symbols:logo-dev-outline"
          color="#84ea80"
          width="60"
          height="60"
        />
        <Name className="NavBarName">APOLLON</Name>
      </NameandIconContainer>
      <PageLinksContainer className="PageLinksContainer">
        <AboutMe>
          <a href="#AboutMe">About Me</a>
        </AboutMe>
        <Skills>
          <a href="#Skills">Skills</a>
        </Skills>
        <Portfolio>
          <a href="#Portfolio">Portfolio</a>
        </Portfolio>
      </PageLinksContainer>
      <ContactButtonContainer className="NavBarContactButtonContainer">
        <a href="mailto:domenkelenc24@gmail.com">
          <ContactButton>Contact Me</ContactButton>
        </a>
      </ContactButtonContainer>
    </NavbarContainer>
  );
}

const Name = styled.p`
  font-weight: bold;
`;

const NameandIconContainer = styled.div`
  display: flex;
  align-items: center;
`;

const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  font-size: 22px;
  padding: 0rem 2rem 0rem 2rem;
  top: 0;
  position: sticky;
  z-index: 2;
`;

const PageLinksContainer = styled.div`
  display: flex;
  gap: 3rem;
`;

const AboutMe = styled.p`
  a {
    color: white;
    text-decoration: none;
  }
  :hover {
    color: white;
    text-decoration: underline;
    cursor: pointer;
  }
`;

const Portfolio = styled.p`
  a {
    color: white;
    text-decoration: none;
  }
  :hover {
    color: white;
    text-decoration: underline;
    cursor: pointer;
  }
`;

const Skills = styled.p`
  a {
    color: white;
    text-decoration: none;
  }
  :hover {
    color: white;
    text-decoration: underline;
    cursor: pointer;
  }
`;

const ContactButtonContainer = styled.div`
  margin-top: 1rem;
`;

const ContactButton = styled.button`
  border: none;
  background-color: rgba(245, 193, 74);
  padding: 1.2rem 2rem;
  border-radius: 9px;
  font-size: large;
  margin-bottom: 1rem;
  cursor: pointer;
  transition: 0.2s;
  :hover {
    box-shadow: 1px 1px 12px rgba(245, 193, 74);
  }
`;
