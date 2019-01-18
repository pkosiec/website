import React from "react";
import styled from "styled-components";
import { Section } from "../../layout/shared/Section";
import { media } from "../../../config/responsive";
import { Paragraph } from "../../layout/shared/Paragraph";
import { Highlight } from "../../layout/shared/Highlight";
import { Link } from "../../layout/shared/Link";
import { Headline1 } from "../../layout/shared/Headline";

const TextWrapper = styled.div`
  max-width: 65%;

  ${media.tablet`
  max-width: 80%;
  `}

  ${media.phone`
  max-width: 100%;
  `}
`;

//TODO: Remove hardcoded text and read content from Markdown
export const About: React.FunctionComponent = () => (
  <Section>
    <TextWrapper>
      <Headline1>Hi. I'm Paweł Kosiec.</Headline1>
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
        <Highlight>React.js</Highlight>. I&nbsp;work in cloud-native
        environment, associated with <Highlight>microservices</Highlight> and
        extending <Highlight>Kubernetes</Highlight>.
      </Paragraph>
      <Paragraph>
        I&nbsp;have recently completed a master's in Computer Science at
        Silesian University of Technology.
      </Paragraph>
      <Paragraph>
        I'm open source and cloud-native enthusiast. That's why I'm
        an&nbsp;co-organizer of the&nbsp;
        <Link href="https://www.meetup.com/GophersSilesia" target="_blank">
          Gophers Silesia
        </Link>{" "}
        meetup, which is a local community interested in Go & cloud-native
        topics.
      </Paragraph>
    </TextWrapper>
  </Section>
);
