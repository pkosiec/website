import * as React from "react";

import styled from "@config/styled";
import { media } from "@config/responsive";
import { Section } from "@components/layout/shared/Section";
import { Paragraph } from "@components/layout/shared/Paragraph";
import { Highlight } from "@components/layout/shared/Highlight";
import { Link } from "@components/layout/shared/Link";
import { Headline1 } from "@components/layout/shared/Headline";

const TextWrapper = styled.div`
  max-width: 65%;

  ${media.tablet`
  max-width: 80%;
  `}

  ${media.phone`
  max-width: 100%;
  `}
`;

// TODO: Remove hardcoded text and read content from Markdown
export const About: React.FunctionComponent = () => (
  <Section>
    <TextWrapper>
      <Headline1>Hi. I'm Paweł Kosiec.</Headline1>
      <Paragraph>
        I'm a&nbsp;Full-stack Developer located in Gliwice, Poland.
      </Paragraph>
      <Paragraph>
        Currently I&nbsp;work at SAP, where I&nbsp;develop{" "}
        <Link href="https://kyma-project.io" target="_blank">
          Kyma
        </Link>
        , an&nbsp;open source project. I&nbsp;write back-end services in{" "}
        <Highlight>Go</Highlight>, and modern front-ends using{" "}
        <Highlight>React.js</Highlight>. I&nbsp;work in cloud-native
        environment, associated with <Highlight>microservices</Highlight> and
        extending <Highlight>Kubernetes</Highlight>.
      </Paragraph>
      <Paragraph>
        In 2018 I&nbsp;have completed a&nbsp;master's in Computer Science at
        Silesian University of Technology.
      </Paragraph>
      <Paragraph>
        I'm open source and cloud-native enthusiast. That's why I'm
        an&nbsp;co-organizer of the&nbsp;
        <Link href="https://www.meetup.com/GophersSilesia" target="_blank">
          Gophers Silesia
        </Link>{" "}
        meetup, which is a&nbsp;local community interested in Go & cloud-native
        topics.
      </Paragraph>
    </TextWrapper>
  </Section>
);
