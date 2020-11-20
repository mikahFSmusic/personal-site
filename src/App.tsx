import React from "react"
import "./App.css"
import { NavBar } from "./components/NavBar"
import { LandingPage } from "./components/LandingPage"
import { Greeting } from "./components/Greeting"
import { Music } from "./components/Music"
import { Creations } from "./components/Creations"
import { Resume } from './components/Resume'

import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <div className="App">
            <NavBar />
            <LandingPage />
            <Greeting />
            <Music />
            <Creations />
          </div>
        </Route>
        <Route path="/resume">
          <NavBar />
          <Resume />
        </Route>
        <Route path="/linkedin" component= {() => {
          window.location.href = "https://www.linkedin.com/in/mikah-feldman-stein-470726100/";
          return null
        }}></Route>
        <Route path="/instagram" component= {() => {
          window.location.href = "https://www.instagram.com/mikahfsmusic/";
          return null
        }}></Route>
      </Switch>
    </Router>
  )
}

export default App
