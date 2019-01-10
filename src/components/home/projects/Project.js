import React from "react";
import styled from "styled-components";

const Box = styled.div`
    width: 350px;
`;

const LinkBlock = styled.a`
    width: 100%;
    height: 100%;
    display: block;
    padding: 15px;
    text-decoration: none;
    color: #fff;
`;

const Header = styled.h3`

`;

export const Project = ({ project }) => {
  return (
    <Box>
      <LinkBlock href={project.link}>
        <img src={project.image} />
        <h3>{project.title}</h3>
        <p>{project.description}</p>
      </LinkBlock>
    </Box>
  );
};
