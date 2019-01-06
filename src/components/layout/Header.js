import React from "react";
import styled from "styled-components";

//TODO: Import SVG
import logo from "../../images/logo.png";

import Content from "./Content";

const Image = styled.img`
  width: 90px;
  height: 90px;
  float: left;
  margin: 0;
  display: block;
`;

const HeaderContent = styled.div`
    display: block;
    line-height: 90px;
`;

const HeaderText = styled.p`
    line-height: 90px;
    margin: 0 0 0 20px;
    display: inline-block;
    font-size: 2rem;
`;

const Header = ({ title }) => (
  <Content as="header">
    <HeaderContent>
      <Image src={logo} />
      <HeaderText>Paweł Kosiec</HeaderText>
    </HeaderContent>
  </Content>
);

export default Header;
