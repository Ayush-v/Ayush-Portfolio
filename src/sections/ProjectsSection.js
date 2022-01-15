import React from "react";
import styled from "styled-components";
import { EmblaCarousel } from "../components/EmblaCarousel";
import { H2 } from "../components/styles/TextStyles";

const ProjectsSection = () => {
  return (
    <Wrapper>
      <ContentWrapper>
        <TextWrapper>
          <Title>
            My<span>.projects()</span>
          </Title>
        </TextWrapper>
        <EmblaCarousel />
      </ContentWrapper>
    </Wrapper>
  );
};

export default ProjectsSection;

const Wrapper = styled.div``;

const ContentWrapper = styled.div`
  max-width: 996px;
  margin: 200px auto;
  /* display: flex; */
  padding-left: 1rem;
  /* padding: 9rem 3rem; */
`;

const TextWrapper = styled.div``;

const Title = styled(H2)`
  @media screen and (max-width: 768px) {
    font-size: 3rem;
  }

  span {
    background: linear-gradient(
      90.04deg,
      #0dc3ce 3.63%,
      #e40570 48.54%,
      #ffb03a 99.97%
    );
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

// const CorouselWrapper = styled.div`
//   padding-top: 30px;
//   /* background-color: bisque; */
// `;
