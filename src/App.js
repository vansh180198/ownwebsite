import { Link, BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import Home from './pages/home'
import Navbar from './components/Navbar'
import Pahalgam from './pages/pahalgam'
import Gulmarg from './pages/gulmarg'
import Vaishnodevi from './pages/vd'
import Kargil  from './pages/kargil'


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact  component={Home} />
          <Route path='/pahalgam' component={Pahalgam} />
          <Route path='/gulmarg' component={Gulmarg} /> 
          <Route path='/kargil' component={Kargil} /> 
          <Route path='/vaishnodevi' component={Vaishnodevi} /> 
        </Switch>
      </Router>
       
      
    </>
  );
}

export default App;
