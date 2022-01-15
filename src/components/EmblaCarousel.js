import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import styled from "styled-components";
import { BodyIntro, SmallText } from "./styles/TextStyles";

import arrowIcon from "../images/icons/linkArrow.svg";

// const options = { slidesToSroll: 2 };

export const EmblaCarousel = () => {
  const [emblaRef] = useEmblaCarousel({
    dragFree: true,
    loop: false,
  });

  return (
    <Embla className="embla" ref={emblaRef}>
      <EmblaContainer className="embla__container">
        <SlideBox>
          <BoxImage>Slide 1</BoxImage>
          <BottomContainer>
            <div>
              <Title>Lorem Ipsum</Title>
              <Description>lorem ipsum</Description>
            </div>
            <Circlediv>
              <Icon src={arrowIcon} alt="icon" />
            </Circlediv>
          </BottomContainer>
        </SlideBox>
        <SlideBox>
          <BoxImage>Slide 2</BoxImage>
          <BottomContainer>
            <div>
              <Title>Lorem Ipsum</Title>
              <Description>lorem ipsum</Description>
            </div>
            <Circlediv>
              <Icon src={arrowIcon} alt="icon" />
            </Circlediv>
          </BottomContainer>
        </SlideBox>
        <SlideBox>
          <BoxImage>Slide 3</BoxImage>
          <BottomContainer>
            <div>
              <Title>Lorem Ipsum</Title>
              <Description>lorem ipsum</Description>
            </div>
            <Circlediv>
              <Icon src={arrowIcon} alt="icon" />
            </Circlediv>
          </BottomContainer>
        </SlideBox>
        <SlideBox>
          <BoxImage>Slide 4</BoxImage>
          <BottomContainer>
            <div>
              <Title>Lorem Ipsum</Title>
              <Description>lorem ipsum</Description>
            </div>
            <Circlediv>
              <Icon src={arrowIcon} alt="icon" />
            </Circlediv>
          </BottomContainer>
        </SlideBox>
        {/* <EmblaSlide className="embla__slide">Slide 1</EmblaSlide>
        <EmblaSlide className="embla__slide">Slide 2</EmblaSlide>
        <EmblaSlide className="embla__slide">Slide 3</EmblaSlide> */}
      </EmblaContainer>
    </Embla>
  );
};

const Embla = styled.div`
  padding-top: 30px;
  overflow: hidden;
  /* background-color: aliceblue; */
`;

const EmblaContainer = styled.div`
  display: flex;
  height: 340px;
  width: 278px;
`;

// const EmblaSlide = styled.div`
//   display: flex;
//   background: linear-gradient(108.42deg, #000000 -22.86%, #6b0637 130.88%);
//   height: 278px;
//   /* width: 278px; */
//   padding: 10px;
//   position: relative;
//   flex: 0 0 100%;
//   max-width: 278px;
//   text-align: center;
//   justify-content: center;
//   align-items: center;
//   margin-right: 30px;
//   border-radius: 14px;
// `;

// const EmblaSlide = styled.div`
//   flex: 0 0 100%;
//   margin-right: 30px;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   background: linear-gradient(108.42deg, #000000 -22.86%, #6b0637 130.88%);
//   border-radius: 14px;
// `;

const SlideBox = styled.div`
  margin: 0 30px 5px 0;
`;
const BoxImage = styled.div`
  height: 278px;
  width: 278px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(108.42deg, #000000 -22.86%, #6b0637 130.88%);
  border-radius: 14px;
  margin-bottom: 10px;
`;
const Title = styled(BodyIntro)`
  font-weight: 0;
`;
const Description = styled(SmallText)`
  color: rgba(255, 255, 255, 0.7);
`;

const Circlediv = styled.div`
  background: rgba(255, 249, 249, 0.2);
  backdrop-filter: blur(40px);
  border-radius: 50%;
  width: 41px;
  height: 41px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.4s ease-in-out;
  :hover {
    transform: rotate(340deg);
  }
`;

const Icon = styled.img``;

const BottomContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
