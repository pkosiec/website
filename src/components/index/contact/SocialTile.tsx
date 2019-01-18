import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { TileLink, Tile } from "./Tile";
import {
  IconPrefix,
  IconName,
  IconProp,
} from "@fortawesome/fontawesome-svg-core";

const Icon = styled(FontAwesomeIcon)`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
`;

interface SocialTileProps {
  name: string;
  iconName: string;
  iconPrefix?: string;
  url: string;
}

export const SocialTile: React.FunctionComponent<SocialTileProps> = ({
  name,
  iconName,
  iconPrefix = "fab",
  url,
}) => {
  const iconProp: IconProp = [iconPrefix as IconPrefix, iconName as IconName];

  return (
    <Tile>
      <TileLink
        title={name}
        href={url}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon size="2x" icon={iconProp} />
      </TileLink>
    </Tile>
  );
};
