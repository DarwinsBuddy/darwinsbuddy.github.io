import "./utils.css";

export function renderLogo(logo?: string, size: string = "4.5rem") {
  if (logo) {
    return (
      <div
        className="logo"
        style={{
          backgroundImage: `url('${logo}')`,
          minWidth: size,
          minHeight: size,
        }}
      ></div>
    );
  } else {
    return <></>;
  }
}

export function renderTag(tag: string, id: string) {
  return (
    <div className="tag" key={`tech-${id}.${tag}`}>
      {tag}
    </div>
  );
}

export function renderAchievement(achievement: string, id: string) {
  return (
    <div className="achievement" key={`achievement-${id}.${achievement}`}>
      {achievement}
    </div>
  );
}
