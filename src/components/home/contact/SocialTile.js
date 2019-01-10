import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { TileLink, Tile } from "./Tile";

const Icon = styled(FontAwesomeIcon)`
  margin: auto;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`;

const SocialTile = ({
  iconName,
  iconPrefix = "fab",
  url,
}) => (
  <Tile>
    <TileLink href={url} target="_blank" rel="noopener noreferrer">
      <Icon size="2x" icon={[iconPrefix, iconName]} />
    </TileLink>
  </Tile>
);

export default SocialTile;
