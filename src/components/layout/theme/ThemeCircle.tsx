import styled from "@config/styled";

const CIRCLE_DIMENSION_PX = 20;

interface CircleProps {
  background: string;
  left?: number;
  right?: number;
  top?: number;
  bottom?: number;
}

export const Circle = styled("span")<CircleProps>`
  display: inline-block;
  width: ${CIRCLE_DIMENSION_PX}px;
  height: ${CIRCLE_DIMENSION_PX}px;
  border-radius: ${CIRCLE_DIMENSION_PX}px;
  background: ${props => props.background};
  position: relative;
  left: ${props => (props.left ? props.left : 0)}px;
  right: ${props => (props.right ? props.right : 0)}px;
  bottom: ${props => (props.bottom ? props.bottom : 0)}px;
  top: ${props => (props.top ? props.top : "0")};
  transition: all ease-out 0.15s;
`;
