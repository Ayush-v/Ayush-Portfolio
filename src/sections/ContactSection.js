import React from "react";
import styled from "styled-components";
import YellowWaves from "../components/Backgrounds/YellowWaves";
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
            hesitate to use the form.
          </Description>
        </TextWrapper>
        <Form>
          <NameForm>
            <Label>
              <span>Name</span>
            </Label>
            <Input type="text" />
          </NameForm>
          <NameForm>
            <Label>
              <span>Email</span>
            </Label>
            <Input type="email" />
          </NameForm>
          <NameForm>
            <Label>
              <span>Message</span>
            </Label>
            <TextArea type="text" />
            <SubmitButton type="button">Send Message!</SubmitButton>
          </NameForm>
        </Form>
      </ContentWrapper>
      <YellowWaves />
    </Wrapper>
  );
};

export default ContactSection;

const Wrapper = styled.div`
  position: relative;
  overflow: hidden;
`;

const ContentWrapper = styled.div`
  max-width: 996px;
  margin: 100px auto 100px auto;
  display: flex;
  flex-direction: column;
  padding-left: 1rem;
  padding-bottom: 100px;
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

const Form = styled.form`
  margin-top: 40px;
  position: relative;
  padding: 0 1rem 0 0;
`;

const NameForm = styled.div`
  margin-top: 40px;
  width: 100%;
  height: 45px;

  @media screen and (min-width: 48em) {
    width: 60%;
  }
`;

const Input = styled.input`
  width: 100%;
  height: 100%;
  border: none;
  /* border-radius: 4px; */
  border-bottom: 1px solid #fff;
  background: none;
  color: white;
  font-size: 1.2rem;
  padding-left: 12px;
  margin-top: 5px;

  :hover {
    transition: all 0.7s ease;
    border-bottom: 1px solid rgba(255, 230, 98, 0.8);
  }

  :focus {
    outline: none;
    border-bottom: 1px solid rgba(255, 230, 98, 0.8);
  }
`;

const Label = styled.label`
  font-weight: 500;
  padding-bottom: 10px;
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 120px;
  border: none;
  border-bottom: 1px solid #fff;
  background: none;
  color: white;
  font-size: 1.2rem;
  padding-left: 12px;
  padding-top: 12px;

  :hover {
    transition: all 0.7s ease;
    border-bottom: 1px solid rgba(255, 230, 98, 0.8);
  }

  :focus {
    outline: none;
    border-bottom: 1px solid rgba(255, 230, 98, 0.8);
  }
`;

const SubmitButton = styled.button`
  height: 60px;
  width: 230px;
  margin: 40px 0 0 0;
  background: none;
  color: #fff;
  font-size: 20px;
  font-weight: 500;
  border: none;
  border: 1px solid #ffe662;
  opacity: 0.9;
  border-radius: 8px;

  /* :hover {
    transition: all 3s ease;
    background: linear-gradient(#ffffff, #ffe662cc);
  } */
`;
