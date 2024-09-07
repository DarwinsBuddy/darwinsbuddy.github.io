import "./work.css";
import workData from "../../assets/work.json";
import { renderAchievement, renderIf, renderLogo, renderTag } from "../utils";
import {
  faMedal,
  faMicrochip,
  faPeopleRoof,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const data: Work[] = workData;

enum WorkType {
  Employement = "employement",
  SelfEmployement = "self-employement",
}

type Company = {
  logo: string;
  name: string;
  location: string;
  link?: string;
};

type Project = {
  company?: Company;
  name: string;
  description: string;
  link?: string;
};

interface Work {
  id: number;
  type: WorkType.Employement | string;
  tech?: string[];
  years: string;
  duration: string;
  achievements?: string[];
  projects?: Project[];
}

interface Employement extends Work {
  company: Company;
  department?: string;
  jobTitle: string;
  jobSubtitle?: string;
  scope?: string[];
}

interface SelfEmployement extends Work {
  link: string;
  logo: string;
  title: string;
  subTitle: string;
  companies: Company[];
}

function isEmployement(work: Work): work is Employement {
  return (work as Employement).type === WorkType.Employement;
}

function isSelfEmployement(work: Work): work is SelfEmployement {
  return (work as SelfEmployement).type === WorkType.SelfEmployement;
}

function renderProjects(projects?: Project[], logoSize = "6rem") {
  if (projects) {
    return (
      <div className="projects">
        {projects.map((p: Project, i: number) => (
          <div className="project" key={`project-${i}.${p.name}`}>
            <div className="side">
              {renderLogo(p.company?.logo, p.link, logoSize)}
            </div>
            <div className="side">
              <p>
                {renderIf(
                  () => p.link,
                  () => (
                    <a href={p.link} target="_blank">
                      <b>{p.name}</b>
                    </a>
                  ),
                  () => (
                    <b>{p.name}</b>
                  )
                )}
              </p>
              <p>{p.description}</p>
            </div>
          </div>
        ))}
      </div>
    );
  } else {
    return <></>;
  }
}

function renderScope(scope?: string[]) {
  if (scope) {
    return (
      <div className="">
        <h4>
          <FontAwesomeIcon icon={faPeopleRoof} /> Scope of Activities
        </h4>
        <div className="scope-of-activities">
          {scope.map((s: string, i: number) => (
            <div className="activity" key={`activity-${i}.${s}`}>
              {s}
            </div>
          ))}
        </div>
      </div>
    );
  } else {
    return <></>;
  }
}

function renderAchievements(achievements?: string[]) {
  if (achievements) {
    return (
      <div className="">
        <h4>
          <FontAwesomeIcon icon={faMedal} /> Achievements
        </h4>
        <div className="achievements">
          {achievements.map((a: string, i: number) =>
            renderAchievement(a, `${i}`)
          )}
        </div>
      </div>
    );
  } else {
    return <></>;
  }
}

function renderTech(tech?: string[]) {
  if (tech) {
    return (
      <div className="">
        <h4>
          <FontAwesomeIcon icon={faMicrochip} /> Technology
        </h4>
        <div className="tech">
          {tech.map((t: string, i: number) => renderTag(t, `${i}`, "tech", "tech"))}
        </div>
      </div>
    );
  } else {
    return <></>;
  }
}

function renderWork(work: Work): JSX.Element {
  if (isEmployement(work)) {
    return (
      <div
        className="timeline-card timeline-card-primary col card"
        key={work.id}
      >
        <div className="timeline-head">
          <div className="row">
            <div className="col">
              {renderLogo(work.company.logo, work.company.link, "5.5rem")}
            </div>
            <div className="work-header">
              <div className="col work-info">
                <p className="title">
                  <b>{work.company.name}</b>
                </p>
                <p className="location">{work.company.location}</p>
                <p className="title">
                  <b>{work.jobTitle}</b>
                </p>
                <p className="sub-title">{work.jobSubtitle}</p>
                <div className="time">
                  <div className="years">{work.years}</div>
                  <div className="duration">{work.duration}</div>
                </div>
              </div>
              <div className="achievements-container">{renderAchievements(work.achievements)}</div>
            </div>
          </div>
        </div>
        <div className="timeline-body row">
          <div className="col flex-grow-1">
            {renderProjects(work.projects)}
            <div className="mt-1">
              {renderScope(work.scope)}
              {renderTech(work.tech)}
            </div>
          </div>
        </div>
      </div>
    );
  } else if (isSelfEmployement(work)) {
    return (
      <div
        className="timeline-card timeline-card-primary col card"
        key={work.id}
      >
        <div className="timeline-head">
          <div className="row">
            <div className="col">
              {renderLogo(work.logo, work.link, "5.5rem")}
            </div>
            <div className="col">
              <p className="title">
                <b>{work.title}</b>
              </p>
              <p>{work.subTitle}</p>
            </div>
          </div>
        </div>
        <div className="timeline-body row">
          <div className="col flex-grow-1">
            <div className="projects-container">
              {renderProjects(work.projects, "3rem")}
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return <></>;
  }
}

function generateView(count: number) {
  return data
  .sort((a: Work, b: Work) => b.id - a.id)
  .slice(0, count)
  .map((w: Work) => renderWork(w));
}

export interface WorkProps {
  count?: number;
}

export function Work(props: WorkProps) {

  const [count, setCount] = useState(props.count || 100);

  return (
    <div className="container">
      <div className="card">
        <div className="section">
          <div className="col">
            <h2>Work Experience</h2>
            <div className="container">
              <div className="timeline">
                {generateView(count)}
                {renderIf(() => data.length > count,
                  () => <div className="button-link">
                      <a onClick={() => setCount(100)}>More...</a>
                    </div>,
                  () => <></>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
