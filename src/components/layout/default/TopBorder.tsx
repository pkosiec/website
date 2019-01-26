import styled from "@config/styled";

export const TopBorder = styled.div`
  width: 100%;
  display: block;
  height: 3px;
  background-color: ${props => props.theme.accentColor};
  transition: background-color ease-out 0.15s;
`;
