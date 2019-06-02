import * as React from "react";
import styled from "@config/styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { TileLink, Tile } from "@components/index/contact/Tile";

const Icon = styled(FontAwesomeIcon)`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
`;

export interface SocialLink {
  name: string;
  url: string;
  iconName: string;
  iconPrefix?: string;
  featured?: boolean;
}

export const SocialTile: React.FunctionComponent<SocialLink> = ({
  name,
  iconName,
  iconPrefix,
  featured = false,
  url,
}) => {
  if (!iconPrefix) {
    iconPrefix = "fab";
  }

  return (
    <Tile featured={featured}>
      <TileLink
        title={name}
        href={url}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon size="2x" icon={[iconPrefix, iconName] as IconProp} />
      </TileLink>
    </Tile>
  );
};
