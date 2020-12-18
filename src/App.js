import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import LoginComponent from './components/login';


function App() {
  return (
    <div className="App">
      <Router >
        <Route exact path="/" component={LoginComponent} />
      </Router>
    </div>
  );
}

export default App;
