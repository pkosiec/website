import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TILE_DIMENSION = "140px";

const Tile = styled.div`
  display: inline-block;
  width: ${TILE_DIMENSION};
  height: ${TILE_DIMENSION};
  position: relative;
  vertical-align: middle;
  text-align: center;
  border: 1px solid #2b2b2b;
  transition: all ease-out 0.15s;

  &:hover {
    border-color: #504e4e;
  }

  &:focus,
  &:active {
    border-color: #585656;
    background: #2b2b2b;

    span {
      opacity: 1;
    }
  }

  & + & {
    margin-left: 25px;
  }
`;

const Icon = styled(FontAwesomeIcon)`
  margin: auto;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 20px;
  right: 0;
`;

const Caption = styled.span`
  position: absolute;
  bottom: 15px;
  left: 0;
  text-align: center;
  width: 100%;
  opacity: 0.6;
  transition: opacity ease-out 0.15s;
`;

const TileLink = styled.a`
  padding: 15px;
  width: 100%;
  height: 100%;
  display: block;
  text-align: center;
  text-decoration: none;
  color: #fff;
`;

const SocialTile = ({
  iconName,
  iconPrefix = "fab",
  name,
  url,
  highlighted,
}) => (
  <Tile highlighted={highlighted}>
    <TileLink href={url} target="_blank" rel="noopener noreferrer">
      <Icon size="2x" icon={[iconPrefix, iconName]} />
      <Caption>{name}</Caption>
    </TileLink>
  </Tile>
);

export default SocialTile;
