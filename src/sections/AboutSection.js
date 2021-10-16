import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

import PinkWave from "../components/Backgrounds/PinkWave";
import { Caption, H1, MediumText } from "../components/styles/TextStyles";

import insta from "../images/icons/instagram.svg";
import discord from "../images/icons/discord.svg";
import github from "../images/icons/github.svg";

const AboutSection = () => {
  return (
    <Wrapper>
      <ContentWrapper>
        <TextWrapper>
          <Title>
            About<span>.me()</span>
          </Title>
          <Description>
            UI/UX Designer and specialize in IOS Development and Front End web
            development
          </Description>
        </TextWrapper>
        <SocialWrapper>
          <Text>You can follow me here:</Text>
          <SoicalMedia>
            <StyledLink
              to="https://www.instagram.com/ayush_iosdev/"
              className="active"
            >
              <img src={insta} alt="insta" />
            </StyledLink>

            <StyledLink
              to="https://discord.com"
              className="active"
              target="_blank"
            >
              <img src={discord} alt="insta" />
            </StyledLink>

            <StyledLink
              to="https://github.com"
              className="active"
              target="_blank"
            >
              <img src={github} alt="insta" />
            </StyledLink>
          </SoicalMedia>
        </SocialWrapper>
      </ContentWrapper>
      <PinkWave />
    </Wrapper>
  );
};

export default AboutSection;

const Wrapper = styled.div`
  position: relative;
`;

const ContentWrapper = styled.div`
  height: 800px;
  max-width: 996px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 200px;
  /* justify-content: space-evenly; */
`;

const TextWrapper = styled.div`
  max-width: 380px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Title = styled(H1)`
  span {
    color: #d31470;
  }
`;

const Description = styled(Caption)``;

const SocialWrapper = styled.div``;

const Text = styled(MediumText)``;

const SoicalMedia = styled.div`
  padding: 2rem 0;

  .active {
    &:hover {
      opacity: 0.8;
    }
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  padding: 0 1rem;
  /* height: 100%; */
  cursor: pointer;
  font-size: 18px;

  &.active {
    color: #15cdfc;
  }
`;
