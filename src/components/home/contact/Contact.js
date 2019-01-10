import React from "react";

import SocialTile from "./SocialTile";
import Section from "../Section";
import ContactAction from "./ContactAction";

const Contact = ({ tiles, email }) => (
  <Section>
    <ContactAction
      key="email"
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

export default Contact;
