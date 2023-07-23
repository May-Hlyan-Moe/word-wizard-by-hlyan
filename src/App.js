import logo from './logo.svg';
import './App.css';
import Dictionary from './Dictionary';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>MH's Word Wizard</h1>
      </header>

      <main>
        <Dictionary />
      </main>

      <footer className='App-footer'>coded by  
        <a href='#'> May Hlyan Moe </a>
      </footer>
    </div>
  );
}

export default App;
