import styled from "@config/styled";
import { media } from "@config/responsive";

export const TextWrapper = styled.div`
  max-width: 65%;

  ${media.tablet`
  max-width: 80%;
  `}

  ${media.phone`
  max-width: 100%;
  `}
`;
