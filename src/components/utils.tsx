import "./utils.css";

export function renderLogo(
  logo?: string,
  link?: string,
  size: string = "3.5rem"
) {
  if (logo) {
    function _logo() {
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
    }
    return (
      <div className="logo-container">
        {renderIf(() => link, 
        () =><a href={link} target="_blank">{_logo()}</a>,
        _logo)}
      </div>
    );
  } else {
    return <></>;
  }
}

export function renderIf(predicate: () => any, thenRender: () => any, elseRender: () => any) {
  if (predicate()) {
    return thenRender();
  } else {
    return elseRender();
  }
}

export function renderTag(tag: string, id: string, classes?: string, keyPrefix?: string) {
  return (
    <div className={`tag ${classes || ""}`} key={`${keyPrefix || 'tag'}-${id}.${tag}`}>
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
