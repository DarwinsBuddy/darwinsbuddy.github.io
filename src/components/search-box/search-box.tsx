import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./search-box.css";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export function SearchBox() {
  return (
    <div className="searchbox">
      <FontAwesomeIcon icon={faSearch} className="icon"/>
      <input className="input" type="text"></input>
    </div>
  );
}