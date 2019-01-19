import { createGlobalStyle } from "@config/styled";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "normalize.css";

export const GlobalStyles = createGlobalStyle`
  html body {
    background: ${props => props.theme.backgroundColor};
    color: ${props => props.theme.textColor};
  }
`;
