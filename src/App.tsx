import "./App.css";
import { AboutMe } from "./components/AboutMe";
import { Work } from "./components/Work";
import { Header } from "./components/Header";
import { Education } from "./components/Education";

function App() {
  return (
    <div className="App">
      <Header />
      <AboutMe />
      <Work />
      <Education />
    </div>
  );
}
export default App;
