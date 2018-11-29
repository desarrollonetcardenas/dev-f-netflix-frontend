import React, { Component } from 'react'
import './Home.scss';

export default class Home extends Component {
  render() {
    return (
      <div className="Home">
        <div className="row">
            <div className="col s5 Home-title">
                <h2>!Bienvenido a Netflix</h2>
                <a href="/signup" className="waves-effect waves-light btn btn-primary">
                    Iniciar
                </a>
            </div>
        </div>
      </div>
    )
  }
}
