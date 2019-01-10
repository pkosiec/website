import React from "react";
import styled from "styled-components";

import SocialTile from "./SocialTile";
import Section from "../../layout/Section";
import ContactAction from "./ContactAction";

const TileList = styled.ul`
  list-style-type: none;
  margin: 0 -15px;
`;

const Contact = ({ tiles, email }) => (
  <Section>
    <TileList>
      <ContactAction iconName="envelope" iconPrefix="fa" email={email} />
      {tiles.map(tile => (
        <SocialTile
          key={tile.name}
          iconName={tile.icon}
          name={tile.name}
          url={tile.url}
        />
      ))}
    </TileList>
  </Section>
);

export default Contact;
