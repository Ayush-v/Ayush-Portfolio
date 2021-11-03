import React from "react";
import styled from "styled-components";
import { H1, MediumText } from "../components/styles/TextStyles";

const ContactSection = () => {
  return (
    <Wrapper>
      <ContentWrapper>
        <TextWrapper>
          <Title>
            Contact<span>.me()</span>
          </Title>
          <Description>
            I'm interested in freelance opportunities-especially ambitious or
            large project. However, if you have other request or question, don't
            hesitate to use the form
          </Description>
        </TextWrapper>
        <InputFields></InputFields>
      </ContentWrapper>
    </Wrapper>
  );
};

export default ContactSection;

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

const Description = styled(MediumText)`
  background: -webkit-linear-gradient(#ffffff, #ffb03a);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const InputFields = styled.div``;
