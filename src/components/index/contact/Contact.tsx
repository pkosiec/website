import * as React from "react";
import styled from "@config/styled";

import { SocialTile } from "@components/index/contact/SocialTile";
import { Section } from "@components/layout/shared/Section";
import { FeaturedAction } from "@components/index/contact/FeaturedAction";

const TileList = styled.ul`
  list-style-type: none;
  margin: 0 -15px;
`;

export interface SocialMedia {
  name: string;
  url: string;
  icon: string;
}

export interface ContactProps {
  email: string;
  socialMedia: SocialMedia[];
}

export const Contact: React.FunctionComponent<ContactProps> = ({
  socialMedia,
  email,
}) => (
  <Section border={true}>
    <TileList>
      <FeaturedAction
        showCaption={true}
        text="Get in touch"
        link={`mailto:${email}`}
        iconName="envelope"
      />
      {socialMedia.map(item => (
        <SocialTile
          key={item.name}
          iconName={item.icon}
          name={item.name}
          url={item.url}
        />
      ))}
    </TileList>
  </Section>
);
