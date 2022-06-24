import './App.css';
import Dictionary from './Dictionary';

export default function App() {
  return (
    <div className="App">
      <div className='container'>
      <header className="App-header">
        Dictionary
      </header>
      <main>
        <Dictionary />
      </main>
      <footer className='App-footer'>
        <small>
        Coded by {" "}
        <a href='https://github.com/YiYiYiYiYiYiYiYiYiYiYi/dictionary-project' target={"_blank"} rel="noreferrer">
        Yi
        </a>
        </small>
      </footer>
      </div>
    </div>
  );
}

