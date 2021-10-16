import React from "react";
import styled from "styled-components";

import poly1 from "../images/polygons/pink-polygon1.svg";
import poly2 from "../images/polygons/pink-polygon2.svg";
import quote from "../images/quotes/quote2.svg";

const QuoteSection2 = () => {
  return (
    <Wrapper>
      <ContentWrapper>
        <Poly1 src={poly1} alt="poly1" />
        <Quote src={quote} alt="quote" />
        <Poly2 src={poly2} alt="poly2" />
      </ContentWrapper>
    </Wrapper>
  );
};

export default QuoteSection2;

const Wrapper = styled.div`
  max-width: 1032px;
  height: auto;
  padding: 20px 0;
  margin: 0 auto;
  overflow: hidden;
`;

const ContentWrapper = styled.div`
  display: grid;
  /* grid-template-columns: repeat(3, auto); */
  grid-template-areas:
    "top top top"
    "middle middle middle"
    "bottom bottom bottom";
  grid-template-rows: auto auto auto;
  grid-gap: 20px;
`;

const Poly1 = styled.img`
  width: 211px;
  height: 211px;
  grid-area: top;
  justify-self: start;

  @media (max-width: 580px) {
    width: 145px;
    height: 145px;
    margin: -10 0;
  }
`;

const Quote = styled.img`
  grid-area: middle;
  justify-self: center;

  @media (max-width: 580px) {
    width: 316px;
    height: 177px;
  }
`;

const Poly2 = styled.img`
  width: 281px;
  height: 281px;
  grid-area: bottom;
  justify-self: end;

  @media (max-width: 580px) {
    width: 163px;
    height: 145px;
    margin: -10 0;
  }
`;
