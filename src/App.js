import './App.css';
import { Route, Switch } from 'react-router';
import Home from './components/Home'
import Contact from './components/Contact'
import Navbar from './components/Navbar'
import About from './components/About'
import Post from './components/Post'
function App() {

  return (
    <div className="App">

      
      <Navbar />

        <Switch >
          <Route exact path={"/"} component={Home}></Route>
          <Route exact path={"/about"} component={About}></Route>
          <Route exact path={"/contact"} component={Contact}></Route>
          <Route exact path={"/post/:id"} component={Post}></Route>
        </Switch>


    </div>
  );
}

export default App;
