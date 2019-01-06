import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Section from "./Section";

const ContactButton = styled.a`
  border: 1px solid #fff;
  width: auto;
  color: #fff;
  display: inline-block;
  padding: 10px 30px;
  text-decoration: none;
`;

const Icon = styled(FontAwesomeIcon)`
  margin-right: 5px;
  display: inline-block;
`;

const ContactAction = ({ email }) => (
  <Section>
    <h1>Get in touch</h1>
    <ContactButton href={`mailto:${email}`}>
      <Icon size="1x" icon="envelope" /> Say hi
    </ContactButton>
  </Section>
);

export default ContactAction;
