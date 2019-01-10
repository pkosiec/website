import styled from "styled-components";

const Content = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: ${props => props.padding ? props.padding : "40px"};
`;

export default Content;