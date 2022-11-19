import styled from "styled-components";
import { Icon } from "@iconify/react";

export default function Footer() {
  return (
    <MainContainer>
      <NameandIconContainer>
        <Icon
          icon="material-symbols:logo-dev-outline"
          color="#84ea80"
          width="60"
          height="60"
        />
        <Name>APOLLON</Name>
      </NameandIconContainer>
      <TextContainer>
        <p>2022 - Apollon Kelenc - Junior Frontend Developer</p>
      </TextContainer>
      <ContactsContainer>
        <LinkedIn>
          <a
            href="https://www.linkedin.com/in/apollon-kelenc-b01326185/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon
              icon="ri:linkedin-fill"
              color="#f1b34c"
              width="50"
              height="50"
            />
          </a>
        </LinkedIn>
        <GitHub>
          <a
            href="https://github.com/Apollon-Kelenc"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon icon="mdi:github" color="#f1b34c" width="50" height="50" />
          </a>
        </GitHub>
        <Email className="email">
          <a href="mailto:domenkelenc24@gmail.com">
            <Icon
              icon="material-symbols:mail-outline-rounded"
              color="#f1b34c"
              width="50"
              height="50"
            />
          </a>
        </Email>
      </ContactsContainer>
    </MainContainer>
  );
}

const MainContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: white;
`;

const NameandIconContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Name = styled.p`
  font-weight: bold;
  font-size: 22px;
`;

const TextContainer = styled.div``;

const ContactsContainer = styled.div`
  display: flex;
  gap: 50px;
`;

const LinkedIn = styled.div``;

const GitHub = styled.div``;

const Email = styled.div``;
