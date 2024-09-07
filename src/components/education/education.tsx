import "./education.css";
import educationData from "../../assets/education.json";
import { renderLogo } from "../utils";

const data: Education[] = educationData;

type Institute = {
  logo: string;
  name: string;
  location: string;
  link: string;
};

type Education = {
  id: number;
  institute: Institute;
  degree?: string;
  description: string;
  info?: string;
  years: string;
};

function renderEducation(education: Education): JSX.Element {
  return (
    <div
      className="timeline-card timeline-card-secondary col card"
      key={education.id}
    >
      <div className="timeline-head row">
        <div className="col">
          {renderLogo(
            education.institute.logo,
            education.institute.link
          )}
        </div>
        <div className="col">
          <p className="title">
            <b>{education.institute.name}</b>
          </p>
          <p className="location">{education.institute.location}</p>
          <p>
            <b>{education.degree}</b>
          </p>
          <div className="time">
            <div className="years">{education.years}</div>
          </div>
          <p>{education.info}</p>
          <p>{education.description}</p>
        </div>
      </div>
    </div>
  );
}

export function Education() {
  return (
    <div className="container">
      <div className="card">
        <div className="col">
          <div className="section">
            <h2>Education</h2>
            <div className="container">
              <div className="timeline">
                {data
                  .sort((a: Education, b: Education) => b.id - a.id)
                  .map((e: Education) => renderEducation(e))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
