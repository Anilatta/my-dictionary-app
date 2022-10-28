import "./App.css";
import Dictionary from "./Dictionary.js";
export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h1>My Dictionary</h1>
        </header>
        <main>
          <Dictionary defaultKeyword="moon" />
        </main>
        <footer className="App-footer">
          <small>Coded by Talina Dzhavakhadze</small>
        </footer>
      </div>
    </div>
  );
}
