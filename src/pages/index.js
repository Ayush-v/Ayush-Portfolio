import * as React from "react";
import Layout from "../components/layout";
import styled from "styled-components";
import { MainSection } from "../sections/MainSection";

const IndexPage = () => {
  return (
    <Layout>
      <MainSection />
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
