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
        <AboutMe />
        <Work />
        <Education />
      </div>
    </div>
  );
}
export default App;
