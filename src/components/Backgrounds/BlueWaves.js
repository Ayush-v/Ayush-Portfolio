import React from "react";
import styled from "styled-components";

import wave1 from "../../images/waves/blue-wave1.svg";
import wave2 from "../../images/waves/blue-wave2.svg";

const BlueWaves = () => {
  return (
    <Wrapper>
      <Wave src={wave1} alt="wave" style={{ top: "570px" }} />
      <Wave src={wave2} alt="wave" style={{ top: "570px" }} />
    </Wrapper>
  );
};

export default BlueWaves;

const Wrapper = styled.div`
  position: relative;
`;

const Wave = styled.img`
  /* aspect-ratio: 1440/393; */
  /* width: 100%;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover; */

  /* .layer {
    background-image: url("/src/images/waves/blue-wave1.svg");
  } */

  position: absolute;
  z-index: -1;
  width: 100%;

  @media screen and (max-width: 768px) {
    padding-top: 150px;
  }
`;
