import { ReactNode } from "react";
import laptop from "../assets/laptop.png";
import WebsiteEnd from "./WebsiteEnd";

interface ProjectChildrenProp {
  name: string;
  src: string;
  children: ReactNode;
}
const ProjectChildren: React.FC<ProjectChildrenProp> = ({
  name,
  src,
  children,
}) => {
  return (
    <div className="row justify-content-center align-items-center">
      <div className="col-md-8 mt-4">
        <div className="primary-border d-flex align-items-center mt-2">
          <div className="projectImageDisplay text-center mr-5">
            <a href={src} target="_blank">
              <img
                className="col-auto"
                src={laptop}
                alt={name}
                width="128px"
                height="128px"
              />
            </a>
          </div>
          <div className="projectContentDisplay text-center">
            <h2>{name}</h2>
            <p>{children}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
function Projects() {
  return (
    <div
      id="projects"
      className="projectGrid primary-theme container-sm vh-100 "
    >
      <div className="text-center row justify-content-center align-items-center">
        <h1 className="mt-2">projects</h1>
        <p>a full overview of my past projects can be found on my github!</p>
      </div>
      <ProjectChildren name="musicfinder2000" src="https://musicfinder2000.netlify.app/">
      feeling bored? generate some new music today! we use ai and ml and all the good stuff i swear!
      </ProjectChildren>
      <ProjectChildren
        name="website portfolio"
        src="http://jsndong03.42web.io/?i=2"
      >
        well.. your looking at it!
      </ProjectChildren>
      <ProjectChildren name="cavalier connect" src="https://pma-b11-609ff8c02e6c.herokuapp.com/">
        a pma web application that utilizes django, s3 file storage, google auth, and other api endpoints.
      </ProjectChildren>
    </div>
  );
}

export default Projects;
