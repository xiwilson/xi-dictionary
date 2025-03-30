import Dictionary from "./Dictionary";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <main>
        <Dictionary />
      </main>
      <footer>
        This app was coded by{" "}
        <a href="https://github.com/xiwilson">Linzi Wilson</a> and is
        open-sourced on{" "}
        <a href="https://github.com/xiwilson/xi-dictionary">Github</a> and
        hosted on <a href="https://xi-dictionary.netlify.app/">Netlify</a>
      </footer>
    </div>
  );
}

export default App;
