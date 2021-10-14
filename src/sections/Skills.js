import React from "react";
import styled from "styled-components";

import check from "../images/icons/tickicon.svg";

const Skills = () => {
  return (
    <Wrapper>
      <ContentWrapper>
        <SkillBox>
          <Logo src={check} alt="chddeck" />
          <TextWrapper>
            <Title>UI/UX Designer</Title>
            <Description>creative websites apps for you</Description>
          </TextWrapper>
        </SkillBox>
        <SkillBox>
          <Logo src={check} alt="chddeck" />
          <TextWrapper>
            <Title>Web Developer</Title>
            <Description>amazing websites for you</Description>
          </TextWrapper>
        </SkillBox>
        <SkillBox>
          <Logo src={check} alt="chddeck" />
          <TextWrapper>
            <Title>IOS Developer</Title>
            <Description>Amazing apps for you</Description>
          </TextWrapper>
        </SkillBox>
        <SkillBox>
          <Logo src={check} alt="chddeck" />
          <TextWrapper>
            <Title>Freelancer</Title>
            <Description>you can hire me</Description>
          </TextWrapper>
        </SkillBox>
      </ContentWrapper>
    </Wrapper>
  );
};

export default Skills;

const Wrapper = styled.div``;

const ContentWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 30px;
  margin: 60px;
`;

const SkillBox = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  width: 300px;
  margin: 0 10px;
  padding: 16px;
  background: #000000;
  border-radius: 8px;

  :hover {
    opacity: 0.8;
    cursor: default;
  }
`;

const Logo = styled.img`
  width: 27px;
  height: 27px;
`;

const TextWrapper = styled.div`
  line-height: 1.2rem;
`;

const Title = styled.h1`
  font-size: 15px;
`;

const Description = styled.p`
  font-size: 12px;
  color: #a7a7a7;
`;
