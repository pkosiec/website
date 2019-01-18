import React from "react";
import { DefaultLayout } from "../components/layout/DefaultLayout";
import { Section } from "../components/layout/shared/Section";
import { Headline1 } from "../components/layout/shared/Headline";
import { Link } from "../components/layout/shared/Link";
import { Paragraph } from "../components/layout/shared/Paragraph";

const NotFoundPage = () => (
  <DefaultLayout pageTitle="404">
    <Section>
      <Headline1>The page you're trying to reach doesn't exist.</Headline1>
      <Paragraph>
        Go back to the <Link href="/">home page</Link>.
      </Paragraph>
    </Section>
  </DefaultLayout>
);

export default NotFoundPage;
