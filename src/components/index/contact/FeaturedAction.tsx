import * as React from "react";
import styled from "@config/styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Tile, TileLink } from "./Tile";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

const Icon = styled(FontAwesomeIcon)`
  position: absolute;
  top: 0;
  left: 30px;
  bottom: 0;
  margin-top: auto;
  margin-bottom: auto;
`;

const Caption = styled.p`
  display: block;
  text-align: center;
  width: 100%;
  margin: 0 0 0 25px;
`;

interface FeaturedActionProps {
  link: string;
  text: string;
  iconName: string;
  iconPrefix?: string;
}

export const FeaturedAction: React.FunctionComponent<FeaturedActionProps> = ({
  link,
  text,
  iconName,
  iconPrefix = "fa",
}) => (
  <Tile big width="250px" lineHeight="70px" highlighted as="li">
    <TileLink href={link}>
      <Icon size="2x" icon={[iconPrefix, iconName] as IconProp} />
      <Caption>{text}</Caption>
    </TileLink>
  </Tile>
);
