import React from "react";
import styled from "styled-components";
import BlueWaves from "../components/Backgrounds/BlueWaves";
import { MainMockup } from "./MainMockup";

export const MainSection = () => {
  return (
    <Wrapper>
      <BlueWaves />
      <ContentWrapper>
        <TextWrapper>
          <Title>
            Ayush<span>.is()</span>
          </Title>
          <Description>
            Creative FrontEnd Developer, Designer,
            <br />
            IOS developer
          </Description>
        </TextWrapper>
        <MainMockup />
      </ContentWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  overflow: hidden;
  /* background: linear-gradient(90deg, #fad961 0%, #f76b1c 100%); */
`;

const ContentWrapper = styled.div`
  height: 70vh;
  max-width: 996px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* padding-top: 210px; */
  padding-left: 1rem;
  padding-right: 1rem;

  @media screen and (max-width: 768px) {
    /* padding-top: 150px; */
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 60px;
  }
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Title = styled.h1`
  font-size: 70px;
  span {
    color: rgba(13, 240, 255, 0.8);
  }
`;

const Description = styled.p`
  font-size: 18px;
`;
