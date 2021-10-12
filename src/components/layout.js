import React from "react";
// import styled from "styled-components";
import "./layout.module.css";
import NavBar from "./NavBar";

const Layout = ({ children }) => {
  return (
    <>
      <NavBar />
      {children}
    </>
  );
};

export default Layout;

// const Main = styled.main`
//   max-width: 1440px;
//   margin: 0 auto;
// `;
