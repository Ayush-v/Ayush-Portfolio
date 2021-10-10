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
    <HeaderContainer>
      <Link to="/" className="Logo">
        <img src={image} alt="lololo" />
      </Link>
      <Nav>
        <Ul>
          <li>
            <Link to="/" className="linkText">
              .Home()
            </Link>
          </li>
          <li>
            <Link to="/about" className="linkText">
              .About()
            </Link>
          </li>
          <li>
            <Link to="/projects" className="linkText">
              .Projects()
            </Link>
          </li>
          <li>
            <Link to="/contact" className="linkText">
              .Contact()
            </Link>
          </li>
        </Ul>
      </Nav>
      <SocialMedia>
        <Link
          to="https://www.instagram.com/ayush_iosdev/"
          className="bb"
          target="_blank"
        >
          <img src={insta} alt="insta" />
        </Link>

        <Link to="https://discord.com" className="bb" target="_blank">
          <img src={discord} alt="insta" />
        </Link>

        <Link to="https://github.com" className="bb" target="_blank">
          <img src={github} alt="insta" />
        </Link>
      </SocialMedia>
      <Menu>
        <img src={hamMenu} alt="menuIcon" />
      </Menu>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px 10%;

  .logo {
    padding: 10px;
  }
`;

const Nav = styled.nav``;

const Ul = styled.ul`
  font-size: 18px;
  list-style: none;

  li {
    display: inline-block;
    padding: 0px 20px;
  }

  & li a {
    transition: all 0.3s ease 0s;
  }

  & li a:hover {
    color: #0dc3ce;
  }

  .linkText {
    text-decoration: none;
    color: white;
  }

  @media (max-width: 43em) {
    /* display: flex;
    flex-direction: column;
    gap: 10px; */
    display: none;
  }
`;

const SocialMedia = styled.div`
  list-style: none;
  text-decoration: none;

  .bb {
    padding: 10px;
  }

  @media (max-width: 43em) {
    display: none;
  }
`;

const Menu = styled.div`
  padding: 10px;

  img {
    width: 2rem;
  }

  @media (min-width: 43em) {
    display: none;
  }
`;
