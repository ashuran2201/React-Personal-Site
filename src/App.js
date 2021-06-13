import './App.css';
import Home from './pages/Index';
import About from './pages/About';
import Contact from './pages/Contact';
import Navi from './components/Navbar';
import { Route, Switch } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Navi/>
           <Switch>                
             <Route path='/about' component={About}/> 
             <Route path='/contact' component={Contact}/> 
             <Route path='/' component={Home}/>                
             
          </Switch>
    </div>
  );
}

export default App;
