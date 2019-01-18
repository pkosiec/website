import styled from "@config/styled";
import { media } from "../../../config/responsive";

const DEFAULT_TILE_DIMENSION = "75px";

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
  line-height: ${props => (props.lineHeight ? props.lineHeight : "45px")};
  text-align: center;
  border: 1px solid
    ${props =>
      props.highlighted ? props.theme.tileColor : props.theme.tileBorderColor};
  border-radius: 999px;
  transition: all ease-out 0.15s;

  &:hover {
    border-color: ${props =>
      props.highlighted ? props.theme.accentColor : props.theme.borderActive};
    ${props =>
      props.highlighted &&
      `
    > * {
      color: ${props.theme.accentColor};
    }
    `}
  }

  &:focus,
  &:active {
    border-color: ${props =>
      props.highlighted ? props.theme.accentColor : props.theme.borderActive};
    background: ${props => props.theme.backgroundActive};

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
  color: ${props => props.theme.tileColor};
  transition: color ease-out 0.15s;
`;
