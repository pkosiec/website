import React from "react";
import styled from "styled-components";

import { BACKGROUND_COLOR } from "../../../config/colors";
import { Content } from "./Content";

const SectionWrapper = styled.section`
  width: 100%;
  border-bottom: 1px solid #333;
  min-height: ${props => (props.height ? props.height : "auto")};
  background: ${props =>
    props.background ? props.background : BACKGROUND_COLOR};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Section = ({
  className,
  background,
  borderColor,
  height,
  children,
}) => (
  <SectionWrapper
    className={className}
    background={background}
    borderColor={borderColor}
    height={height}
  >
    <Content>{children}</Content>
  </SectionWrapper>
);
