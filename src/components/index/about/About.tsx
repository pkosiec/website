import * as React from "react";
import { StaticQuery, graphql } from "gatsby";
import { Section } from "@components/layout/shared/Section";
import { MarkdownWrapper } from "@components/layout/shared/Markdown";
import { TextWrapper } from "@components/layout/shared/TextWrapper";

export const About: React.FunctionComponent = () => (
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
);

const contentQuery = graphql`
  query AboutContentQuery {
    markdownRemark(frontmatter: { title: { eq: "About me" } }) {
      html
    }
  }
`;
