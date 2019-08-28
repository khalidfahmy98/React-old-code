import React , {Component} from 'react';
import {BrowserRouter , Route} from 'react-router-dom';
import About from './views/about';
import Home from './views/home';
import Nav from './views/nav';
class App extends Component {
  render(){
    return (
      <BrowserRouter>
        <Nav />
        <Route exact path="/" component={Home}/>
        <Route  path="/about" component={About}/>
      </BrowserRouter>
    );
  }
}
export default App;
