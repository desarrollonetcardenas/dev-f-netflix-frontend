import React, { Component } from 'react'

import payload from '../../payload';
import isAuthenticated from '../../isAuthenticated';



export default class Navbar extends Component {

  constructor(){
    super();
    this.state = {
      authenticated: localStorage.getItem("netflixToken") !== null
    }
  }

  authenticatedRender = () => {
    if(isAuthenticated()) {
      return (
        <ul className="right hide-on-med-and-down">
          <li><a href="/me">Hola {payload().email}</a></li>
          <li><a href="/movies">Peliculas</a></li>
          <li><a href="/logout">Log out</a></li>
        </ul>
      )
    } else {
      return (
        <ul className="right hide-on-med-and-down">
        <li><a href="/login">LOGIN</a></li>
        <li><a href="/signup">Sign Up</a></li>
        </ul>
      )
    }
  }

  render() {
    return (
      <nav>
          <div className="nav-wrapper bg-main">
              <a href="/" className="brand-logo">My Netflix</a>
              {
                  this.authenticatedRender()
              }
          </div>
      </nav>
    )
  }
}
