import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './Components/Pages/Home'
import AllCountries from './Components/Pages/AllCountries'

function App() {
  return (
    <div className="App">
      <Router>
     
      <div>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/States' component={AllCountries} />

        </Switch>
      </div>
      </Router>
    </div>
  );
}

export default App;
