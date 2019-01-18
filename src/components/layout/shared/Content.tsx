import styled from "styled-components";

interface ContentProps {
  padding?: string;
}

export const Content = styled("div")<ContentProps>`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: ${props => (props.padding ? props.padding : "40px")};
`;
