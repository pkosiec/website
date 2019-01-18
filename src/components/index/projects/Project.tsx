import * as React from "react";
import styled from "@config/styled";

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

const Header = styled.h3``;

export interface Project {
  title: string;
  description: string;
  link: string;
  image: string;
}

interface ProjectProps {
  project: Project;
}

export const Project: React.FunctionComponent<ProjectProps> = ({ project }) => {
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
