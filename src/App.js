import './App.css';
import { BrowserRouter as Router, Route,Switch} from 'react-router-dom';
import LoginComponent from './components/login';
import ProfilePage from './components/profile';
import RegisterComponent from'./components/register';

function App() {
  return (
    <div className="App">
      <Router >
        <Switch>       
        <Route exact path="/" component={LoginComponent} />
        <Route exact path="/profile-page" component={ProfilePage} />
        <Route exactpath="/register-page" component={RegisterComponent} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
