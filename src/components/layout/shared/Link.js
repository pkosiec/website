import styled from "styled-components";

import { ACCENT_COLOR } from "../../../config/colors";

export const Link = styled.a`
  color: #fff;
  text-decoration: none;
  border-bottom: 1px dotted #fff;
  transition: all ease-out 0.15s;

  &:hover,
  &:focus {
    color: ${ACCENT_COLOR};
    border-bottom: 1px dotted ${ACCENT_COLOR};
  }

  &:active {
    opacity: 0.8;
  }
`;
