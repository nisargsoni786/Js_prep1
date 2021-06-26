import React,{useState} from 'react'
import{BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Home from './Screens/Home';
import Product from './Screens/Productscreen'
import Cart from './Screens/Cart';
import './app.css'
import Nav from './components/Navbar';
import Backdrop from './components/Backdrop'
import Sidedrawer from './components/Sidedrawer'

function App() {

  const [SideToggle, setSideToggle] = useState(false)

  return (
    <Router>
        <Nav click={()=> setSideToggle(true)} />
        <Sidedrawer show={SideToggle} click={()=> setSideToggle(false)}/>
        <Backdrop show={SideToggle} click={()=> setSideToggle(false)}/>
      <main className="app">
        <Switch>
          <Route exact path="/"  component={Home} />
          <Route exact path="/product/:id" component={Product} />
          <Route exact path="/cart" component={Cart} />
        </Switch>
      </main>
    </Router>
  )
}

export default App