import "./App.css";
import { AboutMe } from "./components/AboutMe";
import { Work } from "./components/Work";
import { Header } from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <AboutMe />
      <Work />
    </div>
  );
}
export default App;
