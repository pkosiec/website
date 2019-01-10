import React from "react";
import styled from "styled-components";

//TODO: Import SVG
import logo from "../../assets/logo.png";

import Content from "./Content";

const LOGO_DIMENSION = 75;

const Image = styled.img`
  width: ${LOGO_DIMENSION}px;
  height: ${LOGO_DIMENSION}px;
  float: left;
  margin: 0;
  display: block;
`;

const HeaderContent = styled.div`
  display: block;
  line-height: ${LOGO_DIMENSION}px;
`;

const HeaderText = styled.h1`
  line-height: ${LOGO_DIMENSION}px;
  margin: 0 0 0 20px;
  display: inline-block;
  font-size: 2rem;
`;

const Header = () => (
  <Content as="header">
    <HeaderContent>
      <Image src={logo} />
    </HeaderContent>
  </Content>
);

export default Header;
