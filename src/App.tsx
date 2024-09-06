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
        <div className="split-view row">
          <div className="col mt-1 split-view-col">
            <AboutMe />
            <Education />
          </div>
          <div className="col mt-1 split-view-col">
            <Work />
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;
