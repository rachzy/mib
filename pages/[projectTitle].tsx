import Image from "next/image";
import { useRouter } from "next/router";
import { FunctionComponent, useState } from "react";

import projects from "../asset/projects.json";
import Footer from "../components/Footer/Footer";

import MainWrapper from "../components/MainWrapper/MainWrapper";
import Menu from "../components/Menu/Menu";
import ParallelogramContainer from "../components/ParallelogramContainer/ParallelogramContainer";

interface IProject {
  id: number;
  title: string;
  description: string;
  imgSrc: string;
}

const ProjectPage: FunctionComponent = () => {
  const router = useRouter();
  const { query } = router;

  if(!query || !query.projectTitle) return null;

  const {projectTitle} = query;

  if (!projectTitle) {
    return null;
  }

  const project = projects.filter(
    (project: IProject) =>
      project.title.toUpperCase() === projectTitle?.toString().toUpperCase()
  )[0];

  return (
    <MainWrapper centered={true} fadeIn={true}>
      <Menu elements={projects} displayLogo={true} />
      <ParallelogramContainer size={"large"}>
        <div style={{ backgroundColor: "#d1d2d3" }}>
          <div>
            <h1 style={{ color: "black" }}>{project.title}</h1>
            <Image
              src={require(`../asset/images/${project.imgSrc}`)}
              alt={project.title}
              objectFit={"contain"}
              quality={100}
            />
          </div>
        </div>
        <div style={{ backgroundColor: "#111" }}>
          <div>
            <p>{project.description}</p>
          </div>
        </div>
      </ParallelogramContainer>
      <Footer />
    </MainWrapper>
  );
};

export default ProjectPage;
