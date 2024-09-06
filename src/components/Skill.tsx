import { ReactNode } from "react";

interface SkillProp {
  skillName: string;
}
const Skill: React.FC<SkillProp> = ({ skillName }) => {
  const sWidth = skillName.length * 10;
  return <div className="skill"> {skillName}</div>;
};
export default Skill;
