import styled from "styled-components";
import { media } from "../../../config/responsive";

const DEFAULT_TILE_DIMENSION = "100px";

interface TileProps {
  width?: string;
  height?: string;
  lineHeight?: string;
  highlighted?: boolean;
  big?: boolean;
}

export const Tile = styled("li")<TileProps>`
  width: ${props => (props.width ? props.width : DEFAULT_TILE_DIMENSION)};
  height: ${props => (props.height ? props.height : DEFAULT_TILE_DIMENSION)};
  display: inline-block;
  position: relative;
  margin: 15px;
  vertical-align: middle;
  line-height: ${props =>
    props.lineHeight ? props.lineHeight : DEFAULT_TILE_DIMENSION};
  text-align: center;
  border: 1px solid ${props => (props.highlighted ? "#e5e5e5" : "#2b2b2b")};
  transition: all ease-out 0.15s;

  &:hover {
    border-color: ${props => (props.highlighted ? "#ffcc00" : "#504e4e")};
    ${props =>
      props.highlighted &&
      `
    > * {
      color: #ffcc00;
    }
    `}
  }

  &:focus,
  &:active {
    border-color: ${props => (props.highlighted ? "#ffcc00" : "#585656")};
    background: #2b2b2b;

    span {
      opacity: 1;
    }
  }

  *:last-child {
    margin-bottom: auto;
  }

  ${media.phone`
    width: calc(${(props: TileProps) => (props.big ? "100%" : "50%")} - 30px);
  `}
`;

export const TileLink = styled.a`
  padding: 15px;
  width: 100%;
  height: 100%;
  display: block;
  text-align: center;
  text-decoration: none;
  color: #fff;
  transition: color ease-out 0.15s;
`;
