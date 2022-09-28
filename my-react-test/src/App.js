import logo from './logo.svg';
import './App.css';
import Menubar from './components/Menubar';
import Car from './components/Car';

function App() {
  return (
    <div className="App">
      <Menubar/>
      <Car brand="Ford" />
      <header className="App-header">
        
        <p>
          Edit <code>src/App.js</code> and save to reload.
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






              