import React, { Component } from 'react'
import gql from "graphql-tag";
import { Query } from "react-apollo";

import './Movies.scss';
import { Preloader } from "../../common/Preloader";

const ALLMOVIES = gql`
  query{
    movies{
      _id,
      movie_url,
      name,
      sinopsis,
      rate,
      rating
      }
  }`;

export default class Movies extends Component {
  render() {
    return (
      <div className="container Movies">
        <div className="row">
          <Query query={ALLMOVIES}>
            {
              ({data,error,loading}) => {
                if(error) return <h4>{"Hubo un Error !! :("}</h4>
                if(loading) return  <Preloader/>
                const movies = data.movies.map((movie,index) => (
                    <div className="col s4" key={index}>
                        <h4>{movie.name}</h4>
                    </div>
                ))
                return(
                    <React.Fragment>
                        {movies}
                    </React.Fragment>
                )
              }
            }
          </Query>
        </div>
      </div>
    )
  }
}
