import * as React from "react";
import Layout from "../components/layout";
import styled from "styled-components";
import { MainSection } from "../sections/MainSection";

const IndexPage = () => {
  return (
    <Layout>
      <MainSection />
      <Text>More Updates Coming soon in progress </Text>
    </Layout>
  );
};

export default IndexPage;

const Text = styled.h1`
  padding: 20px;
  font-size: 2rem;
`;
