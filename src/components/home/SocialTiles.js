import React from "react";
import styled from "styled-components";

import SocialTile from "./SocialTile";
import Section from "./Section";

const SocialTiles = ({ tiles }) => (
  <Section>
      <h1>Social media</h1>
    {tiles.map(tile => (
      <SocialTile key={tile.name} icon={tile.icon} name={tile.name} url={tile.url} />
    ))}
  </Section>
);

export default SocialTiles;
