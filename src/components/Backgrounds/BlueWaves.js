import React from "react";
import styled from "styled-components";

const BlueWaves = () => {
  return (
    <Wrapper>
      <svg
        viewBox="0 0 1440 393"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="waves"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M0 38.9L48 71.3167C96 103.733 192 168.567 288 175.05C384 181.533 480 129.667 576 123.183C672 116.7 768 155.6 864 188.017C960 220.433 1056 246.367 1152 213.95C1248 181.533 1344 90.7667 1392 45.3833L1440 0V389H1392C1344 389 1248 389 1152 389C1056 389 960 389 864 389C768 389 672 389 576 389C480 389 384 389 288 389C192 389 96 389 48 389H0V38.9Z"
          fill="url(#paint0_linear_46:191)"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M1440 312.31L1392 325.758C1344 339.207 1248 366.103 1152 343.69C1056 321.276 960 249.551 864 213.689C768 177.827 672 177.827 576 191.275C480 204.724 384 231.62 288 236.103C192 240.586 95.9999 222.655 47.9999 213.689L-5.72205e-05 204.724V393H47.9999C95.9999 393 192 393 288 393C384 393 480 393 576 393C672 393 768 393 864 393C960 393 1056 393 1152 393C1248 393 1344 393 1392 393H1440V312.31Z"
          fill="url(#paint1_linear_46:191)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_46:191"
            x1="720"
            y1="0"
            x2="720"
            y2="428.897"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#0DC3CE" />
            <stop offset="1" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_46:191"
            x1="720"
            y1="393"
            x2="720"
            y2="183"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-opacity="0" />
            <stop offset="1" stop-color="#0DC3CE" />
          </linearGradient>
        </defs>
      </svg>
    </Wrapper>
  );
};

export default BlueWaves;

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 15vh;
  margin-bottom: -7px;
  min-height: 100px;
  max-height: 150px;
`;
