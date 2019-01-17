import React from "react";
import styled from "styled-components";
import { Section } from "../../layout/shared/Section";
import { media } from "../../../config/responsive";
import { Paragraph } from "../../layout/shared/Paragraph";
import { Highlight } from "../../layout/shared/Highlight";
import { Link } from "../../layout/shared/Link";

const TextWrapper = styled.div`
  max-width: 65%;

  ${media.tablet`
  max-width: 80%;
  `}

  ${media.phone`
  max-width: 100%;
  `}
`;

export const About = () => (
  <Section>
    <TextWrapper>
      <h1>Hi. I'm Paweł Kosiec.</h1>
      <Paragraph>
        I'm a Full-stack Developer located in Gliwice, Poland.
      </Paragraph>
      <Paragraph>
        Currently I&nbsp;work at SAP, where I&nbsp;develop{" "}
        <Link href="https://kyma-project.io" target="_blank">
          Kyma
        </Link>
        , an open source project. I&nbsp;write back-end services in{" "}
        <Highlight>Go</Highlight>, and modern front-ends using{" "}
        <Highlight>React.js</Highlight>. I&nbsp;work in Cloud-native
        environment, associated with <Highlight>microservices</Highlight> and
        extending <Highlight>Kubernetes</Highlight>.
      </Paragraph>
      <Paragraph>
        I&nbsp;have recently completed a master's in Computer Science at
        Silesian University of Technology.
      </Paragraph>
      <Paragraph>
        I'm open source and Cloud Native enthusiast. That's why I'm
        an&nbsp;co-organizer of the&nbsp;
        <Link href="https://www.meetup.com/GophersSilesia">
          Gophers Silesia
        </Link>{" "}
        meetup, which is a local community interested in Go & Cloud Native
        topics.
      </Paragraph>
    </TextWrapper>
  </Section>
);
