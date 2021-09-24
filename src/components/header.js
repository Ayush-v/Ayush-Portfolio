import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

import image from "../images/logos/logo5.svg";
import insta from "../images/icons/instagram.svg";
import discord from "../images/icons/discord.svg";
import github from "../images/icons/github.svg";

const Header = () => {
  return (
    <HeaderContainer>
      <Link to="/">
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
            <Link to="/src/pages/index.js" className="linkText">
              .About()
            </Link>
          </li>
          <li>
            <Link to="/src/pages/index.js" className="linkText">
              .Projects()
            </Link>
          </li>
          <li>
            <Link to="/src/pages/index.js" className="linkText">
              .Contact()
            </Link>
          </li>
        </Ul>
      </Nav>
      <SocialMedia>
        <Link to="/src/pages/index.js" className="bb">
          <img src={insta} alt="insta" />
        </Link>

        <Link to="/src/pages/index.js" className="bb">
          <img src={discord} alt="insta" />
        </Link>

        <Link to="/src/pages/index.js" className="bb">
          <img src={github} alt="insta" />
        </Link>
      </SocialMedia>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px 10%;
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
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
`;

const SocialMedia = styled.div`
  list-style: none;
  text-decoration: none;

  .bb {
    padding: 10px;
  }
`;
