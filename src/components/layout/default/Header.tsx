import * as React from "react";
import styled from "@config/styled";

import logo from "../../../assets/logo.svg";
import { Content } from "../shared/Content";
import { Logo } from "./Logo";
import { Link } from "gatsby";

interface HeaderProps {
  logoAltText: string;
}

const BlockLink = styled(Link)`
  display: inline-block;
`;

export const Header: React.FunctionComponent<HeaderProps> = ({
  logoAltText,
}) => (
  <Content as="header" padding="40px 40px 0 40px">
    <BlockLink to="/" title={logoAltText}>
      <Logo />
    </BlockLink>
  </Content>
);
