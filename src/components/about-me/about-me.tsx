import "./about-me.css";
import aboutMeData from "../../assets/aboutme.json";
import { renderTag } from "../utils";
type AboutMe = {
  free: number;
  hard: string;
  soft: string;
};
export function AboutMe() {
  return (
    <div className="aboutme col">
      <div className="free-text col">
        <p>{aboutMeData.free}</p>
      </div>
      <div className="skills col">
        <div className="skill-container">
          <p><b>Hard skills</b></p>
          <div className="row skill-tags">
            {aboutMeData.hard.map((t, i) =>
              renderTag(t, `${i}`, "tag-neutral", "hard")
            )}
          </div>
        </div>
        <div className="skill-container">
          <p><b>Soft skills</b></p>
          <div className="row skill-tags">
            {aboutMeData.soft.map((t, i) =>
              renderTag(t, `${i}`, "tag-neutral", "soft")
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
