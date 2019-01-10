import React from "react";
import styled from "styled-components";

import logo from "../../assets/logo.svg";
import Content from "./Content";

const LOGO_DIMENSION = 75;

const Logo = styled.img`
  width: ${LOGO_DIMENSION}px;
  height: ${LOGO_DIMENSION}px;
  margin: 0;
  display: block;
`;

const Header = () => (
  <Content as="header" padding="40px 40px 0 40px">
      <Logo src={logo} />
  </Content>
);

export default Header;
