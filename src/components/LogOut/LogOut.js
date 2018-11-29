import React, { Component } from 'react'

import { props } from "prop-types";

export default class LogOut extends Component {

    constructor(props) {
        super(props);

        if( !localStorage.getItem("netflixToken") )
            this.props.history.push("/");
    }

    componentDidMount() {
        localStorage.clear();
        localStorage.removeItem("netflixToken");

        console.log("localStorage token: ", localStorage.getItem("netflixToken"));
    }

    render() {
    return (
      <div>

      </div>
    )
  }
}
