import * as React from "react";
import styled from "@config/styled";

import { media } from "@config/responsive";
import { SocialTile, SocialLink } from "@components/index/contact/SocialTile";
import { Section } from "@components/layout/shared/Section";

const TileList = styled.ul`
  list-style-type: none;
  margin: 0 -20px;

  ${media.phone`
    margin: 0;
  `}
`;

export interface ContactProps {
  socialLinks: SocialLink[];
}

export const Contact: React.FunctionComponent<ContactProps> = ({
  socialLinks,
}) => (
  <Section border={true}>
    <TileList>
      {socialLinks.map(item => (
        <SocialTile
          key={item.name}
          iconName={item.iconName}
          iconPrefix={item.iconPrefix}
          name={item.name}
          url={item.url}
          featured={item.featured}
        />
      ))}
    </TileList>
  </Section>
);
