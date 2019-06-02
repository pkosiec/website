import * as React from "react";
import styled from "@config/styled";

import { SocialTile, SocialLink } from "@components/index/contact/SocialTile";
import { Section } from "@components/layout/shared/Section";

const TileList = styled.ul`
  list-style-type: none;
  margin: 0 -15px;

  li + li {
    margin-left: 15px;
  }
`;

export interface ContactProps {
  email: string;
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
