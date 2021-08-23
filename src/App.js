import React from 'react';
import {Dashboard} from './pages/Dashboard';
import {holiday} from './pages/holiday';
import {Golden} from './pages/golden';
import {Taj} from './pages/taj';
import {qut} from './pages/qutub';
import {hum} from './pages/humpi';
import {potpo} from './pages/potpourri';
import {gpla} from './pages/gplan';
import {raj} from './pages/rajput';
import {raan} from './pages/ran';
import {khaj} from './pages/khajuraho';
import {kol} from './pages/kolkata';
import {my} from './pages/mysore';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';


import './App.css';
//import {Layout} from './compo/layout';
import { NavigationBar } from './compo/navigationbar';
import { Sidebar } from './compo/sidenavbar';


function App() {
  return (
    <>
    <NavigationBar/>
    <div >
  
  
      <Router>
    

    
   <Switch>
  <div className="layout">
  
  <Route exact path="/" component={Dashboard}/>
  <Route path="/holiday" component={holiday}/>
  <Route path="/golden" component={Golden}/>
  <Route path="/taj" component={Taj}/>
  <Route path="/qutub" component={qut}/>
  <Route path="/humpi" component={hum}/>
  <Route path="/potpourri" component={potpo}/>
  <Route path="/gplan" component={gpla}/>
  <Route path="/rajput" component={raj}/>
  <Route path="/rann" component={raan}/>
  <Route path="/khajura" component={khaj}/>
  <Route path="/kolkata" component={kol}/>
  <Route path="/mysore" component={my}/>

  </div>

 </Switch>
 <div className="side">
 <Sidebar />
 </div>
    </Router>
    </div>

    </>
  );
}

export default App;
