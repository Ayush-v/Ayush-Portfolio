import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

import image from "../images/logos/logo5.svg";
import insta from "../images/icons/instagram.svg";
import discord from "../images/icons/discord.svg";
import github from "../images/icons/github.svg";
import hamMenu from "../images/icons/hamMenu.svg";

const Header = () => {
  return (
    <>
      <HeaderContainer>
        <StyledLink to="/" className="Logo">
          <img src={image} alt="lololo" class="logoImage" />
        </StyledLink>
        <Menu>
          <img src={hamMenu} alt="menuIcon" />
        </Menu>
        <Nav>
          <Ul>
            <li>
              <StyledLink to="/" className="StyledlinkText" activeStyle>
                .Home()
              </StyledLink>
            </li>
            <li>
              <StyledLink to="/about" className="StyledlinkText">
                .About()
              </StyledLink>
            </li>
            <li>
              <StyledLink to="/projects" className="StyledlinkText">
                .Projects()
              </StyledLink>
            </li>
            <li>
              <StyledLink to="/contact" className="StyledlinkText">
                .Contact()
              </StyledLink>
            </li>
          </Ul>
        </Nav>
        <SocialMedia>
          <StyledLink
            to="https://www.instagram.com/ayush_iosdev/"
            className="bb"
            target="_blank"
          >
            <img src={insta} alt="insta" />
          </StyledLink>

          <StyledLink to="https://discord.com" className="bb" target="_blank">
            <img src={discord} alt="insta" />
          </StyledLink>

          <StyledLink to="https://github.com" className="bb" target="_blank">
            <img src={github} alt="insta" />
          </StyledLink>
        </SocialMedia>
      </HeaderContainer>
    </>
  );
};

export default Header;

const HeaderContainer = styled.nav`
  /* background: #000; */
  height: 80px;
  display: flex;
  justify-content: space-between;
  /* padding: 0.5rem calc((100vw - 1000px) / 2); */
  padding: 20px 2rem;
  z-index: 10;
`;

const StyledLink = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &:active {
    color: #15cdfc;
  }
`;

const Menu = styled.div`
  display: none;
  color: #fff;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

const Nav = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const Ul = styled.ul``;

const SocialMedia = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

// const HeaderContainer = styled.header`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   padding: 24px 10%;

//   .Logo {
//     height: 44px;
//     width: 44px;
//     align-items: center;
//     align-content: center;
//   }

//   .logoImage {
//     background-color: aqua;
//     padding: 5px;
//   }
// `;

// const Nav = styled.nav``;

// const Ul = styled.ul`
//   font-size: 18px;
//   list-style: none;

//   li {
//     display: inline-block;
//     padding: 0px 20px;
//   }

//   & li a {
//     transition: all 0.3s ease 0s;
//   }

//   & li a:hover {
//     color: #0dc3ce;
//   }

//   .linkText {
//     text-decoration: none;
//     color: white;
//   }

//   @media (max-width: 43em) {
//     display: none;
//   }
// `;

// const SocialMedia = styled.div`
//   list-style: none;
//   text-decoration: none;

//   .bb {
//     padding: 10px;
//   }

//   @media (max-width: 43em) {
//     display: none;
//   }
// `;

// const Menu = styled.div`
//   padding: 10px;

//   img {
//     width: 2rem;
//   }

//   @media (min-width: 43em) {
//     display: none;
//   }
// `;
