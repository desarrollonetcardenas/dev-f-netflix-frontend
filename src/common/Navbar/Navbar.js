import React, { Component } from 'react'

export default class Navbar extends Component {
  render() {
    return (
      <div>
          <nav className="nav-wrapper bg-main">
            <a href="#" className="brand-logo">My Netflix perron</a>

            <ul className="right hide-on-med-and-down">
                <li><a href="/login">Login</a></li>
                <li><a href="/signup">Sign Up</a></li>
                <li><a href="/logout">Log Out</a></li>
            </ul>

          </nav>
      </div>
    )
  }
}
