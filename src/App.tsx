import "./App.css";
import { AboutMe } from "./components/AboutMe";
import { CV } from "./components/CV";
import { Header } from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <AboutMe />
      <CV />
    </div>
  );
}
export default App;
