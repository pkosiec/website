import { createGlobalStyle } from "styled-components";
import "minireset.css/minireset.min.css";

import { BACKGROUND_COLOR } from "../../constans/colors";

const GlobalStyles = createGlobalStyle`
  body {
    background: ${BACKGROUND_COLOR};
  }
`;

export default GlobalStyles;
