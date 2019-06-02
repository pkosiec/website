import * as React from "react";

import { DefaultLayout } from "@components/layout/DefaultLayout";
import { Section } from "@components/layout/shared/Section";
import { StaticQuery, graphql } from "gatsby";
import { MarkdownWrapper } from "@components/layout/shared/Markdown";
import { TextWrapper } from "@components/layout/shared/TextWrapper";

const NotFoundPage: React.FunctionComponent = () => (
  <DefaultLayout pageTitle="404">
    <Section>
      <TextWrapper>
        <StaticQuery
          query={contentQuery}
          // tslint:disable-next-line:jsx-no-lambda
          render={data => {
            const html = data.markdownRemark.html;
            return <MarkdownWrapper html={html} />;
          }}
        />
      </TextWrapper>
    </Section>
  </DefaultLayout>
);

const contentQuery = graphql`
  query NotFoundContentQuery {
    markdownRemark(frontmatter: { title: { eq: "Not found" } }) {
      html
    }
  }
`;

export default NotFoundPage;
