import React, { Component } from 'react'
import Rating from "react-rating";

export default class MovieCard extends Component {

    constructor(props){
        super(props);
    }

  render() {

    return (
      <div className="card">
          <div className="card-image waves-effect waves-block waves-light">
            <a href={`/movie/${this.props.id}`}>
              <img className="activator" src={this.props.image} alt="movie photo"/>
            </a>
          </div>
          <div className="card-content">
              <span className="card-title activator grey-text text-darken-4">
                  {this.props.title}
              </span>

              <Rating
                  initialRating={this.props.rating}
                  readonly
              />
          </div>
      </div>
    )
  }
}
