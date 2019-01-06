import React from "react";
import styled from "styled-components";

import { BACKGROUND_COLOR } from "../../constans/colors";
import Content from "../layout/Content";

const SectionWrapper = styled.section`
  width: 100%;
  border-top: 1px solid #333;
  min-height: 60vh;
  background: ${props =>
    props.background ? props.background : BACKGROUND_COLOR};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Section = ({ background, children }) => (
  <SectionWrapper background={background}>
    <Content>{children}</Content>
  </SectionWrapper>
);

export default Section;
