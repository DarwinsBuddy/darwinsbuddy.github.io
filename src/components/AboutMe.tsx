import aboutMeData from "../assets/aboutme.json";
type AboutMe = {
  free: number;
  hard: string;
  soft: string;
};
export function AboutMe() {
  return (
    <div className="container">
      <div className="card" key="aboutMe">
        <div className="details">
          <h2>About Me</h2>
          <p className="free-text">{aboutMeData.free}</p>
          <h3>Hard skills</h3>
          <p>{aboutMeData.hard}</p>
          <h3>Soft skills</h3>
          <p>{aboutMeData.soft}</p>
        </div>
      </div>
    </div>
  );
}
