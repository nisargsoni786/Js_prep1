import React,{useEffect} from 'react';
import {Route,Switch} from 'react-router-dom';
import Home from './fs/Home';
import Homes from './fs/Homes';
import Nav from './fs/Nav';
import About from './fs/About'
import Skill from './fs/Skill';
import Resume from './fs/Resume';
import Portfolio from './fs/Portfolio';
import Contact from './fs/Contact';
import Footer from './fs/Footer';
import './cssjs/aos.css';
import AOS from "aos";

function App() {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div className="App">

        <Nav/>
        <Switch>        
                 <Route exact path='/' component={Home} />
                 <Route exact path='/about' component={About} />
                 <Route exact path='/contact' component={Contact} />
                 <Route exact path='/projects' component={Portfolio} />
                 <Route exact path='/skill' component={Skill} />
                 <Route exact path='/exp' component={Resume} />
        </Switch>
        <Footer/>

    </div>
  );
}

export default App;
