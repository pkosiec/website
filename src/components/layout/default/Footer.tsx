import * as React from "react";
import styled from "@config/styled";

import { Content } from "@components/layout/shared/Content";

const StyledFooter = styled.footer`
  width: 100%;
`;

const FooterText = styled.p`
  padding: 0px 0;
  margin: 0;
  color: ${props => props.theme.textColor};
  font-size: 0.7rem;
`;

interface FooterProps {
  text: string;
}

export const Footer: React.FunctionComponent<FooterProps> = ({ text }) => (
  <StyledFooter>
    <Content>
      <FooterText>{text}</FooterText>
    </Content>
  </StyledFooter>
);
