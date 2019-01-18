import styled from "@config/styled";

export const Link = styled.a`
  color: ${props => props.theme.textColor};
  text-decoration: none;
  border-bottom: 1px dotted ${props => props.theme.textColor};
  transition: all ease-out 0.15s;

  &:hover,
  &:focus {
    color: ${props => props.theme.accentColor};
    border-bottom: 1px dotted ${props => props.theme.accentColor};
  }

  &:active {
    opacity: 0.8;
  }
`;
