import React from "react";
import styled from "styled-components";

import SocialTile from "./SocialTile";
import Section from "./Section";

const SocialTiles = ({ tiles, email }) => (
  <Section>
    <SocialTile
      key="email"
      highlighted
      name="Get in touch"
      iconName="envelope"
      iconPrefix="fa"
      url={`mailto:${email}`}
    />
    {tiles.map(tile => (
      <SocialTile
        key={tile.name}
        iconName={tile.icon}
        name={tile.name}
        url={tile.url}
      />
    ))}
  </Section>
);

export default SocialTiles;
