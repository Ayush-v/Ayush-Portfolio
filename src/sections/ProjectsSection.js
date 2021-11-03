import React from "react";
import styled from "styled-components";
import { H1 } from "../components/styles/TextStyles";

const ProjectsSection = () => {
  return (
    <Wrapper>
      <ContentWrapper>
        <TextWrapper>
          <Title>
            My<span>.projects()</span>
          </Title>
        </TextWrapper>
      </ContentWrapper>
    </Wrapper>
  );
};

export default ProjectsSection;

const Wrapper = styled.div``;

const ContentWrapper = styled.div`
  max-width: 996px;
  margin: 200px auto;
  display: flex;
  padding-left: 1rem;
  /* padding: 9rem 3rem; */
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
`;

const Title = styled(H1)`
  @media screen and (max-width: 768px) {
    font-size: 50px;
  }

  span {
    color: #ffb03a;
  }
`;
