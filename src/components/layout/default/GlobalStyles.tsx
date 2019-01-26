import { createGlobalStyle } from "@config/styled";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "normalize.css";

export const GlobalStyles = createGlobalStyle`
  html body {
    background-color: ${props => props.theme.backgroundColor};
    color: ${props => props.theme.textColor};
    transition: all ease-out 0.15s;
    transition-property: background-color, color;
  }
`;
