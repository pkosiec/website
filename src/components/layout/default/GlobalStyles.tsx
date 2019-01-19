import { createGlobalStyle } from "@config/styled";
import "normalize.css";
import "@fortawesome/fontawesome-svg-core/styles.css";

export const GlobalStyles = createGlobalStyle`
  html body {
    background: ${props => props.theme.backgroundColor};
    color: ${props => props.theme.textColor};
  }
`;
