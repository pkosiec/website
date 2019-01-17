import React from "react";
import styled from "styled-components";
import Section from "../../layout/Section";

import { ACCENT_COLOR } from "../../../config/colors";
import { XS, SM } from "../../../config/responsive";

const TextWrapper = styled.div`
  max-width: 65%;

  @media screen and (max-width: ${SM}) {
    max-width: 80%;
  }

  @media screen and (max-width: ${XS}) {
    max-width: 100%;
  }
`;

const P = styled.p`
  margin: 0 0 1em 0;
  line-height: 1.9em;
  font-size: 1.1rem;

  :last-of-type {
    margin: 0;
  }
`;

const A = styled.a`
  color: #fff;
  text-decoration: none;
  border-bottom: 1px dotted #fff;
  transition: all ease-out 0.15s;

  &:hover,
  &:focus {
    color: ${ACCENT_COLOR};
    border-bottom: 1px dotted ${ACCENT_COLOR};
  }

  &:active {
    opacity: 0.8;
  }
`;

const Highlight = styled.span`
  font-weight: bold;
`;

const About = () => (
  <Section>
    <TextWrapper>
      <h1>Hi. I'm Paweł Kosiec.</h1>
      <P>I'm a Full-stack Developer located in Gliwice, Poland.</P>
      <P>
        Currently I&nbsp;work at SAP, where I&nbsp;develop{" "}
        <A href="https://kyma-project.io" target="_blank">
          Kyma
        </A>
        , an open source project. I&nbsp;write back-end services in{" "}
        <Highlight>Go</Highlight>, and modern front-ends using{" "}
        <Highlight>React.js</Highlight>. I&nbsp;work in Cloud-native
        environment, associated with <Highlight>microservices</Highlight> and
        extending <Highlight>Kubernetes</Highlight>.
      </P>
      <P>
        I&nbsp;have recently completed a master's in Computer Science at
        Silesian University of Technology.
      </P>
      <P>
        I'm open source and Cloud Native enthusiast. That's why I'm
        an&nbsp;co-organizer of the&nbsp;
        <A href="https://www.meetup.com/GophersSilesia">Gophers Silesia</A>{" "}
        meetup, which is a local community interested in Go & Cloud Native
        topics.
      </P>
    </TextWrapper>
  </Section>
);

export default About;
