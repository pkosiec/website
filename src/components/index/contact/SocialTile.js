import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { TileLink, Tile } from "./Tile";

const Icon = styled(FontAwesomeIcon)`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
`;

export const SocialTile = ({ iconName, iconPrefix = "fab", url }) => (
  <Tile>
    <TileLink href={url} target="_blank" rel="noopener noreferrer">
      <Icon size="2x" icon={[iconPrefix, iconName]} />
    </TileLink>
  </Tile>
);