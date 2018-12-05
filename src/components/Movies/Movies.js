import React, { Component } from 'react'
import gql from "graphql-tag";
import { Query } from "react-apollo";

import './Movies.scss';
import { Preloader } from "../../common/Preloader";
import MovieCard from "./MovieCard";

const ALLMOVIES = gql`
  query{
    movies{
      _id,
      movie_url,
      name,
      sinopsis,
      cover,
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
                      <MovieCard
                        image={movie.cover}
                        title={movie.title}
                        rating={movie.rating}
                      ></MovieCard>
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
