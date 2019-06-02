import * as React from "react";
import styled from "@config/styled";

const Markdown = styled.div`
  p {
    margin: 0 0 1em 0;
    line-height: 1.9em;
    font-size: 1.1rem;

    :last-of-type {
      margin: 0;
    }
  }

  a {
    color: ${props => props.theme.textColor};
    text-decoration: none;
    border-bottom: 1px dotted ${props => props.theme.textColor};
    transition: all ease-out 0.15s;
    transition-property: color, border-color;

    &:hover,
    &:focus {
      color: ${props => props.theme.accentColor};
      border-bottom: 1px dotted ${props => props.theme.accentColor};
    }

    &:active {
      opacity: 0.8;
    }
  }
`;

export interface MarkdownWrapperProps {
  html: string;
}

export const MarkdownWrapper: React.FunctionComponent<MarkdownWrapperProps> = ({
  html,
}) => <Markdown dangerouslySetInnerHTML={{ __html: html }} />;
