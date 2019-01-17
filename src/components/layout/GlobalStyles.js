import { createGlobalStyle } from "styled-components";
import "normalize.css";

import { BACKGROUND_COLOR } from "../../config/colors";

const GlobalStyles = createGlobalStyle`
  body {
    background: ${BACKGROUND_COLOR};
  }
`;

export default GlobalStyles;
