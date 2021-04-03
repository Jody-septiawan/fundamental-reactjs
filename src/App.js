import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

import Header from './Components/Header';
import Content from './Pages/Content';
import About from './Pages/About';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="App">
      <Router>

        <Header title="Header Component" />
        <Navbar />

        <Switch>
          <Route path="/About">
            <About />
          </Route>
          <Route path="/">
            <Content title="Content Component" />
          </Route>
        </Switch>

      </Router>
    </div>
  );
}

export default App;
