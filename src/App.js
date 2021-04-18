import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Naav from './Components/Navbar/Naav';
import Shop from './Components/Shop/Shop';
import Login from './Components/Log/Login';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      
      <Naav/>

      <Router>
        <Switch>
        <Route exact path="/"> <Shop/></Route>
        <Route exact path="/home"> <Shop/></Route>
        <Route path="/products"> <Shop/></Route>
        <Route exact path="/Login"> <Login/> </Route>

        </Switch>
      </Router>
      </div>
  );
}

export default App;
