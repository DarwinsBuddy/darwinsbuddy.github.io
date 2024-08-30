import "./Work.css";
import workData from "../assets/work.json";

const data: Work[] = workData;

enum WorkType {
  Employement = "employement",
  SelfEmployement = "self-employement",
}

type Company = {
  logo: string;
  name: string;
  location: string;
};

type Project = {
  company?: Company;
  name: string;
  description: string;
};

type Employement = {
  id: number;
  type: WorkType.Employement;
  company: Company;
  department: string;
  jobTitle: string;
  jobSubtitle: string;
  years: string;
  duration: string;
  achievements: string[];
  projects: Project[];
  tech: string[];
};

type SelfEmployement = {
  id: number;
  type: WorkType.SelfEmployement;
  title: string;
  subTitle: string;
  companies: Company[];
  years: string;
  duration: string;
  achievements: string[];
  projects: Project[];
  tech: string[];
};

type Work = Employement | SelfEmployement;

function isEmployement(work: Work): work is Employement {
  return (work as Employement).type === WorkType.Employement;
}

function isSelfEmployement(work: Work): work is SelfEmployement {
  return (work as SelfEmployement).type === WorkType.SelfEmployement;
}

function renderLogo(logo?: string, size: string = "6rem") {
  if (logo) {
    return <div
        className="logo"
        style={{
          backgroundImage: `url('${logo}')`,
          minWidth: size,
          minHeight: size
        }}
      ></div>
  } else {
    return <></>;
  }
}

function renderProjects(projects: null | Project[], logoSize = "6rem") {
  if (projects) {
    return (
      <div className="projects">
        {projects.map((p: Project, i: number) => <div className="project" key={`project-${i}.${p.name}`}>
            <div className="side">
              {renderLogo(p.company?.logo, logoSize)}
            </div>
            <div className="side">
              <p>
                <b>{p.name}</b>
              </p>
              <p>{p.description}</p>
            </div>
          </div>
        )}
      </div>
    );
  } else {
    return <></>;
  }
}

function renderAchievements(achievements: string[]) {
  if (achievements != null) {
    // TODO box this?
    return <div>
      <h3>Achievements</h3>
        <div className="achievements">
          {achievements.map((a: string, i: number) => (
            <div className="achievement" key={`achievement-${i}.${a}`}>{a}</div>
          ))}
        </div>
      </div>
  } else {
    return <></>;
  }
}

function renderTech(tech: string[]) {
  if (tech != null) {
    // TODO box this?
    return <div>
       <h3>Technology</h3>
       <div className="tech">
         {tech.map((t: string, i: number) => (
            <div className="tag" key={`tech-${i}.${t}`}>{t}</div>
          ))}
        </div>
      </div>
  } else {
    return <></>;
  }
}

function renderWork(work: Work): JSX.Element {
  if (isEmployement(work)) {
    return (
      <div className="card work-card" key={work.id}>
        <div className="side">
          <div
            className="logo"
            style={{
              backgroundImage: `url('${work.company.logo}')`,
            }}
          ></div>
          <div className="time">
            <p>{work.years}</p>
            <p>{work.duration}</p>
          </div>
        </div>
        <div className="content">
          <div className="company">
            <p className="title">
              <b>{work.company.name}</b>
            </p>
            <p className="location">{work.company.location}</p>
          </div>
          <div className="job-details">
            <p>
              <b>{work.jobTitle}</b>
            </p>
            <p>{work.jobSubtitle}</p>
          </div>
          {renderProjects(work.projects)}
          {renderAchievements(work.achievements)}
          {renderTech(work.tech)}
        </div>
      </div>
    );
  } else if (isSelfEmployement(work)) {
    return (
      <div className="card work-card" key={work.id}>
        <div className="content">
          <p className="title">
            <b>{work.title}</b>
          </p>
          <p>{work.subTitle}</p>
          {renderProjects(work.projects, "3rem")}
        </div>
      </div>
    );
  } else {
    return <></>;
  }
}

export function Work() {
  return (
    <div className="container work-container">
      {data
        .sort((a: Work, b: Work) => b.id - a.id)
        .map((w: Work) => renderWork(w))}
    </div>
  );
}
