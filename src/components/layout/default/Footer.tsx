import React from "react";
import styled from "styled-components";
import { Content } from "../shared/Content";

const StyledFooter = styled.footer`
  width: 100%;
`;

const FooterText = styled.p`
  padding: 0px 0;
  margin: 0;
  color: #ccc;
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
