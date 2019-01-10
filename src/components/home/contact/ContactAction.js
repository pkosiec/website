import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Tile, TileLink } from "./Tile";

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

const ContactAction = ({ email }) => (
    <Tile big width="250px" lineHeight="70px" highlighted as="li">
      <TileLink href={`mailto:${email}`}>
        <Icon size="2x" icon="envelope" />
        <Caption>Get in touch</Caption>
      </TileLink>
    </Tile>
);

export default ContactAction;
