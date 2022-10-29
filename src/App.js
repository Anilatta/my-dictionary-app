import "./App.css";
import Dictionary from "./Dictionary.js";
export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h1>Dictionary of Definitions</h1>
        </header>
        <main>
          <Dictionary defaultKeyword="sun" />
        </main>
        <footer className="App-footer">
          <small>
            Coded by{" "}
            <a
              href="https://github.com/Anilatta/my-dictionary-app"
              target="_blank"
              rel="noreferrer"
            >
              {"Talina Dzhavakhadze "}
            </a>
          </small>
        </footer>
      </div>
    </div>
  );
}
