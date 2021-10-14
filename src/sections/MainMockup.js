import React from "react";
import styled from "styled-components";

import mockup1 from "../images/mockup/mockup1.svg";
import mockup2 from "../images/mockup/mockup2.svg";

export const MainMockup = () => {
  return (
    <Wrapper>
      <Container>
        <img className="mockup1" src={mockup1} alt="mockup1"></img>
        <img className="mockup2" src={mockup2} alt="mockup2"></img>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

const Container = styled.div`
  display: flex;
  gap: 20px;
`;
