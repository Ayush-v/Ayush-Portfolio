import React from "react";
import styled from "styled-components";
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

const TextWrapper = styled.div``;

const Title = styled(H2)`
  @media screen and (max-width: 768px) {
    font-size: 3rem;
  }

  span {
    color: #ffb03a;
  }
`;
