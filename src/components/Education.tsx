import "./Education.css";
import educationData from "../assets/education.json";
import { renderLogo } from "./utils";

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
    <div className="card col" key={education.id}>
      <div className="row">
        <div className="col">
          {renderLogo(education.institute.logo, education.institute.link, "4.5rem")}
          <div className="time">
            <p>{education.years}</p>
          </div>
        </div>
        <div className="col">
          <p className="title">
            <b>{education.institute.name}</b>
          </p>
          <p className="location">{education.institute.location}</p>
          <p>
            <b>{education.degree}</b>
          </p>
          <p>{education.info}</p>
          <p>{education.description}</p>
        </div>
      </div>
      <div className="row">
        <div className="col"></div>
      </div>
    </div>
  );
}

export function Education() {
  return (
    <div className="col">
      <div className="container">
        <h3>Education</h3>
      </div>
      <div className="container">
        {data
          .sort((a: Education, b: Education) => b.id - a.id)
          .map((e: Education) => renderEducation(e))}
      </div>
    </div>
  );
}
