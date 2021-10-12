import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

import image from "../images/logos/logo5.svg";
import insta from "../images/icons/instagram.svg";
import discord from "../images/icons/discord.svg";
import github from "../images/icons/github.svg";
import hamMenu from "../images/icons/hamMenu.svg";

const NavBar = () => {
  return (
    <>
      <NavContainer>
        <StyledLink to="/" className="Logo">
          <img src={image} alt="lololo" class="logoImage" />
        </StyledLink>
        <Menu>
          <img src={hamMenu} alt="menuIcon" />
        </Menu>
        <NavMenu>
          <StyledLink
            to="/"
            className="StyledlinkText"
            activeStyle={{ color: "#0dc3ce" }}
          >
            .Home()
          </StyledLink>

          <StyledLink
            to="/about"
            className="StyledlinkText"
            activeStyle={{ color: "#0dc3ce" }}
          >
            .About()
          </StyledLink>

          <StyledLink
            to="/projects"
            className="StyledlinkText"
            activeStyle={{ color: "#0dc3ce" }}
          >
            .Projects()
          </StyledLink>

          <StyledLink
            to="/contact"
            className="StyledlinkText"
            activeStyle={{ color: "#0dc3ce" }}
          >
            .Contact()
          </StyledLink>
        </NavMenu>
        <SocialMedia>
          <StyledLink to="https://www.instagram.com/ayush_iosdev/">
            <img src={insta} alt="insta" />
          </StyledLink>

          <StyledLink to="https://discord.com" target="_blank">
            <img src={discord} alt="insta" />
          </StyledLink>

          <StyledLink to="https://github.com" target="_blank">
            <img src={github} alt="insta" />
          </StyledLink>
        </SocialMedia>
      </NavContainer>
    </>
  );
};

export default NavBar;

const NavContainer = styled.nav`
  /* position: fixed; */
  display: flex;
  justify-content: space-between;
  /* padding: 0.5rem calc((100vw - 1000px) / 2); */
  padding: 24px 2rem;
  z-index: 10;
  max-width: 1200px;
  margin: 0 auto;
`;

const StyledLink = styled(Link)`
  /* background: rgba(16, 13, 18, 0.965); */
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  font-size: 18px;

  &.active {
    color: #15cdfc;
  }
`;

const Menu = styled.div`
  width: 28;
  height: 28;
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

  img {
    width: 28px;
  }
`;

const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -20px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const SocialMedia = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;
  &:hover {
    opacity: 0.6;
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
