import { Router } from '@reach/router';
import './App.css';
import DisplayNum from './components/DisplayNum';
import DisplayPrettyColors from './components/DisplayPrettyColors';
import HomePage from './components/HomePage';

function App() {
  return (
    <div className="App">
      <Router>
        <HomePage path = "/home/"/>
        <DisplayNum path="/:val" />
        <DisplayPrettyColors path="/:val/:textColor/:bgColor" />
      </Router>
      
    </div>
  );
}

export default App;
