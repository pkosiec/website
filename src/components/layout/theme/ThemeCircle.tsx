import styled from "@config/styled";

const CIRCLE_DIMENSION_PX = 20;

interface CircleProps {
  background: string;
  left?: string;
  right?: string;
  top?: string;
  bottom?: string;
}

export const Circle = styled("span")<CircleProps>`
  display: inline-block;
  width: ${CIRCLE_DIMENSION_PX}px;
  height: ${CIRCLE_DIMENSION_PX}px;
  border-radius: ${CIRCLE_DIMENSION_PX}px;
  background: ${props => props.background};
  position: relative;
  left: ${props => (props.left ? props.left : "0")};
  right: ${props => (props.right ? props.right : "0")};
  bottom: ${props => (props.bottom ? props.bottom : "0")};
  top: ${props => (props.top ? props.top : "0")};
`;
