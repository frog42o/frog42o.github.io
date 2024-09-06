import Skill from "./Skill";

const skills = [
  "html/css",
  "javascript",
  "react",
  "node.js",
  "sql",
  "git/github",
  "java",
  "python",
  "vscode",
  "databases",
  "testing & integration",
];

const SkillGrid = () => {
  return (
    <div className="skill-grid">
      {skills.map((skill, index) => (
        <Skill key={index} skillName={skill} />
      ))}
    </div>
  );
};

interface AboutMeProps {
  style: React.CSSProperties;
  content: string;
}

function AboutMe({ style, content }: AboutMeProps) {
  return (
    <div id="aboutMe" className="primary-theme container-sm vh-100" style = {style}>
      <div className="row justify-content-center align-items-start aboutme-header">
        <h2 className="mt-3 text-center">about me</h2>
        <div className="desc mt-2 text-center">cs @ uva</div>
      </div>
      <div className="aboutme-mainbox row justify-content-center align-items-start">
        <div className="aboutmeDiv col-md-5 mt-4">
          <h2 className="mt-3 text-center">a little about myself</h2>
          <p className="text-center">
            {content || "hello, my name is jason dong. i am a student at the university of "+
            "virginia studying computer science in the school of arts and "+
            "science. my projected graduation date is the spring of 2026. i am "+
            "interested in software engineering, software development, and "+
            "databases. outside of academics, i enjoy playing basketball, "+
            "cooking, and being involved in various cio's @ uva, such as chinese "+
            "student association and christian on campus."}
          </p>
        </div>
        <div className="skillsDiv col-md-5 mt-4">
          <h2 className="mt-3 text-center">skills</h2>
          <SkillGrid />
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
