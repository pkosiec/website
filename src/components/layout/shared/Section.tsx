import * as React from "react";
import styled from "@config/styled";

import { Content } from "@components/layout/shared/Content";

interface SectionWrapperProps {
  minHeight?: string;
  background?: string;
  border?: boolean;
}

const SectionWrapper = styled("section")<SectionWrapperProps>`
  width: 100%;
  border-bottom-width: ${props => (props.border ? "1" : "0")}px;
  border-bottom-style: solid;
  border-bottom-color: ${props => props.theme.borderColor};
  min-height: ${props => (props.minHeight ? props.minHeight : "auto")};
  background: ${props =>
    props.background ? props.background : props.theme.backgroundColor};
  display: flex;
  align-items: center;
  justify-content: center;
`;

interface SectionProps {
  height?: string;
  background?: string;
  className?: string;
  minHeight?: string;
  border?: boolean;
}

export const Section: React.FunctionComponent<SectionProps> = ({
  className,
  background,
  minHeight,
  children,
  border = false,
}) => (
  <SectionWrapper
    className={className}
    background={background}
    minHeight={minHeight}
    border={border}
  >
    <Content>{children}</Content>
  </SectionWrapper>
);
