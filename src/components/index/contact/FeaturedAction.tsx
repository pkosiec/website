import * as React from "react";
import styled from "@config/styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

import { Tile, TileLink } from "@components/index/contact/Tile";

const Icon = styled(({ captionVisible, ...props }) => (
  <FontAwesomeIcon {...props} />
))<{ captionVisible: boolean }>`
  position: absolute;
  top: 0;
  left: ${props => (props.captionVisible ? "30px" : "0")};
  right: ${props => (props.captionVisible ? "auto" : "0")};
  bottom: 0;
  margin: auto;
`;

const Caption = styled.p`
  display: block;
  text-align: center;
  width: 100%;
  font-size: 1.1rem;
  margin: 0 0 0 25px;
`;

interface FeaturedActionProps {
  link: string;
  text: string;
  iconName: string;
  iconPrefix?: string;
  showCaption?: true;
}

export const FeaturedAction: React.FunctionComponent<FeaturedActionProps> = ({
  link,
  text,
  iconName,
  iconPrefix = "fa",
  showCaption = false,
}) => {
  const bigTile = showCaption;
  const tileWidth = showCaption ? "240px" : undefined;

  return (
    <Tile big={bigTile} width={tileWidth} highlighted={true} as="li">
      <TileLink href={link} title={text}>
        <Icon
          captionVisible={showCaption}
          size="2x"
          icon={[iconPrefix, iconName] as IconProp}
        />
        {showCaption && <Caption>{text}</Caption>}
      </TileLink>
    </Tile>
  );
};
