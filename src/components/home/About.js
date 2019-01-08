import React from "react";
import styled from "styled-components";
import Section from "./Section";

import {ACCENT_COLOR} from "../../constans/colors";

const AboutSection = styled.div`
  max-width: 60%;
`;

const P = styled.p`
  margin: 0;
  line-height: 1.9em;
  font-size: 1.2rem;
  margin-bottom: 10px; 
`;

const A = styled.a`
  color: #fff;
  text-decoration: none;
  border-bottom: 1px dotted #fff;

  &:hover {
    color: ${ACCENT_COLOR};
    border-bottom: 1px solid ${ACCENT_COLOR};
  }
`;

const Strong = styled.strong`
  font-weight: bold;
  color: ${ACCENT_COLOR};
`;

const About = () => (
  <Section>
    <AboutSection>
      <h1>Hi. I'm Paweł Kosiec.</h1>
      <P>
        I'm a Full-stack Developer located in Gliwice, Poland. Currently I am
        hired in SAP, where I develop{" "}
        <A href="https://kyma-project.io" target="_blank">
          Kyma
        </A>
        , an open source project. I write back-end services in{" "}
        <Strong>Go</Strong>, and modern front-ends using{" "}
        <Strong>React.js</Strong>. I work in Cloud-native environment,
        associated with <Strong>microservices</Strong> and extending <Strong>Kubernetes</Strong>.
      </P>
      <P>
        I have recently completed a master's in Computer Science at Silesian
        University of Technology.
      </P>
      <P>
        I'm open source & cloud native enthusiast. That's why I'm co-organizer
        of a local Go & Cloud Native meetup, <A href="">Gophers Silesia</A> in
        Katowice.
      </P>
    </AboutSection>
  </Section>
);

export default About;
