import "./App.css";
import { AboutMe } from "./components/about-me/about-me";
import { Work } from "./components/work/work";
import { Header } from "./components/header/header";
import { Education } from "./components/education/education";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="content">
        <div className="row">
          <AboutMe />
        </div>
        <div className="split-view row">
        <div className="col split-view-col">
            <Work />
          </div>
          <div className="col split-view-col">
            <Education />
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;
