import styled, { css } from "@config/styled";
import { media } from "@config/responsive";
import { TileStateType } from "@config/themes";
import { ThemedStyledProps } from "styled-components";

const DEFAULT_TILE_DIMENSION = "70px";

interface TileProps {
  width?: string;
  height?: string;
  lineHeight?: string;
  featured?: boolean;
  big?: boolean;
}

export const Tile = styled("li")<TileProps>`
  width: ${props => (props.width ? props.width : DEFAULT_TILE_DIMENSION)};
  height: ${props => (props.height ? props.height : DEFAULT_TILE_DIMENSION)};
  display: inline-block;
  position: relative;
  vertical-align: middle;
  text-align: center;
  border: 1px solid transparent;
  border-radius: 70px;
  background-color: transparent;
  transition: all ease-out 0.15s;
  transition-property: background-color, border-color;
  ${props => getTileStyles(props, TileStateType.INITIAL)}

  &:hover {
    ${props => getTileStyles(props, TileStateType.HOVER)}
  }

  &:focus,
  &:active {
    ${props => getTileStyles(props, TileStateType.ACTIVE)}

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
  border: 0;
  transition: color ease-out 0.15s;
`;

function getTileStyles(
  props: ThemedStyledProps<any, any> & TileProps,
  type: TileStateType,
) {
  const tileStyle = props.featured
    ? props.theme.featuredTile
    : props.theme.tile;

  const styles = tileStyle[TileStateType[type]];
  console.log(styles);
  return css`
    border-color: ${styles.borderColor};
    background-color: ${styles.backgroundColor};
    > * {
      color: ${styles.color};
    }
  `;
}
