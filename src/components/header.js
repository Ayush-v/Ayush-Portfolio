import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

const Header = () => {
  return (
    <HeaderContainer>
      <Link to="/">
        <StaticImage src="../images/logo.svg" alt="logo" />
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
          <StaticImage src="../images/icons/instagram.svg" alt="insta" />
        </Link>

        <Link to="/src/pages/index.js" className="bb">
          <StaticImage src="../images/icons/discord.svg" alt="insta" />
        </Link>

        <Link to="/src/pages/index.js" className="bb">
          <StaticImage src="../images/icons/instagram.svg" alt="insta" />
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
`;

const SocialMedia = styled.div`
  list-style: none;
  text-decoration: none;

  .bb {
    padding: 10px;
    border-radius: 50%;
    background-color: #222326;
  }
`;
