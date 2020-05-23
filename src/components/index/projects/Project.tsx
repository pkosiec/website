import * as React from "react";
import styled from "@config/styled";

const Box = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 7px;
  overflow: hidden;
  border: 1px solid #eee;
  border-color: ${props => props.theme.borderColor};
  transition: all ease-out 0.2s;
  :hover {
    transform: scale(1.02);
    box-shadow: 0px 0px 18px -8px ${props => props.theme.shadowColor};
  }

  :active,
  :focus {
    transform: scale(0.97);
    box-shadow: 0px 0px 25px -5px ${props => props.theme.shadowColor};
  }
`;

const LinkBlock = styled.a`
  width: 100%;
  height: 100%;
  display: block;
  text-decoration: none;
`;

const Header = styled.h3`
  color: ${props => props.theme.textColor};
  margin-bottom: 10px;
`;

const Description = styled.p`
  color: ${props => props.theme.textColor};
`;

interface ImageWrapperProps {
  backgroundColor?: string;
}

const ImageWrapper = styled.div<ImageWrapperProps>`
  background-color: #f6f6f6;
  min-height: 200px;
  position: relative;
  border-bottom: 1px solid ${props => props.theme.borderColor};
`;

const DescriptionWrapper = styled.div`
  padding: 30px;
`;

const Image = styled.img`
  position: absolute;
  margin: auto;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

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
        <ImageWrapper>
          <Image src={project.image} />
        </ImageWrapper>
        <DescriptionWrapper>
          <Header>{project.title}</Header>
          <Description>{project.description}</Description>
        </DescriptionWrapper>
      </LinkBlock>
    </Box>
  );
};
