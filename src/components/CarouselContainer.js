import React from "react";
import styled from "styled-components";

const CarouselContainer = () => {
  return (
    <Wrapper>
      <Container>
        <Box></Box>
        <Title>Lorem Ipsum</Title>
        <Description>lorem ipsum</Description>
        <IconLink></IconLink>
      </Container>
    </Wrapper>
  );
};

export default CarouselContainer;

const Wrapper = styled.div``;
const Container = styled.div``;
const Box = styled.div``;
const Title = styled.div``;
const Description = styled.div``;
const IconLink = styled.div``;
