import "./App.css";
import { AboutMe } from "./components/AboutMe";
import { Work } from "./components/Work";
import { Header } from "./components/Header";
import { Education } from "./components/Education";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="content">
        <div className="row">
          <div className="col mt-1 split-view-col">
            <AboutMe />
            <Education />
          </div>
          <div className="col mt-1">
            <Work />
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;
