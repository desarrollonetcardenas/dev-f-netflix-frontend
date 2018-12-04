import React, { Component } from 'react'

import './Home.scss';
import payload from '../../payload';
import isAuthenticated from '../../isAuthenticated';

export default class Home extends Component {

  constructor() {
    super();
    this.state = {
      authenticated: localStorage.getItem("netflixToken") !== null
    }
  }

  welcomeMessage = () => {
    if(isAuthenticated()) {
      return (
        <React.Fragment>
          <h2>!Bienvenido a Netflix</h2>
        </React.Fragment>
      )
    } else {
      return (
        <React.Fragment>
          <h2>!Bienvenido a Netflix</h2>
          <a href="/signup" className="waves-effect waves-light btn btn-primary">Iniciar</a>
        </React.Fragment>
      )
    }
  }

  render() {
    return (
      <div className="Home">
        <div className="row">
            <div className="col s6 offset-s3 Home-title">
            {
              this.welcomeMessage()
            }
            </div>
        </div>
      </div>
    )
  }
}
