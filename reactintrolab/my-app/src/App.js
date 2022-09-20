import logo from './logo.svg';
import './App.css';

function App() { //npx create-react-app my-app
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-log" alt="logo" /> 
        <p>
          Hey
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
