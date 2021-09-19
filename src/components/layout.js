import React from "react";
import styled from "styled-components";
import Header from "./header";
import "./layout.module.css";

const Layout = ({ children }) => {
  return (
    <Main>
      <Header />
      {children}
      {/* <footer>
        <p>this is footer</p>
      </footer> */}
    </Main>
  );
};

export default Layout;

const Main = styled.main``;
