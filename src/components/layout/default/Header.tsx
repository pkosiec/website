import * as React from "react";
import { Link } from "gatsby";
import styled from "@config/styled";

import { Content } from "@components/layout/shared/Content";
import { Logo } from "@components/layout/default/Logo";
import { ThemeSwitcher } from "@components/layout/theme/ThemeSwitcher";

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

    <ThemeSwitcher />
  </Content>
);
