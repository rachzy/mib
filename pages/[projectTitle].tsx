import { GetServerSideProps } from "next";
import Image from "next/image";
import { FunctionComponent } from "react";

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

interface IProps {
  project: IProject;
}

const ProjectPage: FunctionComponent<IProps> = ({ project }) => {
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

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { projectTitle } = context.query;
  const getProject = projects.filter(
    (project) =>
      project.title.toUpperCase() === projectTitle?.toString().toUpperCase()
  );
  return {
    props: {
      project: getProject[0],
    },
  };
};

export default ProjectPage;
