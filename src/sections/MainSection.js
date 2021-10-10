import React from "react";
import styled from "styled-components";
// import { MainMockup } from "./MainMockup";

export const MainSection = () => {
  return (
    <Wrapper>
      <Title>
        Ayush<span>.is()</span>
      </Title>
      <Description>
        Creative Front End Developer,Designer,IOS developer
      </Description>
      {/* <MainMockup /> */}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
  align-items: center;
  /* padding-top: 50px;
  padding-left: 3rem;
  padding-right: 3rem; */
  padding: 50px 10%;

  span {
    color: rgba(13, 240, 255, 0.8);
  }
`;

const Title = styled.h1`
  font-size: 54px;
`;

const Description = styled.p`
  font-size: 18px;
  line-height: 1.5rem;
  color: rgba(255, 255, 255, 0.7);
`;
