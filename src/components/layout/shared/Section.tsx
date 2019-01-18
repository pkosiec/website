import React from "react";
import styled from "styled-components";

import { BACKGROUND_COLOR } from "../../../config/colors";
import { Content } from "./Content";

interface SectionWrapperProps {
  minHeight?: string;
  background?: string;
}

const SectionWrapper = styled("section")<SectionWrapperProps>`
  width: 100%;
  border-bottom: 1px solid #333;
  min-height: ${props => (props.minHeight ? props.minHeight : "auto")};
  background: ${props =>
    props.background ? props.background : BACKGROUND_COLOR};
  display: flex;
  align-items: center;
  justify-content: center;
`;

interface SectionProps {
  height?: string;
  background?: string;
  className?: string;
  minHeight?: string;
}

export const Section: React.FunctionComponent<SectionProps> = ({
  className,
  background,
  minHeight,
  children,
}) => (
  <SectionWrapper
    className={className}
    background={background}
    minHeight={minHeight}
  >
    <Content>{children}</Content>
  </SectionWrapper>
);
