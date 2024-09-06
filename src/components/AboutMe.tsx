import aboutMeData from "../assets/aboutme.json";
type AboutMe = {
  free: number;
  hard: string;
  soft: string;
};
export function AboutMe() {
  return (
    <div className="container">
      <div className="card">
        <div className="details">
          <div className="card">
            <p className="free-text">{aboutMeData.free}</p>
          </div>
          <div className="card">
            <div className="title">
              <b>Hard skills</b>
            </div>
            <p>{aboutMeData.hard}</p>
          </div>
          <div className="card">
            <div className="title">
              <b>Soft skills</b>
            </div>
            <p>{aboutMeData.soft}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
