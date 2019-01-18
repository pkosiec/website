import { createGlobalStyle } from "styled-components";
import "normalize.css";
import "@fortawesome/fontawesome-svg-core/styles.css";

import { BACKGROUND_COLOR } from "../../../config/colors";

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${BACKGROUND_COLOR};
  }
`;
