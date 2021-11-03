import * as React from "react";
import Layout from "../components/layout";
import styled from "styled-components";
import { MainSection } from "../sections/MainSection";
import Skills from "../sections/Skills";
import QuoteSection1 from "../sections/QuoteSection1";
import QuoteSection2 from "../sections/QuoteSection2";
import AboutSection from "../sections/AboutSection";
import ProjectsSection from "../sections/ProjectsSection";
import ContactSection from "../sections/ContactSection";

const IndexPage = () => {
  return (
    <Layout>
      <MainSection />
      <Skills />
      <QuoteSection1 />
      <AboutSection />
      <QuoteSection2 />
      <ProjectsSection />
      <ContactSection />
      <Text className="fun">More Updates Coming soon</Text>
    </Layout>
  );
};

export default IndexPage;

const Text = styled.h1`
  padding: 0.5rem;
  text-align: center;
  font-size: 2rem;

  background: linear-gradient(92deg, #8ec5fc, #e0c3fc);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: shine 2s linear infinite;

  @keyframes shine {
    from {
      -webkit-filter: hue-rotate(0deg);
    }
    to {
      -webkit-filter: hue-rotate(-360deg);
    }
  }
  opacity: 0.9;
`;
