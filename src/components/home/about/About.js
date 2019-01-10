import React from "react";
import styled from "styled-components";
import Section from "../../layout/Section";

import { ACCENT_COLOR } from "../../../constans/colors";
import { XS, SM } from "../../../config/responsive";

const AboutSection = styled.div`
  max-width: 60%;

  @media screen and (max-width: ${SM}) {
    max-width: 80%;
  }

  @media screen and (max-width: ${XS}) {
    max-width: 100%;
  }
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
  transition: all ease-out 0.15s;

  &:hover, &:focus {
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
    <AboutSection>
      <h1>Hi. I'm Paweł Kosiec.</h1>
      <P>
        I'm a Full-stack Developer located in Gliwice, Poland. Currently I am
        hired in SAP, where I develop{" "}
        <A href="https://kyma-project.io" target="_blank">
          Kyma
        </A>
        , an open source project. I write back-end services in{" "}
        <Highlight>Go</Highlight>, and modern front-ends using{" "}
        <Highlight>React.js</Highlight>. I work in Cloud-native environment,
        associated with <Highlight>microservices</Highlight> and extending{" "}
        <Highlight>Kubernetes</Highlight>.
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
