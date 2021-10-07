import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import TopBar from './components/topbar/TopBar'
import Register from './pages/Register/Register'
import Login from './pages/Login/Login'
import Write from './pages/write/Write'
import Settings from './pages/settings/Settings'
import Single from './pages/single/Single'
import Home from './pages/Home/Home'
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';

function App () {

// sudo user to check the register
const user = false

  return (
    <Router>
      <TopBar />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/about'>
          <About />
        </Route>
        <Route path='/contact'>
          <Contact/>
        </Route>
        <Route path='/register'>
          {user ? <Home /> : <Register />}
        </Route>
        <Route path='/login'>
          {user ? <Home /> : <Login />}
        </Route>
        <Route path='/write'>
          {user ? <Write /> : <Register />}
        </Route>
        <Route path='/settings'>
          {user ? <Settings /> : <Register />}
        </Route>
        <Route path='/post/:postId'>
          <Single />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
